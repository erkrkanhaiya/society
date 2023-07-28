import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import { Swipeable } from 'react-native-gesture-handler';

const Swipe = ({ t, markAsRead, id, status, children }) => {

    const swipeActions = () => {
        return (!status ?
            <MarkAsRead onStartShouldSetResponder={() => {
                markAsRead(id);
            }}>
                <MarkAsReadContent>
                    {t('markAsRead')}
                </MarkAsReadContent>
            </MarkAsRead> : null
        );
    };
    return (
        <Swipeable
            // renderLeftActions={swipeActions} 
            renderRightActions={swipeActions}>
            {children}
        </Swipeable>
    )
};

const MarkAsRead = styled(View)`
    border-radius: 4px;
    padding:16px 8px;
    margin:18px;
    height:50;
    background: rgb(229, 229, 229);
    color: rgb(68, 68, 68);
`
const MarkAsReadContent = styled(Text)`
    font-weight:bold;
`

export default Swipe;