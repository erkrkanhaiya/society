import React, { useContext, useState } from 'react'
import Input from '@/Components/molecules/chatroom/Input'
import { AxiosContext } from '@/Context/AxiosContext'
import api from '@/Util/api'

const InputContainer = ({ chatRoomID, messageSentCallback }) => {
  const [input, setInput] = useState('')
  const { authAxios } = useContext(AxiosContext)

  const validateButton = () => {
    return !input
  }

  const onPressButton = async () => {
    if (!input) {
      return
    }
    try {
      await authAxios.post(api.chatroom.sendMessage, {
        message: input,
        chatroom_id: chatRoomID,
      })
      messageSentCallback()
      setInput('')
    } catch (error) {}
  }

  return (
    <Input
      messageText={input}
      validateButton={validateButton}
      onChange={setInput}
      backgroundColor={'#fff'}
      borderTopColor={'#f5f5f5'}
      placeholderText={'Message...'}
      placeholderTextColor="#9e9e9e"
      messageTextColor={'#000'}
      textInputBgColor={'#f5f5f5'}
      editable={true}
      multiline={true}
      keyboardType={'default'}
      sendButtonImage={require('../../Assets/Images/send.png')}
      onPressButton={onPressButton}
    />
  )
}

export default InputContainer
