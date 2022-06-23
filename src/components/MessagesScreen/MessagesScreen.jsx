import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import MessagesSearchInput from './MessagesSearchInput'
import AdsList from '@/components/AdsList'

// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    MapShape
} = IMAGES;
// Styles
import { style } from './style'
const {
    Content,
    HeaderTitle,
    MessagesContainer,
    MessagesTitle,
    MessagesBlock,
    MessagesItem,
    MessagesItemImage,
    MessageUserImage,
    MessagesItemInfo,
    MessagesItemInfoRow,
    ItemInfoName,
    ItemInfoNewMessageIndicator,
    ItemInfoNewMessageIndicatorText,
    MessagesItemMessageText,
    MessagesItemDate
} = style;

const MessagesScreen = observer(({ stackName, chatScreenName }) => {
    const navigation = useNavigation();

    const [searchText, onChangeSearchText] = useState('');

    return (
        <Content>
            {/* Header */}
            <HeaderTitle
                style={{
                    textShadowColor: C.gray,
                    textShadowOffset: { width: 0, height: 1 },
                    textShadowRadius: 1
                }}
            >
                Messages
            </HeaderTitle>

            {/* Search */}
            <MessagesSearchInput
                searchText={searchText}
                onChangeSearchText={onChangeSearchText}
            />

            {/* New message  */}
            <MessagesContainer>
                {/* Messages list */}
                <MessagesBlock>

                    <MessagesItem
                        onPress={() => {
                            navigation.push(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                                <ItemInfoNewMessageIndicator>
                                    <ItemInfoNewMessageIndicatorText>
                                        2
                                    </ItemInfoNewMessageIndicatorText>
                                </ItemInfoNewMessageIndicator>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>

                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                                <ItemInfoNewMessageIndicator>
                                    <ItemInfoNewMessageIndicatorText>
                                        2
                                    </ItemInfoNewMessageIndicatorText>
                                </ItemInfoNewMessageIndicator>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                </MessagesBlock>

            </MessagesContainer>

            {/* Old message  */}
            <MessagesContainer>
                {/* Messages list */}
                <MessagesBlock>
                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                    <MessagesItem
                        onPress={() => {
                            navigation.navigate(stackName, {
                                screen: chatScreenName,
                                params: {
                                    chatUserId: 1216515
                                }
                            })
                        }}
                    >
                        <MessagesItemImage>
                            <MessageUserImage
                                source={require('../../../assets/Mock/Georgia.png')}
                                resizeMode={'cover'}
                            >

                            </MessageUserImage>
                        </MessagesItemImage>

                        <MessagesItemInfo>
                            <MessagesItemInfoRow>
                                <ItemInfoName>
                                    Leo Ferguson
                                </ItemInfoName>
                            </MessagesItemInfoRow>

                            <MessagesItemMessageText
                                numberOfLines={1}
                                ellipsizeMode={'tail'}
                            >
                                Lorem ipsum dolor sit amet, conses dolor sit amet
                            </MessagesItemMessageText>

                        </MessagesItemInfo>
                        <MessagesItemDate>
                            12:32
                        </MessagesItemDate>
                    </MessagesItem>
                </MessagesBlock>
            </MessagesContainer>


        </Content>
    )
})

export default MessagesScreen;