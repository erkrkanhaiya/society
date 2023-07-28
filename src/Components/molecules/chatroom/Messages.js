import { ScrollView, Text, View } from 'react-native'
import React, { forwardRef, useRef } from 'react'
import Bubble from './Bubble'
import styled from 'styled-components'

const isCloseToTop = ({ layoutMeasurement, contentOffset, contentSize }) => {
  return contentOffset.y === 0
}

const Messages = (
  { messages, userRole, pageLimit, totalMessages, setPageLimit },
  scrollViewRef,
) => {
  if (!messages?.length) {
    return <View style={{ flex: 1 }} />
  }

  return (
    <StyledScrollView
      onLayout={() => {
        scrollViewRef.current.scrollToEnd({ animated: false })
      }}
      showsVerticalScrollIndicator={false}
      onScroll={({ nativeEvent }) => {
        if (isCloseToTop(nativeEvent)) {
          if (totalMessages > pageLimit) {
            setPageLimit(currPageLimit => currPageLimit + 50)
          }
        }
      }}
      ref={scrollViewRef}
      scrollEventThrottle={200}
    >
      {/* <Text>sdfv</Text> */}
      {messages.map((item, index) => {
        const prevIndex = index - 1
        const currentMessage = item
        const previousMessage = messages[prevIndex >= 0 ? prevIndex : 0]

        return (
          <Bubble
            key={item.message_id}
            item={item}
            currentMessage={currentMessage}
            previousMessage={previousMessage}
            isSender={item.sent_by_role === (userRole || 'patient')}
          />
        )
      })}
    </StyledScrollView>
  )
}

export default forwardRef(Messages)

const StyledScrollView = styled(ScrollView)`
  margin-top: 5px;
  margin-bottom: 10px;
`
// margin-bottom: 150px;
// flex: 1;
