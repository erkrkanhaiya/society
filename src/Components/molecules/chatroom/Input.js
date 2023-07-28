import React, { Component } from 'react'
import {
  View,
  TextInput,
  Image,
  Animated,
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import styled from 'styled-components'
// import AudioRecorder from './AudioRecorder'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 0,
      isFocused: false,
      keyboardOffset: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this._keyboardWillShowSubscription = Keyboard.addListener(
      'keyboardWillShow',
      e => this._keyboardWillShow(e),
    )
    this._keyboardWillHideSubscription = Keyboard.addListener(
      'keyboardWillHide',
      e => this._keyboardWillHide(e),
    )
  }

  _keyboardWillShow(e) {
    Animated.spring(this.state.keyboardOffset, {
      //  toValue: DeviceInfo.getModel() === "iPhone X" ? e.endCoordinates.height - 34 : e.endCoordinates.height,
      toValue: e.endCoordinates.height,
      friction: 8,
      useNativeDriver: true,
    }).start()
  }

  _keyboardWillHide(e) {
    Animated.spring(this.state.keyboardOffset, {
      toValue: 0,
      friction: 8,
      useNativeDriver: true,
    }).start()
  }

  render() {
    return (
      <Animated.View>
        {/* <AudioRecorder /> */}
        <View
          style={[
            styles.textInputParentView,
            {
              borderTopColor: this.props.borderTopColor,
              backgroundColor: this.props.backgroundColor,
              paddingBottom: this.state.isFocused ? 30 : 5,
            },
          ]}
        >
          <View style={styles.textInputView}>
            <TextInput
              onFocus={() => this.setState({ isFocused: true })}
              onBlur={() => this.setState({ isFocused: false })}
              editable={this.props.editable}
              multiline={this.props.multiline}
              placeholder={this.props.placeholderText}
              placeholderTextColor={this.props.placeholderTextColor}
              placeholderStyle={[
                styles.placeholderStyle,
                { color: this.props.placeholderTextColor },
              ]}
              underlineColorAndroid="transparent"
              keyboardType={this.props.keyboardType}
              value={this.props.messageText}
              onChange={event => {
                event.target.value
              }}
              onChangeText={editedText => {
                this.props.onChange(editedText)
              }}
              onContentSizeChange={event =>
                this.setState({ height: event.nativeEvent.contentSize.height })
              }
              style={[
                styles.textInputStyle,
                {
                  height: Math.min(120, Math.max(35, this.state.height)),
                  backgroundColor: this.props.textInputBgColor,
                  color: this.props.messageTextColor,
                },
              ]}
            />
          </View>
          <TouchableOpacity
            disabled={this.props.validateButton()}
            onPress={() => this.props.onPressButton()}
          >
            <View style={styles.buttonPosition}>
              <StyledSendBtn
                isText={this.props.validateButton()}
                style={[styles.sendButtonStyle]}
              >
                <Image
                  style={{ width: 18, height: 18 }}
                  source={this.props.sendButtonImage}
                />
              </StyledSendBtn>
            </View>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

const StyledSendBtn = styled(View)`
  background: ${({ theme }) => theme.color.primary};
  opacity: ${({ isText }) => (isText ? 0.5 : 1)};
`

const styles = StyleSheet.create({
  textInputParentView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    paddingVertical: 5,
    marginBottom: 30,
  },
  textInputView: {
    flex: 1,
    marginRight: 15,
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: 14,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 10,
    paddingTop: 8,
    textAlign: 'left',
    borderRadius: 5,
    borderColor:"rgb(73, 31, 105)",
    borderWidth:1,
  },
  buttonPosition: {
    justifyContent: 'flex-end',
    flex: 1,
    ...Platform.select({ android: { marginVertical: 1 } }),
  },
  sendButtonStyle: {
    paddingVertical: 15,
    paddingLeft: 20,
    paddingRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  placeholderStyle: {
    fontSize: 12,
    textAlignVertical: 'center',
  },
})
