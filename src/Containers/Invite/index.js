import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Keyboard,
  Alert,
} from 'react-native'
import React, { useContext } from 'react'
import { Button } from '@/Components'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import Logo from '@/Assets/Images/logo.png'
import * as yup from 'yup'
import styled from 'styled-components'
import { navigate } from '@/Navigators/utils'
import WelcomeLayout from '@/Layout/WelcomeLayout'
import Heading from '@/Components/atoms/Heading'
import api from '@/Util/api'
import { AxiosContext } from '@/Context/AxiosContext'

const validationSchema = yup.object().shape({
  invitationCode: yup.string().required('Invitation Code is Required'),
})

export default function Invite(props) {
  const { t } = useTranslation()
  const { publicAxios } = useContext(AxiosContext)

  const logIn = (values, { setSubmitting }) => {
    // setisLoading(true)
    const submitForm = async () => {
      try {
        Keyboard.dismiss()
        // setSubmitting(true)
        const response = await publicAxios.get(
          api.patient.verify + values?.invitationCode,
        )

        navigate('Createaccount', {
          company_unique_id: response?.data?.data?.company_unique_id,
        })
        // setisLoading(false)
      } catch (err) {
        Alert.alert('Auth Failed', err.response.data?.message)
      } finally {
        setSubmitting(false)
        // setisLoading(false)
      }
    }
    submitForm()
  }

  return (
    <WelcomeLayout isLogin isQuestionnaire {...props}>
      <Container>
        <Logopic source={Logo} resizeMode="contain" />
        <Formik
          validateOnMount={true}
          validationSchema={validationSchema}
          initialValues={{ invitationCode: '' }}
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
                  <Heading height={30}>{t('verifyInvitationCode')}</Heading>
                  <TextInput
                    placeholder={t('invitationCode')}
                    style={[
                      styles.textInput,
                      errors.invitationCode &&
                        touched.invitationCode &&
                        styles.textInputError,
                    ]}
                    onChangeText={handleChange('invitationCode')}
                    onBlur={handleBlur('invitationCode')}
                    value={values.invitationCode}
                    //   keyboardType="email-address"
                  />
                  {errors.invitationCode && touched.invitationCode && (
                    <Text style={styles.errorText}>
                      {errors.invitationCode}
                    </Text>
                  )}
                </View>

                <CustomButton variant="secondary" onPress={handleSubmit}>
                  {t('verifyInvitation')}
                </CustomButton>
              </>
            )
          }}
        </Formik>
      </Container>
    </WelcomeLayout>
  )
}

const styles = StyleSheet.create({
  formField: {
    marginVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  textInput: {
    height: 45,
    width: 180,
    marginTop: 5,
    paddingLeft: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.07)',
    borderColor: 'rgb(196, 196, 196)',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
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
  padding: 15px 65px;
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 4px;
`
const Logopic = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 70px;
  margin-bottom: 10px;
`
const Container = styled(View)`
  align-items: center;
  margin-top: 45px;
`
