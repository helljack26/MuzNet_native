import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Animated, View, Pressable, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import ContactUsButton from '../ContactUsButton'


// Helpers
import MaskInput from 'react-native-mask-input';
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { addDotForNumber } from '@/components/helpers/addDotForNumber'
import { compareTwoArrays } from '@/components/helpers/compareTwoArrays'
import { backHandler } from '../../backHandler'
import { apiMocks } from '@/api/mock/apiMocks'

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    FilterContainer,
    Header,
    HeaderClose,
    HeaderTitle,
    PopularArticleBlock,
    AccountLink,
    AccountLinkText,
    AccountLinkIcon,
} = style;
// Mixins
import { M } from '@/res/mixin'
const {

} = M;
// Store
import { observer } from 'mobx-react-lite';

import { useAccountApiStore } from '@/stores/AccountApi';

const AllTopicsTab = observer(({ isOpenTab, setOpen, isClose, articlesData, titleName }) => {
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

    // Store
    const { contractorAccountDataApi, setOpenTabs, adIdForEdit, setAdIdForEdit, setEditedAd } = useAccountApiStore();

    const { onPress, width } = useAnimateOfferPreview()

    useEffect(() => {
        if (isOpenTab === true) {
            onPress(true)
        }
    }, [isOpenTab]);
    // Close tab
    const closeTab = () => {
        onPress(false)
        setTimeout(() => {
            setOpen({
                isOpen: false,
                allTopicsList: [],
                allTopicsTitle: '',
            })
        }, 600);
    }

    useEffect(() => {
        if (isClose === true) {
            closeTab()
        }
    }, [isClose]);

    const contractorAccountData = contractorAccountDataApi[0].contractorAds.find(item => item.id === adIdForEdit);

    return (
        <Animated.View style={{
            zIndex: 1000,
            height: windowHeight,
            backgroundColor: 'white',
            // width: windowWidth,
            width,
            justifyContent: 'center',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
        }}
        >
            <FilterContainer
                style={{
                    height: windowHeight,
                    width: windowWidth,
                }}
            >
                <Header
                    style={{
                        // width: windowWidth,
                    }}
                >
                    <HeaderClose
                        onPress={() => {
                            closeTab()
                        }}
                    >
                        <GoBackIcon width={12} height={21} />
                    </HeaderClose>

                    <HeaderTitle>
                        {titleName}
                    </HeaderTitle>
                </Header>

                <PopularArticleBlock>

                    {articlesData.length > 0 && articlesData.map((article, id) => {
                        return <AccountLink
                            onPress={() => {
                                // setOpenTabs({
                                //     article: article,
                                //     isOpen: true
                                // })
                            }}
                            key={id}
                        >
                            <AccountLinkText>
                                {article.articleTitle}
                            </AccountLinkText>
                            <AccountLinkIcon>
                                <GoBackIcon width={9} height={16} />
                            </AccountLinkIcon>
                        </AccountLink>
                    })}

                </PopularArticleBlock>
                {/* Contact us button */}
                <ContactUsButton />
            </FilterContainer>
        </Animated.View >
    )
})

export default AllTopicsTab;

