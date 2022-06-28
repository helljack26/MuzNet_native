import React from "react";
import { useState } from 'react';
import { Keyboard } from 'react-native';

// Helpers
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'
// Images
import IMAGES from '@/res/images'
const {
    MessageAttachGrayIcon,
    SendMessageIcon
} = IMAGES;
// Styles
import { style } from './style'
const {
    // Search input
    SearchInputContainer,
    SearchInputBlock,
    SearchInput,
    AttachIconBlock,
    SendMessageButton,
    SendMessageIconBlock,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useChatAttachmentStore } from '@/stores/ChatAttachmentStore';

const ChatFooter = observer(({ messageText, onChangeMessageText, setSendMessage, setMessageAttachment }) => {
    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    const { setOpenChatAttachment } = useChatAttachmentStore();

    // Message Input
    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const inputWidth = windowWidth - 117
    // Is send message
    const isSendMessage = messageText.length > 0

    return (
        <SearchInputContainer isKeyboardOpen={isKeyboardOpen}>
            <SearchInputBlock
                style={{
                    width: windowWidth - 32,
                    borderColor: inputFocus1,
                }}
            >
                <AttachIconBlock onPress={() => {
                    setOpenChatAttachment(true)
                    Keyboard.dismiss()
                }}>
                    <MessageAttachGrayIcon width={19} height={20} />
                </AttachIconBlock>

                <SearchInput
                    cursorColor={C.inputCursor}
                    selectionColor={C.lightGray}
                    placeholder={'Write your message here'}
                    keyboardType="default"
                    value={messageText}
                    multiline={true}
                    onChangeText={onChangeMessageText}
                    onFocus={() => { setInputFocus1(C.black) }}
                    onBlur={() => { setInputFocus1(C.lightGray) }}
                    style={{
                        width: inputWidth,
                        textAlignVertical: 'bottom'
                    }}
                />

                {/* Send message button */}
                <SendMessageButton onPress={() => { isSendMessage === true && setSendMessage(true) }}>
                    <SendMessageIconBlock>
                        <SendMessageIcon width={15} height={15} />
                    </SendMessageIconBlock>
                </SendMessageButton>
            </SearchInputBlock>
        </SearchInputContainer>
    );
})

export default ChatFooter;