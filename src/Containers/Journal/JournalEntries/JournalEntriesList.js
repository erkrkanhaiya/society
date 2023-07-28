import { setEachJournalList } from '@/Store/ChatRooms';
import moment from 'moment';
import React from 'react';
import { Fragment } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import JournalAction from './JournalAction';

const JournalEntriesList = ({ listData, setCreateEntry }) => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <JournalEntriesListWrapper>
                <JournalDate>
                    <JournalData>{moment(listData?.created_at).format('YYYY/MM/DD HH:mm')}</JournalData>
                </JournalDate>
                <JournalContent onStartShouldSetResponder={() => {
                    dispatch(setEachJournalList({ ...listData }))
                }}>
                    <JournalData style={{
                        color: "rgb(73, 31, 105)",
                        textDecorationLine: "underline",
                        textDecorationColor: "rgb(73, 31, 105)"
                    }}>{listData?.title}</JournalData>
                </JournalContent>
                <JournalTitle>
                    <JournalData>
                        <JournalAction data={{...listData}} setCreateEntry={setCreateEntry} />
                    </JournalData>
                </JournalTitle>
            </JournalEntriesListWrapper>
            <BorderBottom></BorderBottom>
        </Fragment>
    )
};

const JournalEntriesListWrapper = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin:15px 5px;
`

const JournalDate = styled(View)`
    width:40%;
`

const JournalTitle = styled(View)`
    width:30%;
`

const JournalContent = styled(View)`
    width:30%;
`

const JournalData = styled(Text)`
    font-weight:bold;
`

const BorderBottom = styled(View)`
    border-bottom: #e5e5e5,
    border-width: 0.4px;
`

export default JournalEntriesList;
