import Delete from '@/Assets/Icons/Delete';
import Edit from '@/Assets/Icons/Edit';
import Share from '@/Assets/Icons/Share';
import { AxiosContext } from '@/Context/AxiosContext';
import { setEachJournalList } from '@/Store/ChatRooms';
import api from '@/Util/api';
import CallApi from '@/Util/callApi';
import React, { Fragment, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View, Alert,Image } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import share from '../../../Assets/Images/share.png';

const JournalAction = ({ data, setCreateEntry }) => {

    const { authAxios } = useContext(AxiosContext);
    const dispatch = useDispatch();

    const { t } = useTranslation();

    const shareJournal = async (isShared) => {
        const reqData = {
            journal_id: data?.journal_id,
            share_with_therapist: isShared
        }
        try {
            const shareJournal = await CallApi(authAxios, "post", api?.chatroom?.shareJournal, null, null, reqData);
            Alert.alert(shareJournal?.message);
        } catch (error) {

        }
    }

    const deleteJournal = async () => {
        try {
            const deleteJournal = await CallApi(authAxios, "post", api?.chatroom?.deleteJournal(data?.journal_id), null, null, null);
            Alert.alert(deleteJournal?.message);
        } catch (error) {}
    }

    return (
        <Fragment>
            <JournalActionWrapper>
                <JournalShare onStartShouldSetResponder={() => Alert.alert(
                    t("shareJournalPopUp"),
                    "",
                    [{
                        text: "Cancel",
                        onPress: () => console.log("Cancel pressed"),
                        style: "destructive"
                    },
                    {
                        text: data?.shared_with_therapist ? "No" : "Yes",
                        onPress: () => shareJournal(data?.shared_with_therapist ? 0 : 1),
                    },
                    ]
                )}>
                <ShareIcon source={share} />
                    
                    {/* <JournalData><Share /></JournalData> */}
                </JournalShare>
                <JournalEdit
                    onStartShouldSetResponder={() => {
                        dispatch(setEachJournalList(data));
                        setCreateEntry(true);
                    }}>
                    <JournalData><Edit /></JournalData>
                </JournalEdit>
                <JournalDelete onStartShouldSetResponder={() => Alert.alert(
                    t("deleteJournal"),
                    t("deleteJournalPara"),
                    [{
                        text: "Cancel",
                        onPress: () => console.log("Cancel pressed"),
                        style: "destructive"
                    },
                    {
                        text: "Delete",
                        onPress: () => deleteJournal(),
                        style: "destructive"
                    },
                    ]
                )}>
                    <JournalData><Delete /></JournalData>
                </JournalDelete>
            </JournalActionWrapper>
        </Fragment>
    )
};

const JournalActionWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
`

const JournalShare = styled(View)`
    width:30%;
    padding-left:1px;
    margin:3px;
`

const JournalEdit = styled(View)`
    width:30%;
    padding-left:1px;
    margin:3px;

`

const JournalDelete = styled(View)`
    width:30%;
    padding-left:1px;
    margin:3px;

`

const JournalData = styled(Text)`
    font-weight:bold;
`

const ShareIcon = styled(Image)`
  width:20px
  height: 20px;
  background-color:transparent;
`

export default JournalAction;
