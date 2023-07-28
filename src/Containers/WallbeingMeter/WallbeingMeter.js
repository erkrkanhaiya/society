import React, { useState, useCallback, useContext } from 'react';
import { Text, Button, View, TouchableOpacity, ScrollView } from 'react-native';

import AuthLayout from '@/Layout/AuthLayout';
import { Loader } from '@/Components/atoms';
import { useFocusEffect } from '@react-navigation/native';
import { AxiosContext } from '@/Context/AxiosContext';
import CallApi from '@/Util/callApi';
import api from '@/Util/api';
import Heading from '@/Components/atoms/Heading';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import NativeBarGraph from '@/Components/atoms/BarGraph/NativeBarGraph';
import moment from 'moment';
import Title from '@/Components/atoms/Title/Title';
import Meter  from '@/Assets/Icons/WallbeingMeter';

const ButtonWrapper = ({ xAxisData, type, dateFrom, dateTo, text, desc, index, activeIndex, setActiveIndex }) => {
  const updateActiveIndex = useCallback(() => {
    setActiveIndex({ index, desc, type, dateFrom, dateTo })
  }, [activeIndex]);

  return (
    <ButtonList style={{ backgroundColor: activeIndex?.index === index ? "rgb(73, 31, 105)" : "rgb(229, 229, 229)" }}>
      <TouchableOpacity onPress={() => { updateActiveIndex(); }}>
        <Text style={{ textAlign: "center", fontWeight: "bold", color: activeIndex?.index === index ? "rgb(255, 255, 255)" : "rgb(68, 68, 68)" }}>{text}</Text>
      </TouchableOpacity>
    </ButtonList>
  )
}

const WallbeingMeter = props => {
  const { authAxios } = useContext(AxiosContext);
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [therapy, setTherapy] = useState({});
  const [activeIndex, setActiveIndex] = useState(
    { index: 0, desc: t("dailyTitle"), dateTo: moment().format('YYYY-MM-DD'), dateFrom: moment().subtract(6, 'd').format('YYYY-MM-DD'), type: "" }
  );
  const [meterData, setMeterData] = useState({});


  const fetchTherapy = async () => {
    try {
      const therapy = await CallApi(authAxios, "get", api?.chatroom?.therapyTracker);
      setTherapy(therapy);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const fetchMeter = async () => {
    try {
      let meter = await CallApi(authAxios, "get", api?.patient?.wallbeingMeter(activeIndex?.dateFrom, activeIndex?.dateTo, activeIndex?.type));
      console.log({ meter });;
      setMeterData({ ...meter, xAxisData: activeIndex?.type === "monthly" ? calculateMonths() : activeIndex?.type === "week" ? calculateWeeks() : calculateDays() });
    } catch (error) {
      setMeterData({});
    }
  }

  function calculateWeeks() {
    let week = ["week1", "week2", "week3", "week4"]
    const momentStart = moment(activeIndex?.dateFrom);
    const momentFinal = moment(activeIndex?.dateTo);
    const msInWeek = 1000 * 60 * 60 * 24 * 7;

    const noOfWeek = Math.round(Math.abs(momentFinal - momentStart) / msInWeek);

    if (noOfWeek > 4) {
      week.push("week5");
    }
    return week;
  }

  const calculateMonths = () => {
    const momentStart = moment(activeIndex?.dateFrom);
    const momentFinal = moment(activeIndex?.dateTo);

    let result = [];
    if (momentFinal.isBefore(momentStart)) {
      return
    }

    while (momentStart.isBefore(momentFinal)) {
      result.push(momentStart.format("MMMM").substring(0, 3));
      momentStart.add(1, 'month');
    }

    return result
  }

  const calculateDays = () => {
    const momentStart = moment(activeIndex?.dateFrom);
    const momentFinal = moment(activeIndex?.dateTo);

    const diff = momentFinal.diff(momentStart, "days");

    if (diff >= 7) {
      return (moment.weekdays().substring(0, 3))
    }
    const firstDay = momentStart.day();
    const weekdaysBetween = [];

    for (let i = 0; i <= diff; i++) {
      weekdaysBetween.push(moment.weekdays((firstDay + i) % 7).substring(0, 3));
    }

    return (weekdaysBetween)
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeter();
    }, [activeIndex?.index]));

  useFocusEffect(
    useCallback(() => {
      fetchTherapy();
    }, [therapy]));

  if (loading) {
    return <Loader />
  }

  const buttonWrapper = [
    {
      text: t("daily"), desc: t("dailyTitle"), dateTo: moment().format('YYYY-MM-DD'), dateFrom: moment().subtract(6, 'd').format('YYYY-MM-DD'), type: ""
    },
    {
      text: t("weekly"), desc: t("weeklyTitle"), dateTo: moment().format('YYYY-MM-DD'), dateFrom: moment().subtract(27, 'd').format('YYYY-MM-DD'), type: "week"
    },
    {
      text: t("monthly"), desc: t("monthlyTitle"), dateTo: moment().format('YYYY-MM-DD'), dateFrom: moment().subtract(1 / 2, "y").format('YYYY-MM-DD'), type: "monthly"
    }
  ];


  return (
    <AuthLayout {...props}>
      <Title SVG={Meter}>
        <Heading>{t("wellbeingMeter")}</Heading>
      </Title>
      <MeterHeading>{t("wellbeingMeterHeading")}</MeterHeading>
      <ButtonContainer>
        {buttonWrapper.map((elem, index) => {
          return (
            <ButtonWrapper
              index={index}
              {...elem}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              key={elem.text}
            />
          )
        })}
      </ButtonContainer>
      <Heading>{activeIndex?.desc}</Heading>
      <GraphScrollView>
        {meterData?.data?.length && meterData?.data.map((elem) => {
          return (
            <GraphContainer key={elem?.tag}>
              <Heading>{elem?.tag}</Heading>
              <NativeBarGraph data={elem?.stats} xAxisData={meterData?.xAxisData} activeIndex={activeIndex} />
            </GraphContainer>
          )
        })}
      </GraphScrollView>
    </AuthLayout>
  )
};

const MeterHeading = styled(Text)`
  margin:4px;
  color: rgb(73, 31, 105);
`

const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  margin:10px;
`

const ButtonList = styled(View)`
  width: 30%;
  height: 40;
  padding-top:10;
  border-radius:8px;
`

const GraphScrollView = styled(ScrollView)`
  
`

const GraphContainer = styled(View)`
  margin:10px;
`

export default WallbeingMeter;
