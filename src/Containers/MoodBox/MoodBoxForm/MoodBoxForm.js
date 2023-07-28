import React, { Fragment, useLayoutEffect, useContext, useCallback, useState } from 'react';
import { Button, ScrollView, Text, View, Alert } from 'react-native';
import styled from 'styled-components';
import ScreenHeading from '@/Components/atoms/ScreenHeading';
import { useDispatch, useSelector } from 'react-redux';
import { setPatientProfile } from '@/Store/User';
import CallApi from '@/Util/callApi';
import api from '@/Util/api';
import { AxiosContext } from '@/Context/AxiosContext';
import MoodBoxQuestion from './MoodBoxQuestion';
import { useTranslation } from 'react-i18next';

const MoodBoxForm = ({ navigation, isLoading }) => {

    const { authAxios } = useContext(AxiosContext);
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const { moodBox } = useSelector(({ user }) => {
        return ({
            moodBox: user?.moodBox
        });
    });

    const [moodScores, setMoodScores] = useState({});
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const onSave = useCallback(() => {
        const isInValidForm = moodScores.some((key) => !key?.score);
        if (isInValidForm) {
            Alert.alert(t("moodBoxQuestions"));
            return;
        }
        setIsBtnDisabled(true);
        saveMoodBox({ data: moodScores });
    }, [moodScores, dispatch]);

    const saveMoodBox = async (reqData) => {
        const res = await CallApi(authAxios, "post", api?.patient?.saveMoodBox, null, null, reqData);
        if (res?.status === "success") {
            setIsBtnDisabled(false);
            setMoodScores({});
            await getPatientProfile();
        }
    };

    const getPatientProfile = async () => {
        const profile = await CallApi(authAxios, "get", api?.patient?.profile);
        if (profile?.status === "success") {
            dispatch(setPatientProfile(profile?.data));
            navigation.navigate(profile?.data?.B2B ? "Chatroom" : "Analytics");
        }
    }

    const handleChange = useCallback((name, val) => {
        const newMoodScores = [...moodScores];
        newMoodScores[parseInt(name)].score = parseInt(val);
        setMoodScores(newMoodScores);
    }, [moodScores]);

    useLayoutEffect(() => {
        if (moodBox?.data?.length) {
            const scores = moodBox?.data?.map((mood) => ({
                question_id: mood?.id,
                score: mood?.score,
            }));
            setMoodScores(scores);
        }
    }, [moodBox?.data]);

    return ((moodBox?.data?.length === 0) && !isLoading ?
        <ScreenHeading text={t("noMoodQuestions")} /> :
        <Fragment>
            <ScreenHeading text={"Mood Box"} />
            <ProvidedResponse>
                {t("pleaseNote")} : {t("providedResponse")}
            </ProvidedResponse>
            <InputWrapper>
                <QuestionScroller>
                    {moodBox?.data?.length && moodScores?.length ?
                        <Fragment>
                            {moodBox?.data.map((elem, index) => {
                                return (
                                    <Fragment key={elem.id + elem.question}>
                                        <MoodBoxQuestion qData={elem} index={index} handleChange={handleChange} moodScores={moodScores} />
                                    </Fragment>
                                );
                            })}
                            {/* <SaveButton
                                onPress={() => onSave()}
                                title={"Save"}
                                disabled={isBtnDisabled}
                            /> */}
                        </Fragment>
                        : null}
                </QuestionScroller>
                <SaveButton
                    onPress={() => onSave()}
                    title={"Save"}
                    disabled={isBtnDisabled}
                />
            </InputWrapper>
        </Fragment>
    )
};

/* --------------------------------- Styles --------------------------------- */

const ProvidedResponse = styled(Text)`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontBold};
  margin-bottom: ${({ theme }) => theme.spacingSm};
`;
const InputWrapper = styled(View)`
  margin-bottom: 30px;
  text-align: left;
  display: flex;
`;

const QuestionScroller = styled(ScrollView)`
  margin-top: 5px;
  margin-bottom: 60px;
`;

const SaveButton = styled(Button)`
  margin: 5px 50px;
  position:absolute;
`;

export default MoodBoxForm;