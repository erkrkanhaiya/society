import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Heading from '@/Components/atoms/Heading';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import JournalEntriesList from './JournalEntriesList';

const JournalEntries = ({ data, setCreateEntry }) => {
  const { t } = useTranslation();
  return (
    <JournalEntriesWrapper>
      <Heading>{t("journalEntries")}</Heading>
      <Text>{t("journalDescription1")}</Text>
      <Text>{t("journalDescription2")}</Text>
      <ScrollViewContainer>
        {data?.length ?
          data?.map((elem) => {
            return (
              <JournalEntriesList
                listData={elem}
                setCreateEntry={setCreateEntry}
                key={elem?.created_at} />
            );
          })
          : null}
      </ScrollViewContainer>
    </JournalEntriesWrapper>
  )
};

const JournalEntriesWrapper = styled(View)`
  margin:7px;
`
const ScrollViewContainer=styled(ScrollView)`
  height:350px;
  margin:10px;
`

export default JournalEntries;
