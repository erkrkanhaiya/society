import React, { } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Heading from './Heading';

const ScreenHeading = (props) => {
  return (
    <PageHeading>
      <Heading {...props} />
    </PageHeading>
  );
}

export default ScreenHeading;

export const PageHeading = styled(View)`
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.greyLight || "black"};
  svg {
    margin-right: ${({ theme }) => theme.spacingMd};
    fill: ${({ theme }) => theme.primary};
  }
`