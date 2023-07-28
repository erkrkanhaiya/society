import React from "react";
import { Dimensions } from "react-native";
import { VictoryLegend } from "victory-native";

const VictoryLegendGraph = ({ data }) => {
    return (
        <VictoryLegend
            x={Dimensions.get("screen").width / 2 - 100}
            orientation={"horizontal"}
            gutter={20}
            data={[{
                name: "May",
                symbol: {
                    fill: "rgb(0, 200, 160)"
                }
            }]} 
        />
    );
}

export default VictoryLegendGraph;