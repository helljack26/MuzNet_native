import React from "react";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, Keyboard } from 'react-native';

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { formatAMPM } from '@/components/helpers/formatAMPM';
// Images
import IMAGES from '@/res/images'
const {
    FileWhiteIcon
} = IMAGES;
// Styles
import { style } from './style'
const {
    MessagesContainer,
    CreateOfferButton,
    CreateOfferButtonText,
    MessageBlock,
    MessageImageBlock,
    MessageScrollBlock,
    MessageBlockInsideScroll,
    MessageBlockDay,
    Outcome,
    OutcomeCol,
    OutcomeMessage,
    OutcomeMessageFile,
    OutcomeMessageFileText,
    OutcomeMessageText,
    // Income
    Income,
    IncomeCol,
    IncomeMessage,
    IncomeMessageText,
    MessageTime,
    UserImgBlock,
    UserImg
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useOfferToMusicianApiStore } from '@/stores/OfferToMusicianApi';
import { useChatAttachmentStore } from '@/stores/ChatAttachmentStore';

import C from "@/res/colors";

const chatMock = [
    {
        messageType: 'outcome',
        messageTime: '12:02 pm',
        writterImage: require('../../../../assets/Mock/Georgia.png'),
        messageText: 'Hi Leo! We would like to arrange with you to perform at our wedding, are you free on March 26th?',
    },
    {
        messageType: 'income',
        messageTime: '12:05 pm',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Hi Robert! Yes, I am available 26th, how long will your event last?',
    },
    {
        messageType: 'outcome',
        messageTime: '12:15 pm',
        writterImage: require('../../../../assets/Mock/Georgia.png'),
        messageText: 'Great, we would like to book you for 2 hours, from 7 PM to 9 PM, is it convenient for you?',
    },
    {
        messageType: 'outcome',
        messageTime: '12:15 pm',
        writterImage: require('../../../../assets/Mock/Georgia.png'),
        messageText: 'Also, we would like you to sing to live music. Can you take the instrument with you?',
    },
    {
        messageType: 'income',
        messageTime: '12:34 pm',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Yes, a live music show will cost $30 per hour, would it suit you?',
    },
    {
        messageType: 'income',
        messageTime: '12:34 pm',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Yes, a live music show will cost $30 per hour, would it suit you?',
    },
    {
        messageType: 'income',
        messageTime: '12:34 pm',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Yes, a live music show will cost $30 per hour, would it suit you?',
    }
]
const isEmpty = (obj) => {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}
const ChatMessagesContractor = observer(({ newMessage }) => {
    const navigation = useNavigation();

    const { windowHeight, windowWidth } = getWindowDimension()
    const isKeyboardOpen = isKeyboardShown()

    // Scroll top when press on similar
    const scrollViewRef = useRef(null)

    const [isScrollToBottom, setScrollToBottom] = useState(true);
    const scrollBottom = () => {
        if (scrollViewRef.current && scrollViewRef != null) {
            setTimeout(() => {
                scrollViewRef.current.scrollTo({
                    y: 100000000,
                    animated: false
                })
            }, 20);
        }
    }
    // Create offer store
    const { isOpenCreateOffer, setOpenCreateOffer } = useOfferToMusicianApiStore();
    // Attachment store
    const { cameraPhoto, file, isSendAttached, setSendAttached } = useChatAttachmentStore();

    const [localMessageState, setLocalMessageState] = useState([]);
    // Time
    const now = new Date(Date.now())
    const { strTime } = formatAMPM(now)
    // Set new text message
    useEffect(() => {
        if (newMessage) {
            const newTextMessage = {
                messageType: 'outcome',
                messageTime: strTime,
                writterImage: require('../../../../assets/Mock/Georgia.png'),
                messageText: newMessage.messageText,
                // messageText: newMessage.messageAttachment,
            }
            setLocalMessageState([...localMessageState, newTextMessage])
            // Scroll when new message
            scrollBottom()
            setTimeout(() => {
                setScrollToBottom(false)
            }, 20);
        }
    }, [newMessage]);

    // Set new image message
    useEffect(() => {
        if (cameraPhoto !== undefined && isSendAttached === true) {
            const newImageMessage = {
                messageType: 'outcome',
                messageTime: strTime,
                writterImage: require('../../../../assets/Mock/Georgia.png'),
                messageImageUri: cameraPhoto,
            }
            setLocalMessageState([...localMessageState, newImageMessage])
            // Scroll when new message
            scrollBottom()
            setTimeout(() => {
                setScrollToBottom(false)
                setSendAttached(false)
            }, 20);
        }
    }, [isSendAttached, cameraPhoto]);

    // Set new file message
    useEffect(() => {

        if (!isEmpty(file) && isSendAttached === true) {
            const newImageMessage = {
                messageType: 'outcome',
                messageTime: strTime,
                writterImage: require('../../../../assets/Mock/Georgia.png'),
                fileName: file.fileName,
            }
            setLocalMessageState([...localMessageState, newImageMessage])
            // Scroll when new message
            scrollBottom()
            setTimeout(() => {
                setScrollToBottom(false)
                setSendAttached(false)
            }, 20);
        }
    }, [isSendAttached, file]);

    // Scroll to bottom
    useEffect(() => {
        if (isScrollToBottom === true) {
            scrollBottom()
            setTimeout(() => {
                setScrollToBottom(false)
            }, 20);
        }
    }, [isScrollToBottom]);

    useEffect(() => {
        if (isKeyboardOpen === true) {
            scrollBottom()
        }
    }, [isKeyboardOpen]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLocalMessageState(chatMock)
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <MessagesContainer
            style={{
                width: windowWidth,
            }}
        >
            {/* Filters button */}
            <CreateOfferButton
                onPress={() => {
                    const timeOutDuration = isKeyboardOpen ? 450 : 0
                    isKeyboardOpen && Keyboard.dismiss()
                    setTimeout(() => {
                        setOpenCreateOffer(true)
                    }, timeOutDuration);
                }}
            >
                <CreateOfferButtonText>
                    Create offer
                </CreateOfferButtonText>
            </CreateOfferButton>

            <MessageBlock
                style={{
                    width: windowWidth,
                    height: windowHeight,
                }}
            >
                <MessageScrollBlock
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}
                >
                    <MessageBlockInsideScroll
                        style={{
                            paddingTop: isKeyboardOpen === true ? 505 : 230,
                            paddingBottom: isKeyboardOpen === true ? 106 : 126,
                        }}
                    >
                        <MessageBlockDay>
                            Today
                        </MessageBlockDay>

                        {localMessageState.map((message, id) => {
                            let isInGroup = false
                            const previousId = id === 0 ? 0 : id === localMessageState.length - 1 ? id : id + 1
                            if (id > 0 && id !== localMessageState.length - 1) {
                                if (message.messageType === localMessageState[previousId].messageType) {
                                    isInGroup = true
                                } else {
                                    isInGroup = false
                                }
                            }
                            // const isGroup = 
                            return (message.messageType === 'outcome' ?
                                <Outcome
                                    style={{
                                        marginBottom: isInGroup ? 8 : 16,
                                    }}
                                    key={id}>
                                    <OutcomeCol>
                                        <OutcomeMessage
                                            style={{
                                                borderBottomRightRadius: isInGroup ? 12 : 0,
                                                marginRight: isInGroup ? 32 : 0,
                                            }}
                                        >
                                            {message.messageImageUri !== undefined ?
                                                <MessageImageBlock>
                                                    <Image
                                                        source={{ uri: message.messageImageUri }}
                                                        style={{
                                                            width: 240,
                                                            height: 240 + 240 / 3,
                                                        }}
                                                        resizeMode={'contain'} />
                                                </MessageImageBlock>
                                                :
                                                message.fileName !== undefined ?
                                                    <OutcomeMessageFile>
                                                        <FileWhiteIcon width={20} height={20} />
                                                        <OutcomeMessageFileText>
                                                            {message.fileName}
                                                        </OutcomeMessageFileText>
                                                    </OutcomeMessageFile>
                                                    :
                                                    <OutcomeMessageText>
                                                        {message.messageText}
                                                    </OutcomeMessageText>
                                            }

                                        </OutcomeMessage>
                                        {!isInGroup && <MessageTime>
                                            {message.messageTime}
                                        </MessageTime>}
                                    </OutcomeCol>

                                    {!isInGroup && <UserImgBlock>
                                        <UserImg source={message.writterImage} resizeMode={'cover'} />
                                    </UserImgBlock>}
                                </Outcome>

                                :
                                <Income
                                    style={{
                                        marginBottom: isInGroup ? 8 : 16,
                                    }}
                                    key={id}>
                                    {!isInGroup && <UserImgBlock>
                                        <UserImg source={message.writterImage} resizeMode={'cover'} />
                                    </UserImgBlock>}
                                    <IncomeCol>
                                        <IncomeMessage
                                            style={{
                                                borderBottomLeftRadius: isInGroup ? 12 : 0,
                                                marginLeft: isInGroup ? 32 : 0,
                                            }}
                                        >
                                            <IncomeMessageText>
                                                {message.messageText}
                                            </IncomeMessageText>
                                        </IncomeMessage>
                                        {!isInGroup && <MessageTime>
                                            {message.messageTime}
                                        </MessageTime>}
                                    </IncomeCol>
                                </Income>
                            )
                        })}
                    </MessageBlockInsideScroll>

                </MessageScrollBlock>

            </MessageBlock>
        </MessagesContainer >

    );
})

export default ChatMessagesContractor;