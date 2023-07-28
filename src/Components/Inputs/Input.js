import React, { useContext, useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Keyboard,
  Image,
  ScrollView,
} from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Button } from '@/Components'
import styled from 'styled-components'
import { AuthContext } from '@/Context/AuthContext'
import { AxiosContext } from '@/Context/AxiosContext'
import * as Keychain from 'react-native-keychain'
import api from '@/Util/api'
import { useTranslation } from 'react-i18next'
import Logo from '@/Assets/Images/logo.png'
import Phonecountrypicker from '../countrypicker/Phonecountrypicker'
import Selector from '../selector/Selector'
import CheckBox from '@react-native-community/checkbox'
import {
  goBack,
  navigate,
  navigateAndReset,
  navigateAndSimpleReset,
} from '@/Navigators/utils'
import { Loader } from '@/Components/atoms'
import Toast from 'react-native-toast-message'

const loginValidationSchema = yup.object().shape({
  first_name: yup.string().required('First name is Required'),
  last_name: yup.string().required('Last name is Required'),
  email: yup.string().email('Email is invalid').required('Email is Required'),
  password: yup
    .string()
    .min(8, 'Must be 8 characters or more')
    .matches(/[a-z]+/, 'One lowercase character')
    .matches(/[A-Z]+/, 'One uppercase character')
    .matches(/[@$!%*#?&]+/, 'One special character')
    .matches(/\d+/, 'One number')
    .min(6, ({ min }) => 'Password must be at least 6 characters')
    .required('Password is required'),
  confirm_password: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.'),
})

const referalOptions = [
  { id: 1, label: 'Twitter', value: 'Twitter' },
  { id: 2, label: 'Facebook', value: 'Facebook' },
  { id: 3, label: 'Instagram', value: 'Instagram' },
  { id: 4, label: 'Linkedin', value: 'Linkedin' },
  { id: 5, label: 'Blogs or Press release', value: 'Blogs or Press release' },
  { id: 6, label: 'Search engines', value: 'Search engines' },
  { id: 7, label: 'Friend', value: 'Friend' },
  { id: 8, label: 'Gympass.com', value: 'Gympass.com' },
  { id: 9, label: 'Boots.com', value: 'Boots.com' },
  { id: 10, label: 'Boots PR', value: 'Boots PR' },
  { id: 11, label: 'Boots FB ad', value: 'Boots FB ad' },
  { id: 12, label: 'Boots IG ad', value: 'Boots IG ad' },
  { id: 13, label: 'Press release', value: 'Press release' },
]

const Inputs = ({ company_unique_id }) => {
  const companyUniqueId = company_unique_id
  const [isSelected, setSelection] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const [department, setdepartment] = useState([])
  const [hereaboutus, sethereaboutus] = useState('')
  const [selectCountry, setselectCountry] = useState('')
  const [selectdepartment, setselectdepartment] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [Notifi, setNotifi] = useState(false)
  const [Terms, setTerms] = useState(false)
  const authContext = useContext(AuthContext)
  const { publicAxios } = useContext(AxiosContext)
  const { t } = useTranslation()
  const [country, setcountry] = useState([])

  useEffect(() => {
    getCountry()
    getdepartment()
  }, [])

  async function getdepartment() {
    try {
      const response = await publicAxios.get(
        `${api.department}?company_unique_id=${companyUniqueId}`,
      )
      let _department = []
      response?.data?.data.map(i => {
        _department.push({
          id: i.id,
          label: i.name,
          value: i.name,
        })
      })
      setdepartment(_department)
    } catch (err) {
      Alert.alert('Department Api Failed', err.response.data.message)
    }
  }

  async function getCountry() {
    setisLoading(true)
    try {
      const response = await publicAxios.get(api.country)
      let newcountry = []
      response?.data?.data.map(i => {
        newcountry.push({
          id: i.id,
          label: i.name,
          value: i.name,
        })
      })
      setcountry(newcountry)
    } catch (err) {
      Alert.alert('Api Failed', err.response.data.message)
    } finally {
      setisLoading(false)
    }
  }

  const signUp = (values, { setSubmitting }) => {
    setisLoading(true)
    const apiData = {
      company_unique_id: companyUniqueId,
      confirmPassword: values.confirm_password,
      password: values.password,
      mobile: phonenumber,
      password_confirmation: values.confirm_password,
      first_name: values.first_name,
      last_name: values.last_name,
      // marketing: 0,
      email: values.email,
      referal: hereaboutus,
      send_marketing_email: +Notifi,
      country_id: selectCountry,
      department_id: selectdepartment,
      quiz_group: '',
    }
    const submitForm = async () => {
      try {
        Keyboard.dismiss()
        setSubmitting(true)
        const response = await publicAxios.post(api.patient.signup, apiData)

        Toast.show({
          type: 'success',
          text1: 'Signup Successful',
        })

        navigate('Login')
        setisLoading(false)
      } catch (err) {
        Alert.alert('Login Failed', err.response.data.message)
      } finally {
        setSubmitting(false)
        setisLoading(false)
      }
    }
    submitForm()
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <View style={styles.loginContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logopic source={Logo} resizeMode="contain" />
        <Titletext>{t('CreateYourAccount')}</Titletext>
        <View style={{ marginBottom: 30 }} />
        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={
            {
              // email: '', password: '',
              // last_name:''
            }
          }
          onSubmit={signUp}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
            isSubmitting,
          }) => {
            return (
              <View style={{}}>
                <View style={styles.inputView}>
                  <View>
                    <Text style={styles.label}>{t('first_Name')}</Text>
                    <TextInput
                      name="first_name"
                      style={[
                        styles.textInput,
                        { width: 175 },
                        errors.first_name &&
                          touched.first_name &&
                          styles.textInputError,
                      ]}
                      onChangeText={handleChange('first_name')}
                      onBlur={handleBlur('first_name')}
                      // value={values.first_name}
                    />
                    {errors.first_name && touched.first_name && (
                      <Text style={styles.errorText}>{errors.first_name}</Text>
                    )}
                  </View>

                  <View>
                    <Text style={styles.label}>{t('last_Name')}</Text>
                    <TextInput
                      name="last_name"
                      style={[
                        styles.textInput,
                        { width: 175 },
                        errors.last_name &&
                          touched.last_name &&
                          styles.textInputError,
                      ]}
                      onChangeText={handleChange('last_name')}
                      onBlur={handleBlur('last_name')}
                    />
                    {errors.last_name && touched.last_name && (
                      <Text style={styles.errorText}>{errors.last_name}</Text>
                    )}
                  </View>
                </View>

                <View style={styles.formField}>
                  <Text style={styles.label}>{t('emailAddressImportant')}</Text>
                  <TextInput
                    name="email"
                    style={[
                      styles.textInput,
                      errors.email && touched.email && styles.textInputError,
                    ]}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                </View>

                <Phonecountrypicker
                  defaultValue={phonenumber}
                  onchange={r => setphonenumber(r)}
                />

                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.label}>{t('country')}</Text>
                  <Selector
                    data={country}
                    onChange={({ id }) => {
                      setselectCountry(id)
                    }}
                  />
                </View>
                <View style={styles.formField}>
                  <Text style={styles.label}>
                    {t('enterPasswordImportant')}
                  </Text>
                  <TextInput
                    name="password"
                    style={[
                      styles.textInput,
                      errors.password &&
                        touched.password &&
                        styles.textInputError,
                    ]}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                  />
                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                </View>

                <View style={styles.formField}>
                  <Text style={styles.label}>{t('confirmPassword')}</Text>
                  <TextInput
                    name="confirm_password"
                    style={[
                      styles.textInput,
                      errors.confirm_password &&
                        touched.confirm_password &&
                        styles.textInputError,
                    ]}
                    onChangeText={handleChange('confirm_password')}
                    onBlur={handleBlur('confirm_password')}
                    value={values.confirm_password}
                    secureTextEntry
                  />
                  {errors.confirm_password && touched.confirm_password && (
                    <Text style={styles.errorText}>
                      {errors.confirm_password}
                    </Text>
                  )}
                </View>

                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.label}>{t('department')}</Text>
                  <Selector
                    data={department}
                    onChange={({ id }) => {
                      setselectdepartment(id)
                    }}
                  />
                </View>

                <View style={{ marginVertical: 10 }}>
                  <Text style={styles.label}>{t('howDidYouHearAboutUs')}</Text>
                  <Selector
                    data={referalOptions}
                    onChange={({ value }) => {
                      sethereaboutus(value)
                    }}
                  />
                </View>

                <View style={{ marginVertical: 10 }} />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={Terms}
                    onValueChange={() => setTerms(!Terms)}
                    style={styles.checkbox}
                    boxType="square"
                  />
                  <Text style={{}}>
                    Yes, I'm 16 years old and I agree to the Terms and Privacy
                    Policy.
                  </Text>
                </View>

                <View style={{ height: 18 }} />
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    value={Notifi}
                    onValueChange={() => setNotifi(!Notifi)}
                    style={styles.checkbox}
                    boxType="square"
                    sty
                  />
                  <Text>
                    Yes, keep me notified about events, updates and offers.
                  </Text>
                </View>

                <CustomButton variant="secondary" onPress={handleSubmit}>
                  {t('login')}
                </CustomButton>
              </View>
            )
          }}
        </Formik>
      </ScrollView>
    </View>
  )
}

