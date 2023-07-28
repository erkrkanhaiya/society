import React, { useState, useCallback, useContext } from 'react';
import { Text, View } from 'react-native';

import AuthLayout from '@/Layout/AuthLayout';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';
import { AxiosContext } from '@/Context/AxiosContext';
import CallApi from '@/Util/callApi';
import api from '@/Util/api';
import Heading from '@/Components/atoms/Heading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Title from '@/Components/atoms/Title/Title';
import Tracker from '@/Assets/Icons/Tracker';

const TherapyTracker = props => {
  const { authAxios } = useContext(AxiosContext);
  const { t } = useTranslation();
  const { chatRoomID } = useSelector(({ user }) => {
    return ({
      chatRoomID: user?.chatRoomID
    });
  });
  const [loading, setLoading] = useState(true);
  const [therapy, setTherapy] = useState({});


  const fetchTherapy = async () => {
    try {
      const therapy = await CallApi(authAxios, "get", api?.chatroom?.therapyTracker(chatRoomID));
      setTherapy(therapy);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchTherapy();
    }, [therapy]));

  if (loading) {
    return <Loader />
  }

  return (
    <AuthLayout {...props}>
      <Title SVG={Tracker}>
        <Heading>{t("therapyTracker")}</Heading>
      </Title>
      {(therapy?.data?.length) ? therapy?.data?.map((e, index) => {
        return (
          <StageWrapper key={e?.stage_name}>
            <StepperWrapper>
              <Stepper style={{
                backgroundColor: (e?.active) ? "rgb(145, 121, 164)" : "rgb(157, 157, 157)"
              }}><StepperCount>{index + 1}</StepperCount></Stepper>
              {/* <StepperInside
                  style={{
                    width: 3,
                    flexGrow: 1,
                    backgroundColor: "rgb(157, 157, 157)",
                    margin: 26
                  }}
                ></StepperInside> */}
              <StageHeader style={{
                backgroundColor: "rgb(145, 121, 164)",
              }}>
                <StageContent>{e?.stage_name}</StageContent>
              </StageHeader>
            </StepperWrapper>
            <WithoutStepper>
              {(e?.sub_stages?.length) ?
                e?.sub_stages?.map((elem) => {
                  return (
                    <View key={elem?.sub_stage_name} style={{
                      flexDirection: "row",
                      alignContent: "center",
                      justifyContent: "center"
                    }}>
                      <View
                        style={{
                          width: 52,
                          justifyContent: "center",
                          alignContent: "center",
                          alignItems: "center",
                          margin: 2
                        }}
                      >
                        <StepperInside
                          style={{
                            backgroundColor: "rgb(157, 157, 157)",
                            // height:40,
                            width: 2,

                          }}
                        ></StepperInside>
                      </View>
                      <StageHeader style={{
                        backgroundColor: (elem?.active) ? "rgb(241, 225, 253)" : "rgb(250, 243, 255)",
                        borderColor: (elem?.active) ? "rgba(73, 31, 105, 0.1)" : "rgb(250, 243, 255)",
                        borderWidth: 1,
                        // marginLeft: 48
                      }}>
                        <StageContent style={{
                          color: (elem?.active) ? "rgb(0, 98, 78)" : "rgb(73, 31, 105)"
                        }}>{elem?.sub_stage_name}</StageContent>
                      </StageHeader>
                    </View>
                  )
                })
                : null}
            </WithoutStepper>
          </StageWrapper>

        )
      }) : null}

    </AuthLayout >
  )
};

const WithoutStepper = styled(View)`
  
`

const StageWrapper = styled(View)`
  margin:2px;
`

const StepperWrapper = styled(View)`
  flex-direction:row;
`

const Stepper = styled(View)`
  height:40px;
  width:40px;
  border-radius:20px;
  justify-content:center;
  margin:0px 5px;
  
`

const StepperInside = styled(View)`
`

const StepperCount = styled(Text)`
  text-align:center;
  font-weight:bold;
  font-size:20px;
`

const StageHeader = styled(View)`
  width:88%;
  padding: 8px;
  border:0.5px;
`
const StageContent = styled(Text)`
  color: rgb(255, 255, 255);
  margin: 0px;
  font-weight:bold;
`
export default TherapyTracker
