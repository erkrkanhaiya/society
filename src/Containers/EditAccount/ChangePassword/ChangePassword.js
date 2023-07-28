import React, { useState, useCallback } from 'react';
import { Alert, Button, View } from 'react-native';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';
import InputBox from '@/Components/atoms/InputBox/InputBox';
import { useTranslation } from 'react-i18next';
import CallApi from '@/Util/callApi';
import { useContext } from 'react';
import { AxiosContext } from '@/Context/AxiosContext';
import api from '@/Util/api';
import { Fragment } from 'react';
import styled from 'styled-components';

const ChangePassword = props => {

    const { authAxios } = useContext(AxiosContext);

    const { t } = useTranslation();

    const [loading, setLoading] = useState(true);

    const [inputData, setInputData] = useState({
        oldPass: "", newPass: "", confirmNewPass: ""
    });

    const [err, setErr] = useState(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const handler = useCallback((name, val) => {
        if (!(/^\s/.test(val))) {
            setInputData({
                ...inputData,
                [name]: val
            });
        }
    }, [inputData]);

    const inputArr = [
        { name: "oldPass", secureTextEntry: true, label: t("oldPassword"), value: inputData?.oldPass, handler, error: err && !inputData?.oldPass, errName: "" },
        { name: "newPass", secureTextEntry: true, label: t("newPassword"), value: inputData?.newPass, handler, error: err && !inputData?.newPass, errName: "" },
        { name: "confirmNewPass", secureTextEntry: true, label: t("confirmNewPassword"), value: inputData?.confirmNewPass, handler, error: err && !inputData?.confirmNewPass, errName: "" },
    ];

    const submit = useCallback(() => {
        const { oldPass, newPass, confirmNewPass } = inputData;
        if (oldPass && newPass && confirmNewPass) {
            if (newPass === confirmNewPass) {
                setErr(false);
                setIsBtnDisabled(true);
                submitForm({ old_password: oldPass, new_password: newPass, confirm_password: confirmNewPass });
            } else if (newPass !== confirmNewPass) {
                Alert.alert(t("passwordsMustMatch"));
            }
        } else {
            setErr(true);
        }
    }, [inputData]);

    const submitForm = async (data) => {
        try {
            const contactUs = await CallApi(authAxios, "post", api?.patient?.contactUs, null, null, data);
            setInputData({
                oldPass: "", newPass: "", confirmNewPass: ""
            });
            setIsBtnDisabled(false);
            Alert.alert(contactUs?.message);
        } catch (error) { 
            Alert.alert("errorMessage2");
        }
    }


    useFocusEffect(
        useCallback(() => {
            promise.then((res) => {
                return res
            }).then((resData) => {
                setTimeout(() => {
                    setLoading(!resData);
                }, 1000);
            }).catch((err) => { });
        }, []));

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 500);
    })

    if (loading) {
        return <Loader />
    }

    return (
        <Wrapper>
            {inputArr.map((elem) => {
                return (
                    <InputBox key={elem.name} {...elem} />
                )
            })}
            <SaveButton color="rgb(73, 31, 105)" title={t("save")} onPress={submit} disabled={isBtnDisabled} />
        </Wrapper>
    );
};

const Wrapper = styled(View)`
  margin:12px;
`

const SaveButton = styled(Button)`
  padding:12px;
  border:12px;
`

export default ChangePassword;