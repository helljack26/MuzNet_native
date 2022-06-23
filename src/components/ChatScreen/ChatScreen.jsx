import React from 'react';
import { useState, useEffect } from 'react';

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

} = style;

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

    const [searchText, onChangeSearchText] = useState('');

    return (
        <Content
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <ChatHeader chatUserName={chatUserName} chatUserImg={chatUserImg} />
        </Content>
    )
})

export default ChatScreen;