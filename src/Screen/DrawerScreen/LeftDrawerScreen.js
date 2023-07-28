import React, { useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Chatroom } from '@/Containers'
import MoodBox from '@/Containers/MoodBox/MoodBox'
import DrawerContent from '@/Navigators/DrawerContent'
import Analytics from '@/Containers/Analytics/Analytics'
import AccountDetail from '@/Containers/AccountDetail/AccountDetail'
import ManageSubscription from '@/Containers/ManageSubscription/ManageSubscription'
import Notifications from '@/Containers/Notifications/Notifications'
import ReferFriend from '@/Containers/ReferFriend/ReferFriend'
import SharedFiles from '@/Containers/SharedFiles/SharedFiles'
import ContactSupport from '@/Containers/ContactSupport/ContactSupport'
import EditAccount from '@/Containers/EditAccount/EditAccount'
import TherapyTracker from '@/Containers/TherapyTracker/TherapyTracker'
import WallbeingMeter from '@/Containers/WallbeingMeter/WallbeingMeter'
import TrainingVideo from '@/Containers/TrainingVideo/TrainingVideo'
import Journal from '@/Containers/Journal/Journal'
import AllNotifications from '@/Containers/AllNotifications/AllNotifications'
import AdditionalSupport from '@/Containers/AdditionalSupport/AdditionalSupport'
import ResourceCenter from '@/Containers/ResourceCenter/ResourceCenter'
import VideoPopup from '@/Components/molecules/chatroom/VideoPopup'
import TherapistProfileDetail from '@/Components/atoms/TherapistProfileDetail/TherapistProfileDetail'
import Questionnaire from '@/Containers/Questionnaire/Questionnaire'

const { Navigator, Screen } = createDrawerNavigator()

const LeftDrawerScreen = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <Navigator
      screenOptions={{
        orientation: 'portrait',
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#513666',
        },
        cardStyle: { height: '100%' },
      }}
      drawerContent={DrawerContent}
    >
      {/* <Screen name="Chatroom" options={{ orientation: 'portrait' }}>
        {props => (
          <Chatroom
            setShowVideo={setShowVideo}
            showVideo={showVideo}
            {...props}
          />
        )}
      </Screen> */}
      {/* {showVideo ? (
        <Screen name="Video" options={{ orientation: 'portrait' }}>
          {props => <VideoPopup setShowVideo={setShowVideo} {...props} />}
        </Screen>
      ) : null} */}
      {/* <Screen name="Mood Box" component={MoodBox} /> */}
      {/* <Screen name="Questionnaire" component={Questionnaire} />
      <Screen name="Analytics" component={Analytics} />
      <Screen name="Account" component={EditAccount} />
      <Screen name="Account Detail" component={AccountDetail} />
      <Screen name="Manage Subscription" component={ManageSubscription} />
      <Screen name="Notifications" component={Notifications} />
      <Screen name="Refer a Friend" component={ReferFriend} />
      <Screen name="Shared Files" component={SharedFiles} />
      <Screen name="Contact Support" component={ContactSupport} />
      <Screen name="Therapy Tracker" component={TherapyTracker} />
      <Screen name="Wallbeing Meter" component={WallbeingMeter} />
      <Screen name="Training Video" component={TrainingVideo} />
      <Screen name="Journal" component={Journal} />
      <Screen name="All Notifications" component={AllNotifications} />
      <Screen name="Additional Support" component={AdditionalSupport} />
      <Screen name="Resource Center" component={ResourceCenter} />
      <Screen name="Therapist Profile" component={TherapistProfileDetail} /> */}
    </Navigator>
  )
}

export default LeftDrawerScreen
