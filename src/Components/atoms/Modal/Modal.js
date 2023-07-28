import React, { memo } from 'react'
import styled from 'styled-components'
import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const ModalComponent = ({
  open,
  children,
  closeModal,
  showCloseButton = true,
  height = 'auto',
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={() => {
        // setModalVisible(!modalVisible)
        closeModal(false)
      }}
    >
      {/* <TouchableWithoutFeedback
        style={{ height: '100%' }}
        activeOpacity={1}
        onPress={() => {
          // closeModal(false)
        }}
      >  */}
      <CenteredView>
        {/* <TouchableWithoutFeedback activeOpacity={1}> */}
        <ModalView height={height}>
          {showCloseButton && (
            <Pressable
              onPress={() => {
                closeModal(false)
              }}
            >
              <CloseIconWrapper>
                <CloseIcon>x</CloseIcon>
              </CloseIconWrapper>
            </Pressable>
          )}
          {children}
        </ModalView>
        {/* </TouchableWithoutFeedback> */}
      </CenteredView>
      {/* </TouchableWithoutFeedback> */}
    </Modal>
  )
}
const CloseIconWrapper = styled(View)`
  position: absolute;
  right: -27px;
  top: -27px;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  z-index: 30;
  elevation: 30;
  border-width: 0.2px;
  shadowcolor: '#8c8c8c';
  shadowopacity: 0.2;
  shadowradius: 1px;
`

const CloseIcon = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.primary};
`

const CenteredView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`

const ModalView = styled(View)`
  background: #fff;
  padding: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  width: 85%;
  height: ${({ height }) => height};
`

export default memo(ModalComponent)
