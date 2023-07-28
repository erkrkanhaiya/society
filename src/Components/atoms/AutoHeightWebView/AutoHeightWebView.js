import React, { useState } from "react";
import WebView from "react-native-webview";
const AutoHeightWebView = ({
    html
}) => {

    const [contentHeight, setContentHeight] = useState(10);

    const onNavigationChange = (event) => {
        console.log({event})
        if (event.title) {
            const htmlHeight = Number(event.title) //convert to number
            setContentHeight(htmlHeight);
        }
    }
    // console.log({ contentHeight })
    return (
        <WebView
            key={html}
            automaticallyAdjustContentInsets={false}
            androidLayerType={'hardware'}
            style={{
                height: contentHeight
                // width: 800,
            }}
            onNavigationStateChange={onNavigationChange}
            source={{ html }}
            javaScriptEnabled
        />
    )
}

export default AutoHeightWebView;