export default Inputs

const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    // height:65,
    flexDirection: 'row',
    // marginBottom: 20,
    // marginLeft: 4,
    // backgroundColor: 'red',
    alignItems: 'center',
    // justifyContent:'center'
  },
  checkbox: {
    //alignSelf: 'center',
    // marginHorizontal: 10,
    height: 25,
    width: 25,
    marginLeft: 5,
    marginRight: 8,
    // backgroundColor: 'pink',
  },
  // label: {
  //   // margin: 8,
  //   // marginLeft:10,
  //   marginTop: 18,
  // },

  formField: {
    marginVertical: 10,
  },

  inputView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  label: {
    marginTop: 18,

    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loginContainer: {
    marginTop: 10,
    marginBottom: 40,
    // width: '80%',
    // alignItems: 'center',
    // padding: 10,
    // elevation: 10,
    // backgroundColor: '#e6e6e6',
  },
  textInput: {
    height: 45,
    paddingLeft: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderColor: '#c4c4c4',
    borderWidth: StyleSheet.hairlineWidth,
  },
  textInputError: {
    borderColor: '#ac1c1c',
  },
  errorText: {
    fontSize: 11,
    color: '#ac1c1c',
    marginVertical: 3,
  },
})

const CustomButton = styled(Button)`
  padding: 17px 65px;
  /* width: 175px; */
  margin-top: 15px;
  border-radius: 0;
  margin-bottom: 100px;
`
const Titletext = styled(Text)`
  /* width: 80px;
  height: 80px; */
  font-weight: bold;
  font-size: 18px;
  align-self: center;
`

const Logopic = styled(Image)`
  width: 80px;
  height: 80px;
  align-self: center;
`
