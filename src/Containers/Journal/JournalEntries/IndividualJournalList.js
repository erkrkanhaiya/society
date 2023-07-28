import React, { memo } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const IndividualJournalList = memo(() => {
  const { list } = useSelector(({ chatrooms }) => {
    return ({
      list: chatrooms?.eachJournalList
    })
  });
  return (
    <Wrapper>
      <Title>{list?.title}</Title>
      <Desc>{list?.title}</Desc>
    </Wrapper>
  )
});

const Wrapper = styled(View)`
  justify-content: space-between;
  margin:10px;
`
const Title = styled(Text)`
  margin:5px;
  width: 50%;
  padding-top:15;
  border-radius:12px;
  font-size:20px;
  font-weight:bold;
  color: rgb(73, 31, 105);
`

const Desc = styled(Text)`
  margin:5px;
  width: 50%;
  padding-top:15;
  border-radius:12px;
  color: rgb(73, 31, 105);
`
export default IndividualJournalList;
