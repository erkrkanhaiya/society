import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const OnlineIcon = ({
    width = "10px",
    height = "10px",
    radius = "5px"
}) => {
    return (
        <StatusIcon {...{ width, height, radius }}></StatusIcon>
    )
}
const StatusIcon = styled(View)`
    content: '';
    height: ${(props) => props.width};
    width: ${(props) => props.height};
    border: 1px solid #fff;
    background-color: green;
    border-radius: ${(props) => props.radius};
    position: absolute;
    right: 2px;
    top: 66%;
    margin-top: 9px;
`
export default OnlineIcon;