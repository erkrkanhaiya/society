import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useCallback } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis, VictoryLabel } from "victory-native";
import Loader from "../Loader";

const NativeBarGraph = ({ activeIndex, data, xAxisData }) => {

    const [barData, setBarData] = useState({ data: [{ x: "", y: 0 }] });
    const [loading, setLoading] = useState(true);

    const showTextInYaxis = (i) => {
        let textValue = "";
        const indexValue = [
            // { id: 0, value: "None" },
            { id: 0, value: "None" },
            { id: 1, value: "A little" },
            { id: 2, value: "A lot" },
            { id: 3, value: "Severely" },
            { id: 4, value: "Extremely" },
        ];
        for (let index = 1; index < indexValue.length; index++) {
            if (i === indexValue[index]["id"]) {
                textValue = indexValue[index]["value"];
            }
        }
        return textValue;
    }

    const calculateSum = (sum, d) => (sum + d)

    const formatWeekData = (data) => {
        let sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0;
        if (data?.length) {
            for (let i = 0; i < data?.length; i++) {
                if (i >= 0 && i < 7) {
                    sum1 = calculateSum(sum1, data[i]);
                } else if (i > 6 && i < 14) {
                    sum2 = calculateSum(sum2, data[i]);
                } else if (i > 13 && i < 21) {
                    sum3 = calculateSum(sum3, data[i]);
                } else if (i > 20 && i < 28) {
                    sum4 = calculateSum(sum4, data[i]);
                }
            }
            let tempArr = [sum1 / 7, sum2 / 7, sum3 / 7, sum4 / 7];
            return tempArr;
        }
    }

    useFocusEffect(
        useCallback(() => {
            setLoading(true);
            let localData = data;
            if (activeIndex?.index === 1) {
                localData = formatWeekData(data)
            }
            if (localData?.length && xAxisData?.length) {
                const barData = [];
                localData.map((elem, index) => {
                    barData.push({ x: xAxisData[index], y: elem })
                });
                setBarData({ data: barData });
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        }, [data?.length, xAxisData?.length])
    );

    if (loading) {
        return <Loader />
    } else {
        return (
            <GraphView horizontal={true}>
                <VictoryChart
                    domainPadding={{ x: [30, 0],y:[0, 0] }}
                    width={activeIndex?.type === "monthly" ? 350 : 350}
                >
                    <VictoryAxis style={{ axis: { stroke: "transparent" } }} />
                    <VictoryAxis
                        label="Progress"
                        // tickFormat={(datum, i) => showTextInYaxis(i)}
                        tickFormat={(datum, i) => ""}
                        dependentAxis={true}
                        // style={{ axis: { stroke: "transparent" } }}
                    />
                    <VictoryGroup>
                        <VictoryBar
                            barWidth={5}
                            data={barData?.data}
                            style={{
                                data: {
                                    fill: "rgb(0, 200, 160)"
                                }
                            }}
                        // x="displayName"
                        // y="income"
                        />
                    </VictoryGroup>
                    {/* <VictoryLegendGraph /> */}
                </VictoryChart>
            </GraphView>
        )
    }
}

const GraphView = styled(ScrollView)`
    border: 1px solid rgb(73, 31, 105);
    border-radius:8px;
    padding-left:10px;
`

export default NativeBarGraph;