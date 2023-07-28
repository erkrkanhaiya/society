import React, { useState, useCallback, useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AuthLayout from '@/Layout/AuthLayout'
import { Image } from 'react-native'

export default function ChatPopUp(props) {
  const [click, setclick] = useState('')
  function newclick(index) {
    setclick(index)
  }
  return (
    <AuthLayout {...props}>
      <View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '700',
            color: 'rgb(73, 31, 105)',
            marginLeft: 3,
            marginTop: 10,
          }}
        >
          How would you rate your crrent mood?
        </Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {[1, 2, 3, 4, 5].map((i, index) => {
          return (
            <TouchableOpacity onPress={() => newclick(index)}>
              <View
                // key={index}
                style={{
                  marginTop: 20,
                  width: 68,
                  height: 80,
                  borderWidth: 1,
                  borderColor: click === index ? 'green' : 'rgb(216, 213, 221)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: click === index ? 'green' : 'white',
                }}
              >
                <Image
                  source={require('../../src/Assets/Images/sadimo.png')}
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 10,
                    tintColor: click === index ? 'white' : 'rgb(73, 31, 105)',
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: click === index ? 'white' : 'rgb(73, 31, 105)',
                    position: 'absolute',
                    bottom: 8,
                  }}
                >
                  bad
                </Text>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    </AuthLayout>
  )
}
