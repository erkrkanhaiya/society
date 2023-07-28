import { View, Text } from 'react-native'
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign'





export default function Selector({data,onChange}) {
      //  const [value, setValue] = useState(null);
    // console.log(data,'ll')

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        onChange={onChange}
        // searchPlaceholder="Search..."
        // value={value}
        // onChange={item => {
        //   // setValue(item.value);
        // }}
        // onChangeText={(t)=>{console.log(t)}}
        // renderLeftIcon={() => (
        // //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        // )}
      />
    );
  };

  const styles = StyleSheet.create({
    dropdown: {
    //   margin: 16,
      height: 50,
      borderColor: 'rgba(0, 0, 0, 0.07)',
      borderWidth: 0.5,
      paddingHorizontal:12
    },
    icon: {
      marginRight: 5,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });