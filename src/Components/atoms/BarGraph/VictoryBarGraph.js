import React from "react";
import { VictoryBar } from "victory-native";



const VictoryBarGraph = ({ data, barRatio, fillColor }) => {
    return (
        <VictoryBar
            data={data}
            barRatio={barRatio}
            categories={{ x: [], y: [] }}
            style={{
                data: {
                    fill: fillColor
                }
            }}
        />
    )
}


export default VictoryBarGraph;