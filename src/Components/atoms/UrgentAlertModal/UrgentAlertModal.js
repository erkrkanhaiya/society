import { AxiosContext } from "@/Context/AxiosContext";
import api from "@/Util/api";
import CallApi from "@/Util/callApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, Text, View } from "react-native";
import styled from "styled-components";
import Heading from "../Heading";
import Modal from "../Modal/Modal";

const UrgentAlertModal = ({
    open, closeModal
}) => {
    const { t } = useTranslation();
    const { authAxios } = useContext(AxiosContext);

    const [isSent, setIsSent] = useState(() => {
        const urgentAlertSent = AsyncStorage.getItem('urgentAlertSent');
        if (urgentAlertSent) return new Date().getTime() - new Date(urgentAlertSent).getTime() < 24 * 3600 * 1000;
        else return false;
    });

    const onPress = useCallback(() => {
        onSendAlert();
    }, []);

    const onSendAlert = async () => {
        try {
            const urgentAlert = await CallApi(authAxios, "post", api?.patient?.urgentAlert);
            AsyncStorage.setItem('urgentAlertSent', new Date().toISOString());
            setIsSent(true);
            closeModal();
        } catch (error) {

        }
    }

    return (
        <Modal open={open} closeModal={closeModal}>
            <AlertWrapper>
                <Heading align={"left"}>{t("UrgentAlertTitle")}</Heading>
                <AlertContent>
                    {t("UrgentAlertModal")}
                </AlertContent>
            </AlertWrapper>
            <Button
                title={t("send")}
                color={"rgb(73, 31, 105)"}
                disabled={isSent ? true : false}
                onPress={onPress}
            />
        </Modal>
    )
}
const AlertWrapper = styled(View)`
    padding:5px;
`

const AlertContent = styled(Text)`
    color: rgb(73, 31, 105);
    font-size:14px;
    padding:6px;
`
export default UrgentAlertModal;