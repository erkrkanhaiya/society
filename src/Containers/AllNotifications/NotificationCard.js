import React from 'react';
import { Image, Text, View } from 'react-native';
import styled from 'styled-components';
import moment from 'moment';
import logo from '@/Assets/Images/logo.jpg';
import { useTranslation } from 'react-i18next';
import Swipe from '@/Components/atoms/Swipe/Swipe';

const NotificationCard = ({ markAsRead, id, created_at, message, read_status }) => {
    const { t } = useTranslation();
    return (
        <Swipe t={t} markAsRead={markAsRead} id={id} status={read_status}>
            <CardWrapper style={{
                backgroundColor: !read_status ? 'rgb(229, 229, 229)' : 'rgb(255, 255, 255)',

            }}>
                <CardContent>
                    <ContentText>{message}</ContentText>
                    <ContentText>
                        {moment(new Date(created_at)).format('LL')}
                    </ContentText>
                </CardContent>
                <CardImage>
                    <Logo source={logo} />
                </CardImage>
            </CardWrapper>
        </Swipe>
    )
};
const CardWrapper = styled(View)`
    flex-direction:row;
    border-radius:10px;
    margin:5px;
    border: 1px solid rgb(73, 31, 105);
`
const CardContent = styled(View)`
    width:70%;
    margin:2px;
    padding:2px;
`
const CardImage = styled(View)`
    margin:8px;
    width:25%;
`
const ContentText = styled(Text)`
    font-weight:500;
    margin:2px;
    padding:2px;
    color:rgb(73, 31, 105);
`

const Logo = styled(Image)`
  width:60px
  height: 60px;
  border-radius:30px;
`
export default NotificationCard;