import React, { useContext } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Keyboard,
  TouchableOpacity,
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

const loginValidationSchema = yup.object().shape({
  // email: yup.string().email('Email is invalid').required('Email is Required'),
  // password: yup
  //   .string()
  //   .min(6, ({ min }) => 'Password must be at least 6 characters')
  //   .required('Password is required'),
})

const LoginForm = () => {
  const authContext = useContext(AuthContext)
  const { publicAxios } = useContext(AxiosContext)
  const { t } = useTranslation()

  const logIn = (values, { setSubmitting }) => {
    const submitForm = async () => {
      try {
        Keyboard.dismiss()

        setSubmitting(true)

        // const response = await publicAxios.post(api.patient.login, values)

        // console.log(
        //   '🚀 ~ file: LoginForm.js ~ line 42 ~ submitForm ~ response.data',
        //   response.data,
        // )
        // const { access_token, refresh_token, role } = response.data

        authContext.setAuthState({
          accessToken: 'access_token',
          refreshToken: 'refresh_token',
          authenticated: true,
          role:'test',
        })
        const keychainPayload = JSON.stringify({
          accessToken: 'access_token',
          refreshToken: 'refresh_token',
          role:'test',
        })
        await Keychain.setGenericPassword('token', keychainPayload)
      } catch (err) {
        Alert.alert('Login Failed', err.response.data.message)
      } finally {
        setSubmitting(false)
      }
    }

    submitForm()
  }

  return (
    <View style={styles.loginContainer}>
      <Formik
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={logIn}
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
            <>
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
              <View style={styles.formField}>
                <Text style={styles.label}>{t('enterPasswordImportant')}</Text>
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
              <CustomButton
                variant="secondary"
                onPress={handleSubmit}
                isLoading={isSubmitting}
              >
                {t('login')}
              </CustomButton>
            </>
          )
        }}
      </Formik>
      <View>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        >
          <Text>Dont't have an account? </Text>
          <TouchableOpacity onPress={() =>{}}>
            <Text>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  formField: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  loginContainer: {
    marginTop: 10,

    // width: '80%',
    // alignItems: 'center',
    // padding: 10,
    // elevation: 10,
    // backgroundColor: '#e6e6e6',
  },
  textInput: {
    height: 40,
    width: '100%',
    marginTop: 5,
    paddingLeft: 12,
    backgroundColor: 'white',
    borderColor: '#c4c4c4',
    borderWidth: StyleSheet.hairlineWidth,
    // borderRadius: 10,
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
  border-radius: 5px;
`

export default LoginForm
