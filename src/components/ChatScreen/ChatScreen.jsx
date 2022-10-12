import React from 'react';
import { useState, useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import ChatHeader from './ChatHeader'
import ChatSharedFiles from './ChatSharedFiles'
import OfferDetailsHeaderSheat from './ChatMessagesContractor/OfferDetailsHeaderSheat'
import ChatMessagesContractor from './ChatMessagesContractor'
import ChatFooter from './ChatFooter'
import ChatAttachment from './ChatAttachment'
import BlockUserPopup from './BlockUserPopup'
// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
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
// Store
import { observer } from 'mobx-react-lite';
import { useOfferToMusicianApiStore } from '@/stores/OfferToMusicianApi';

const ChatScreen = observer(({ isContractor }) => {
    const { offerDetails, isPaySuccesful } = useOfferToMusicianApiStore();
    const [isShowConractorDetailsHeader, setExistOffer] = useState(false);
    useEffect(() => {
        if (offerDetails.offerDate.string.length > 0 && isContractor === true && isPaySuccesful) {
            setExistOffer(true)
        } else {
            setExistOffer(false)
        }

    }, [offerDetails, isContractor, isPaySuccesful]);

    // const navigation = useNavigation();
    // const route = useRoute();
    // const chatUserId = route.params.chatUserId
    // Header
    const chatUserName = 'Leo Ferguson'
    const chatUserImg = require('../../../assets/Mock/Georgia.png')

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
            setNewMessage({
                messageText: '',
                messageAttachment: messageAttachment,
            })
        }
    }, [messageAttachment]);

    // Confirm new offer window state
    const [isOpenBlockUserPopup, setOpenBlockUserPopup] = useState(false);
    const [isConfirm, setConfirm] = useState(false);

    const [isOpenSharedScreen, setOpenSharedScreen] = useState(false);
    return (
        <Content
            style={{
                width: windowWidth,
                height: '100%',
            }}
        >

            {/* Chat attachment popup */}
            <ChatAttachment />

            {isShowConractorDetailsHeader && <OfferDetailsHeaderSheat />}

            <ChatHeader
                setOpenSharedScreen={setOpenSharedScreen}
                setOpenBlockUserPopup={setOpenBlockUserPopup}
                chatUserName={chatUserName}
                chatUserImg={chatUserImg}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                    flex: 1,
                    width: '100%',
                }}
            >

                {/* Chat */}
                <ChatMessagesContractor newMessage={newMessage} isContractor={isContractor} isSendMessage={isSendMessage} />

                <ChatFooter
                    messageText={messageText}
                    onChangeMessageText={onChangeMessageText}
                    setSendMessage={setSendMessage}
                    setMessageAttachment={setMessageAttachment}
                />
            </KeyboardAvoidingView>

            {/* Block user popup */}
            <BlockUserPopup
                isOpenBottomPopup={isOpenBlockUserPopup}
                setOpenBottomPopup={setOpenBlockUserPopup}
                setConfirm={setConfirm}
            />

            {/* Shared files */}
            <ChatSharedFiles
                chatUserName={chatUserName}
                chatUserImg={chatUserImg}
                isOpenSharedScreen={isOpenSharedScreen}
                setOpenSharedScreen={setOpenSharedScreen}
                setOpenBlockUserPopup={setOpenBlockUserPopup}
            />
        </Content>
    )
})

export default ChatScreen;