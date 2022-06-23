import React from 'react';
import { useState, useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'
// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';

// Images
import IMAGES from '@/res/images'
const {
    MapShape
} = IMAGES;
// Styles
import styled from 'styled-components/native';
import C from '@/res/colors'

const Content = styled.View`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 20px;
background-color: #F2F3F9;
`;

const ChatScreen = observer(({ isContractor }) => {
    const { musicianList, vendorList, setList } = useSearchApiStore();

    const navigation = useNavigation();

    const route = useRoute();

    const chatUserId = route.params.chatUserId
    const chatUserName = 'Leo Ferguson'
    const chatUserImg = require('../../../assets/Mock/Georgia.png')
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         setList(route.name);
    //     });
    //     return unsubscribe;
    // }, [navigation]);

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    const [messageAttachment, setMessageAttachment] = useState(null);
    const [messageText, onChangeMessageText] = useState('');

    const [isSendMessage, setSendMessage] = useState(false);
    useEffect(() => {
        if (isSendMessage === true) {
            onChangeMessageText('')
            setSendMessage(false)
        }
    }, [isSendMessage]);
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}>
            <Content
                style={{
                    width: windowWidth,
                    height: windowHeight,
                }}
            >
                <ChatHeader chatUserName={chatUserName} chatUserImg={chatUserImg} />

                <ChatFooter
                    messageText={messageText}
                    onChangeMessageText={onChangeMessageText}
                    setSendMessage={setSendMessage}
                    setMessageAttachment={setMessageAttachment}
                />
            </Content>
        </TouchableWithoutFeedback>

    )
})

export default ChatScreen;