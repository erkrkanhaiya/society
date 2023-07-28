import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";

const CountBadge = ({ count }) => {
    return (
        <BadgeWrapper>
            <BadgeCount>{count}</BadgeCount>
        </BadgeWrapper>
    );
}

const BadgeWrapper = styled(View)`
    width: 16px;
    height: 16px;
    borderRadius: 8px;
    backgroundColor: red;
    align-content:center;
    justify-content:center;
`
const BadgeCount = styled(Text)`
    color: #FFF;
    font-size:10px;
    text-align:center;
`
export default CountBadge;