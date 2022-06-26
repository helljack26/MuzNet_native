import React from "react";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Styles
import { style } from './style'
const {
    MessagesContainer,
    CreateOfferButton,
    CreateOfferButtonText,
    MessageBlock,
    MessageScrollBlock,
    MessageBlockInsideScroll,
    MessageBlockDay,
    Outcome,
    OutcomeCol,
    OutcomeMessage,
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
import C from "@/res/colors";

const chatMock = [
    {
        messageType: 'outcome',
        messageTime: '12:02',
        writterImage: require('../../../../assets/Mock/Georgia.png'),
        messageText: 'Hi Leo! We would like to arrange with you to perform at our wedding, are you free on March 26th?',
    },
    {
        messageType: 'income',
        messageTime: '12:05',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Hi Robert! Yes, I am available 26th, how long will your event last?',
    },
    {
        messageType: 'outcome',
        messageTime: '12:15',
        writterImage: require('../../../../assets/Mock/Georgia.png'),
        messageText: 'Great, we would like to book you for 2 hours, from 7 PM to 9 PM, is it convenient for you?',
    },
    {
        messageType: 'outcome',
        messageTime: '12:15',
        writterImage: require('../../../../assets/Mock/Georgia.png'),
        messageText: 'Also, we would like you to sing to live music. Can you take the instrument with you?',
    },
    {
        messageType: 'income',
        messageTime: '12:34',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Yes, a live music show will cost $30 per hour, would it suit you?',
    },
    {
        messageType: 'income',
        messageTime: '12:34',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Yes, a live music show will cost $30 per hour, would it suit you?',
    },
    {
        messageType: 'income',
        messageTime: '12:34',
        writterImage: require('../../../../assets/Mock/Kate1.jpg'),
        messageText: 'Yes, a live music show will cost $30 per hour, would it suit you?',
    }
]

const ChatMessagesContractor = observer(({ newMessage, isSendMessage }) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { windowHeight, windowWidth } = getWindowDimension()
    const isKeyboardOpen = isKeyboardShown()

    const { isOpenCreateOffer, setOpenCreateOffer } = useOfferToMusicianApiStore();

    const [localMessageState, setLocalMessageState] = useState([]);

    // Set new message
    useEffect(() => {
        if (newMessage) {
            const newTextMessage = {
                messageType: 'outcome',
                messageTime: '12:40',
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

    // Scroll top when press on similar
    const scrollViewRef = useRef(null)

    const [isScrollToBottom, setScrollToBottom] = useState(true);

    const scrollBottom = () => {
        if (scrollViewRef.current) {
            setTimeout(() => {
                scrollViewRef.current.scrollTo({
                    y: 100000000,
                    animated: false
                })
            }, 20);
        }
    }
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
                // height: windowHeight,
            }}
        >
            {/* Filters button */}
            <CreateOfferButton
                onPress={() => {
                    setOpenCreateOffer(true)
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
                        {/* TODO сделать добавление нового сообщения от пользователя, плюс сделать вывод фотографии */}
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
                                            <OutcomeMessageText>
                                                {message.messageText}
                                            </OutcomeMessageText>
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