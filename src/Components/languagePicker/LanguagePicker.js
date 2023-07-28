import Close from "@/Assets/Icons/Close";
import Globe from "@/Assets/Icons/Globe";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, Image, Alert } from "react-native";
import styled from "styled-components";
import Heading from "../atoms/Heading";

const LanguagePicker = ({ color, setOpacity, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [selectedLangObj, setSelectedLangObj] = useState({});

  const { i18n, t } = useTranslation();

  const languages = [
    { name: 'en', label: 'English', shortName: "UK", index: 0 },
    { name: 'sr', label: 'Serbian', shortName: "SRB", index: 1 },
    { name: 'el', label: 'Greek', shortName: "GR", index: 2 },
    { name: 'ar', label: 'Arabic', shortName: "UAE", index: 3 },
  ];

  let flagImages = [
    require('../../Assets/Images/UK.png'),
    require('../../Assets/Images/Serbian.png'),
    require('../../Assets/Images/Greek.png'),
    require('../../Assets/Images/Arabic.png')
  ];

  const LanguageItem = ({ name, label, shortName, iconIndex }) => (
    <PressableText
      onPress={async () => {
        i18n.changeLanguage(name)
        try {
          await AsyncStorage.setItem('langKey', name)
          setSelectedLang(name.toUpperCase())
          setModalVisible(!modalVisible);
          setOpacity(1);
          setSelectedLangObj({ name, label, shortName, iconIndex });
        } catch (error) { }
      }}
    >
      <TextView selected={name.toUpperCase() === selectedLang}>
        <IconView>
          <IconImage source={flagImages[iconIndex]} />
        </IconView>
        {label}
      </TextView>
    </PressableText>
  )

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('langKey').then(language => {
        if (language) {
          let preSelectedLang = languages.find((e) => e.name === language);
          i18n.changeLanguage(language);
          setSelectedLang(language.toUpperCase());
          setSelectedLangObj({ ...preSelectedLang, iconIndex: preSelectedLang?.index });
        }
      })
    }, [selectedLang]),
  )
  // !(navigation?.getState()?.routeNames).includes("LeftDrawer")
  return (
    <ModalWrapper>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}
      >
        <CenteredView style={{ border: '12px' }}>
          <ModalView>
            <HeadingWrapper>
              <Heading height={"30px"}>{t("selectLang")}</Heading>
              <CloseBtnWrapper>
                <PressableText onPress={() => {
                  setModalVisible(!modalVisible);
                  if (setOpacity) {
                    setOpacity(1);
                  }
                }}>
                  <Close stroke={"rgb(73, 31, 105)"} height={"15px"} />
                </PressableText>
              </CloseBtnWrapper>
            </HeadingWrapper>
            {languages.map((lang, i) => (
              <LanguageItem {...lang} key={lang.name} iconIndex={i} />
            ))}
          </ModalView>
        </CenteredView>
      </Modal>
      <IconContainer>
        <PressableText onPress={() => {
          setModalVisible(true);
          if (setOpacity) {
            setOpacity(0.9);
          }
        }}>
          {(selectedLangObj?.name) && (navigation?.getState()?.routeNames).includes("LeftDrawer")
            ?
            <IconWithTextWrapper>
              <IconView>
                <IconImage source={flagImages[selectedLangObj?.iconIndex]} />
              </IconView>
              <ShortNameContainer>
                <Heading align={"center"}>{selectedLangObj?.shortName}</Heading>
              </ShortNameContainer>
            </IconWithTextWrapper>
            : <Globe fillColor={color || "white"} />
          }

          {/* <SelectedText color={color}>{
            country.find((e) => e?.code === selectedLang.toLocaleLowerCase()).name
          }</SelectedText> */}
        </PressableText>
      </IconContainer>

    </ModalWrapper>
  )
}

const ModalWrapper = styled(View)``

const PressableText = styled(Pressable)`
 padding:5px;
 margin:2px;
 color:white;
`

const SelectedText = styled(Text)`
  color: ${props => (props.color ? props.color : 'white')};
`

const CenteredView = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const ModalView = styled(View)`
  padding:20px 105px;
  width:380px;
  background-color:rgba(255, 255, 255, 1);
  
`
const TextView = styled(Text)`
  font-weight:bold;
  height:30px;
  color:${props => props.selected ? "rgb(51, 200, 160)" : "rgb(73, 31, 105)"}
`
const IconContainer = styled(View)`
  padding:5px 0px 0px 15px;
  height:30px;
`
const IconView = styled(View)`
  height:15px;
`
const IconImage = styled(Image)`
  position:relative;
  top:3px;
  width:20px;
  height:15px;
  margin:0px 5px;
  border-radius:2px;
`
const HeadingWrapper = styled(View)`
  flex-direction:row;
`
const CloseBtnWrapper = styled(View)`
  position:relative;
  left:100px;
  padding:-10px 9px;
`

const IconWithTextWrapper = styled(View)`

`

const ShortNameContainer = styled(View)`
  position:absolute;
  top:-2px;
  left:50px;
`

export default LanguagePicker
