import React, { useState, useCallback } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import AuthLayout from '@/Layout/AuthLayout';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';
import styled from 'styled-components';
import Gradient from '@/Components/atoms/Gradient/Gradient';
import { useTranslation } from 'react-i18next';
import ModalComponent from "../../Components/atoms/Modal/Modal";
import InputBox from '@/Components/atoms/InputBox/InputBox';
import CallApi from '@/Util/callApi';
import api from '@/Util/api';
import { useContext } from 'react';
import { AxiosContext } from '@/Context/AxiosContext';

const AdditionalSupport = props => {
  const { t } = useTranslation();
  const { authAxios } = useContext(AxiosContext);

  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [inputData, setInputData] = useState({
    sub: "", msg: ""
  });
  const [err, setErr] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const submit = useCallback(() => {
    const { sub, msg } = inputData;
    if (sub && msg) {
      setErr(false);
      setIsBtnDisabled(true);
      submitForm({ sub,msg });
    } else {
      setErr(true);
    }
  }, [inputData]);

  const submitForm = async (data) => {
    try {
      const additionalSupport = await CallApi(authAxios, "post", api?.general?.additionalSupport(data?.sub,data?.msg), null, null, data);
      setInputData({
        sub: "", msg: ""
      });
      setIsBtnDisabled(false);
      Alert.alert(additionalSupport?.message);
    } catch (error) { }
  }

  const handler = useCallback((name, val) => {
    if (!(/^\s/.test(val))) {
      setInputData({
        ...inputData,
        [name]: val
      });
    }
  }, [inputData]);

  useFocusEffect(
    useCallback(() => {
      promise.then((res) => {
        return res
      }).then((resData) => {
        setTimeout(() => {
          setLoading(!resData);
        }, 1000);
      }).catch((err) => {

      });
    }, []))

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  })

  if (loading) {
    return <Loader />
  }

  const inputArr = [
    { name: "sub", label: t("subject"), value: inputData?.sub, handler, error: err && !inputData?.sub },
    {
      name: "msg", label: t("Message"), placeHolder: t("messageTooltip"),
      value: inputData?.msg, handler, multiline: true, numberOfLines: 12, error: err && !inputData?.msg
    }
  ];

  return (
    <Gradient>
      <AuthLayout {...props}>
        <AdditionalWrapper>
          <HeadingText>{t("additionalSupport")}</HeadingText>
          <ButtonWrapper>
            <AppointementButton
              onPress={() => setOpenModal(true)}
              title={t("bookAnAppointment")}
              color={"rgb(73, 31, 105)"}
            >
            </AppointementButton>
          </ButtonWrapper>
        </AdditionalWrapper>
        <ModalComponent open={openModal} closeModal={setOpenModal}>
          {inputArr.map((elem) => {
            return (
              <InputBox key={elem.name} {...elem} />
            )
          })}
          <Button color="rgb(73, 31, 105)" title={t("send")} onPress={submit} disabled={isBtnDisabled} />

        </ModalComponent>
      </AuthLayout>
    </Gradient>
  )
};

const AdditionalWrapper = styled(View)`
`
const HeadingText = styled(Text)`
  color: white;
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin:10px;
`
const ButtonWrapper = styled(View)`
  margin:10px 50px;
`
const AppointementButton = styled(Button)`
  border-radius: 4px;
  border: 1px solid transparent;
  font-size: 15px;
  font-weight: 700;
`

export default AdditionalSupport;
