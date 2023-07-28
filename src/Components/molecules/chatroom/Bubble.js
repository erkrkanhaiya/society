import React, { memo, useMemo } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Text, View } from 'react-native'
import Voice from './Voice'

const Bubble = ({
  item,
  item: { sent_at, sent_by_role: user, sent_by: name, message },
  currentMessage,
  previousMessage,
  isSender,
}) => {
  let messageTime = useMemo(
    () => (sent_at ? moment(sent_at).format('LT') : ''),
    [sent_at],
  )

  let isFollowUp = false
  if (currentMessage.sent_by_role === previousMessage.sent_by_role) {
    isFollowUp = true
  }

  //   const openFileLink = () => window.open(item[item.type].url);
  //   const viewportWidth = useWindowSize().width;

  const getMessageText = () => {
    switch (item.type) {
      case 'voice':
        return <Voice link={item[item.type].url} />
      //     <>
      //       <AudioPlayer viewportWidth={viewportWidth} controls>
      //         <source src={item?.voice?.url} type="audio/mp3" />
      //         {item?.voice?.name && <OpenLink onClick={openFileLink}>{item?.voice?.name}</OpenLink>}
      //       </AudioPlayer>
      //     </>
      //   );
      //   case 'file':
      //     return (
      //       <>
      //         {['jpeg', 'jpg', 'png', 'gif'].includes(item.file.type) ? (
      //           <OpenLink onClick={openFileLink}>
      //             <img src={item.file.url} alt={item.file.name} style={{ maxWidth: '300px', width: '100%' }} />
      //           </OpenLink>
      //         ) : (
      //           <OpenLink onClick={openFileLink}>
      //             <img src={FileIcon} alt="" style={{ maxWidth: '16px', marginRight: '8px' }} />{' '}
      //             <span>
      //               View file <small>({item?.file?.name})</small>
      //             </span>
      //           </OpenLink>
      //         )}
      //       </>
      //     );

      default:
        return <Text>{message}</Text>
    }
  }

  return (
    <BubbleWrapper
      // className={`${user}${isFollowUp ? ' followUp' : ''}`}
      // style={messageTime ? { paddingRight: '65' } : null}
      isSender={isSender}
      user={user}
      isFollowUp={isFollowUp}
    >
      {!isFollowUp && name && <UserName>{name}:</UserName>}
      {getMessageText()}
      {messageTime && <Time>{messageTime}</Time>}
    </BubbleWrapper>
  )
}

const BubbleWrapper = styled(View)`
  position: relative;
  align-self: flex-start;
  overflow-wrap: break-word;

  margin-left: ${({ isSender }) => (isSender ? 'auto' : '0px')};

  max-width: 90%;

  font-size: 14px;
  border-radius: 8px;
  margin-top: ${({ theme }) => theme.spacingSm};
  padding: ${({ theme }) => theme.spacingSm};

  background-color: ${({ theme, user }) =>
    user !== 'patient' ? theme.primaryLight : theme.secondaryLight};
  margin-top: ${({ isFollowUp, theme }) =>
    isFollowUp ? '3px' : theme.spacingSm};
  padding-right: 65px;
`

const UserName = styled(Text)`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontBold};
  margin-bottom: ${({ theme }) => theme.spacingSm};
  // padding-right: 65px;
`

const Time = styled(Text)`
  position: absolute;
  // padding-right: 65px;

  font-size: 11px;
  bottom: 8px;
  right: 8px;
  // margin-left: 65px;

  color: ${({ theme }) => theme.greyMedium};
`

// const OpenLink = styled(View)`
//   display: flex;
//   align-items: center;
//   flex-wrap: nowrap;
//   text-decoration: none;
//   cursor: pointer;
//   > * {
//     flex-shrink: 0;
//   }
// `
// const AudioPlayer = styled(View)`
//   min-width: 100%;
//   height: 24px;
//   border-radius: 16px;

//   ${({ viewportWidth }) =>
//     viewportWidth < 500 &&
//     css`
//       width: 150px;
//     `}
// `

export default memo(Bubble)
