// import AutoHeightWebView from "@/Components/atoms/AutoHeightWebView/AutoHeightWebView";
import AutoHeightWebView from "@/Components/atoms/AutoHeightWebView/AutoHeightWebView";
import Heading from "@/Components/atoms/Heading";
import React from "react";
import { useTranslation } from "react-i18next";
import { Dimensions, ScrollView, Text, View } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components";

const Announcement = ({
    announcementData
}) => {
    const { t } = useTranslation();
    return (
        <Wrapper>
            <Heading>{t("announcements")}</Heading>
            {(announcementData?.data?.length) ?
                <ScrollView
                // style={{ minHeight: 50,width: 600 }}
                >
                    {announcementData?.data?.map(({ announcement }) => {
                        return (
                            // <AutoHeightWebView html={announcement} key={announcement} />
                            <View key={announcement} style={{ height: 100 }}>
                                <WebView
                                    automaticallyAdjustContentInsets={false}
                                    androidLayerType={'hardware'}
                                    style={{
                                        // backgroundColor: "red",
                                        height: 50,
                                        width: 800,
                                    }}
                                    key={announcement}
                                    source={{ html: announcement }}
                                    javaScriptEnabled
                                />
                            </View>
                        )
                    })}
                </ScrollView>
                : null}

        </Wrapper>
    )
}
const Wrapper = styled(View)`

`
export default Announcement;