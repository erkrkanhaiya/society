import React from 'react';
import { Dimensions, View } from 'react-native';
import styled from 'styled-components';
import { WebView } from 'react-native-webview';
import ModalComponent from "../../Components/atoms/Modal/Modal";

const TrainingVideo = ({ openModal, closeModal }) => {
  return (
    <ModalComponent open={openModal} closeModal={closeModal}>
      <VideoContainer style={{
        width: Dimensions.get("screen").width - 100,
        height: 200,
      }}>
        <WebView
          source={{ html: '<iframe src="https://player.vimeo.com/video/638532810?h=7c9cc2b4b3&amp;title=0&amp;byline=0&amp;portrait=0&amp;playsinline=0&amp;autoplay=1&amp;autopause=0&amp;app_id=122963" width="576" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" title="SupportRoom Employee &amp;amp; Leader Training" data-ready="true" style="width: 100%; height: 100%;"></iframe>' }}
        />
      </VideoContainer>
    </ModalComponent>
  )
};

const VideoContainer = styled(View)`
`
export default TrainingVideo
