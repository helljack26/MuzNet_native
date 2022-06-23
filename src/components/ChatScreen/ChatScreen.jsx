import React from 'react';
import { useState, useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import ChatHeader from './ChatHeader'
import ChatMessagesContractor from './ChatMessagesContractor'
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
background-color: ${C.white};
`;

const ChatScreen = observer(({ isContractor }) => {
    const { musicianList, vendorList, setList } = useSearchApiStore();

    const navigation = useNavigation();

    const route = useRoute();
    const chatUserId = route.params.chatUserId
    // Header
    const chatUserName = 'Leo Ferguson'
    const chatUserImg = require('../../../assets/Mock/Georgia.png')

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    // Attachment state
    const [messageAttachment, setMessageAttachment] = useState(null);
    // Message state
    const [messageText, onChangeMessageText] = useState('');

    const [isSendMessage, setSendMessage] = useState(false);

    const [newMessage, setNewMessage] = useState({
        messageText: '',
        messageAttachment: '',
    });

    useEffect(() => {
        if (isSendMessage === true) {
            setNewMessage({
                messageText: messageText,
                messageAttachment: '',
            })
            onChangeMessageText('')
            setSendMessage(false)
        }
    }, [isSendMessage]);

    useEffect(() => {
        if (messageAttachment) {
            console.log("🚀 ~ file: ChatScreen.jsx ~ line 73 ~ useEffect ~ messageAttachment", messageAttachment)
            setNewMessage({
                messageText: messageText,
                messageAttachment: '',
            })
        }
    }, [messageAttachment]);


    return (

        <Content
            style={{
                width: windowWidth,
                height: '100%',
            }}
        >
            <ChatHeader chatUserName={chatUserName} chatUserImg={chatUserImg} />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    flex: 1,
                    width: '100%',
                }}
            >
                {isContractor === true ?
                    <ChatMessagesContractor newMessage={newMessage} isSendMessage={isSendMessage} />
                    :
                    null
                }
                <ChatFooter
                    messageText={messageText}
                    onChangeMessageText={onChangeMessageText}
                    setSendMessage={setSendMessage}
                    setMessageAttachment={setMessageAttachment}
                />
            </KeyboardAvoidingView>

        </Content>


    )
})

export default ChatScreen;