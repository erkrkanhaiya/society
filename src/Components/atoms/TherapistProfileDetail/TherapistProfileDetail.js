import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Heading from "../Heading";
import Avatar from "../Avatar";
import AuthLayout from "@/Layout/AuthLayout";
import { Button } from "react-native";
import { ScrollView } from "react-native";
import OnlineIcon from "../OnlineIcon/OnlineIcon";

const DescriptionDetail = ({
    title, desc
}) => {
    return (
        <DescriptionWrapper>
            <Title>{title}</Title>
            <Description>{desc}</Description>
        </DescriptionWrapper>
    )
}

const TherapistProfileDetail = (props) => {

    const { t } = useTranslation();

    const { therapistProfile } = useSelector(({ user }) => {
        return ({
            therapistProfile: user?.therapistProfile
        })
    });

    const onPress = useCallback(() => {
        props?.navigation?.navigate("Chatroom");
    }, []);

    return (
        <AuthLayout {...props}>
            <Heading>{t("therapistProfile")}</Heading>
            <ProfileWrapper>
                <ProfilePic>
                    <Avatar
                        src={therapistProfile?.profile_image}
                        width={150}
                        height={150}
                        borderRadius={75}
                    />
                    {therapistProfile?.is_online && <OnlineIcon width={"20px"}
                        height={"20px"}
                        radius={"10px"}
                    />}
                </ProfilePic>
                <FullName>{therapistProfile?.full_name}</FullName>
                <Button
                    onPress={onPress}
                    color={"rgb(26, 85, 73)"} 
                    title={t("beginChat")} />
            </ProfileWrapper>
            <ProfileDescription>
                <DescriptionDetail title={t("experienceSummary")} desc={therapistProfile?.exp_summary} />
                <DescriptionDetail title={t("aboutMe")} desc={therapistProfile?.about_me} />
            </ProfileDescription>
        </AuthLayout>
    )
}

const ProfileWrapper = styled(View)`
    margin:3%;
    align-items:center;
`

const ProfilePic = styled(View)`

`

const ProfileDescription = styled(View)`
    margin:3%;
`

const FullName = styled(Text)`
    color: rgb(73, 31, 105);
    font-weight:bold;
    margin:5px;
`

const DescriptionWrapper = styled(View)`
    margin:2%;

`
const Title = styled(Text)`
    color:rgb(73, 31, 105);
    font-weight:bold;
    font-size:15px;
    margin:1%;
`

const Description = styled(Text)`
    color:rgb(73, 31, 105);
    margin:1%;
`

export default TherapistProfileDetail;