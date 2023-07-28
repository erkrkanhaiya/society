export default {
  patient: {
    login: '/patient/login',
    profile: '/patient/profile',
    moodBox: '/patient/mood_questions',
    saveMoodBox: '/patient/save_moods',
    subscriptionStatus: '/patient/subscription_status',
    faq: '/faq_category',
    faqList: '/faq?category_id=',
    notification: '/notification/settings',
    updateNotification: '/notification/update_setting?',
    contactUs: '/contactus',
    referAFriend: '/patient/refer_friend',
    personalInfo: '/patient/personal_info',
    twoFA: '/two-factor',
    wallbeingMeter: (startDate = "", endDate = "", type = "") => `/patient/stats?start_date=${startDate}&end_date=${endDate}&type=${type}`,
    appointment: '/patient/appointment',
    urgentAlert:'/patient/urgent_alert',
    startquiz:'/patient/startquiz',
    signup:'/patient/signup',
    verify:'/company/company_url?invitation_password='
  },
  therapist: {
    publicProfile: '/therapist/public_profile',
  },
  chatroom: {
    login: '/chatroom/messages',
    activeChatroom: '/chatroom/activechatrooms',
    messages: '/chatroom/messages',
    unreadMessages: '/chatroom/unreadmessages',
    readMessages: '/chatroom/readmessage',
    sendMessage: '/chatroom/sendmessage',
    getTherapy: '/chatroom/get_tracker?chatroom_id=',
    canSubmitFeedback: '/chatroom/can_submit_feedback?chatroom_id=',
    submitFeedback: '/chatroom/therapist_feedback',
    sharedFiles: '/chatroom/chatresources?chatroom_id=',
    therapyTracker:(id)=> `/chatroom/get_tracker?chatroom_id=${id}`,
    journals: (pageNo) => `/chatroom/journals?page_no=${pageNo}`,
    shareJournal: '/chatroom/share_journal',
    deleteJournal: (id) => `/chatroom/delete_journal?journal_id=${id}`,
    createJournal: '/chatroom/add_journal',
    updateJournal: '/chatroom/update_journal',
    allNotifications: (from, to) => `/chatroom/notifications?from=${from}&to=${to}`,
    schedule: '/chatroom/schedule',
    readNotification:(id)=>`/chatroom/read_notification?notification_id=[${id}]`,
  },
  general: {
    cancelAppointments: '/appointment/cancel',
    additionalSupport:(catId,msg)=>`/send_benefit_message/?category_id=${catId}&message=${msg}`,
    announcements:`/announcements`
  },

  country:'/country',
  department:'/company_departments'


}
