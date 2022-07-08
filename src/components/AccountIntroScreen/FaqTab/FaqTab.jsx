import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Animated, KeyboardAvoidingView, BackHandler } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import AccountsTabHeader from '../AccountsTabHeader'
import FaqSearchInput from './FaqSearchInput'
import ContactUsButton from './ContactUsButton'
import AllTopicsTab from './AllTopicsTab'
// import CreateAd from './CreateAd'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { backHandler } from '../backHandler'
// Images
import IMAGES from '@/res/images'
const {
    AddCrossIcon,
    GoBackIcon,
    SearchBlackIcon,
    ReservationIcon,
    PaymentIcon,
    ProfileTapbarIcon,
    ShieldIcon,
} = IMAGES;
// Variables
// Styles
import { style } from './style'
const {
    // Search input
    FilterContainer,
    AdsListContainer,
    SwitchBlock,
    SwitchBlockBtn,
    SwitchBlockBtnText,
    FaqSubTitle,
    PopularArticleBlock,
    AccountLink,
    AccountLinkText,
    AccountLinkTopicsIcon,
    AccountLinkIcon,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { runInAction, set, toJS } from 'mobx';

import { useAccountApiStore } from '@/stores/AccountApi';

const FaqTab = observer(({ isOpenTab }) => {
    const navigation = useNavigation();
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

    // Store
    const {
        setOpenTabs,
        contractorAccountDataApi,
        setFaqArticles,
        popularFaqVendorArticle,
        faqVendorArticle,
        faqMusicianArticle,
        popularFaqMusicianArticle,
    } = useAccountApiStore();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setFaqArticles()
        });

        return unsubscribe;
    }, [navigation]);

    const adsList = contractorAccountDataApi[0].contractorAds !== undefined ? toJS(contractorAccountDataApi[0].contractorAds) : []
    // Animation
    const { onPress, width } = useAnimateOfferPreview()
    useEffect(() => {
        if (isOpenTab === true) {
            onPress(true)
        }
    }, [isOpenTab]);

    const [isHideAnimationTab, setHideAnimationTab] = useState(false);

    useEffect(() => {
        if (isHideAnimationTab === true) {
            onPress(false)
        }
    }, [isHideAnimationTab])

    // Tab state 
    const [isVendorFaq, setVendorFaq] = useState(true)

    // All topics list state 
    const [isAllTopicsTab, setAllTopicsTab] = useState({
        isOpen: false,
        allTopicsList: [],
        allTopicsTitle: '',
    })
    const [isCloseAllTopicsTab, setCloseAllTopicsTab] = useState(false);

    // Native back button handler
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // Close current tab
            if (!isAllTopicsTab.isOpen) {
                setHideAnimationTab(true)
                setTimeout(() => {
                    setOpenTabs({
                        tabName: 'FAQ',
                        isOpen: false
                    })
                }, 400);
            }
            if (isAllTopicsTab.isOpen) {
                setCloseAllTopicsTab(true)
                setTimeout(() => {
                    setCloseAllTopicsTab(false)
                }, 600);
            }
            // // If back on payment tab
            // if (isOpenYesReview && !isOpenContactUs) {
            //     setCloseYes(true)
            //     setTimeout(() => {
            //         setOpenYes(false)
            //         setCloseYes(false)
            //     }, 400);
            // }
            // if (!isOpenYesReview && isOpenContactUs) {
            //     setCloseContactUs(true)
            //     setTimeout(() => {
            //         setOpenContactUs(false)
            //         setCloseContactUs(false)
            //     }, 400);
            // }

            return true
        })
        return () => {
            backHandler.remove()
        }
    }, [isAllTopicsTab.isOpen])

    const AllTopicsIcon = ({ themeName }) => {
        switch (themeName) {
            case 'Searching and booking':
                return <SearchBlackIcon width={18} height={18} />
            case 'Your reservation':
                return <ReservationIcon width={18} height={18} />
            case 'Payments, pricing and refunds':
                return <PaymentIcon width={18} height={18} />
            case 'Your account':
                return <ProfileTapbarIcon width={18} height={18} />
            case 'Safety and accessibility':
                return <ShieldIcon width={18} height={18} />
            default:
                return null
        }
    }

    return (
        <Animated.View style={{
            zIndex: 1000,
            height: windowHeight,
            width: windowWidth,
            // width,
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
                {/* Form */}
                <AdsListContainer>

                    {/* Header */}
                    <AccountsTabHeader tabName={'FAQ'} setOpenTabs={setOpenTabs} onPress={onPress} />

                    {/* Search input */}
                    <FaqSearchInput />

                    {/* Switch buttons */}
                    <SwitchBlock>

                        <SwitchBlockBtn onPress={() => { setVendorFaq(true) }}
                            isActive={isVendorFaq}
                        >
                            <SwitchBlockBtnText isActive={isVendorFaq} >
                                Vendor
                            </SwitchBlockBtnText>

                        </SwitchBlockBtn>
                        <SwitchBlockBtn onPress={() => { setVendorFaq(false) }}
                            isActive={!isVendorFaq}
                        >
                            <SwitchBlockBtnText isActive={!isVendorFaq}   >
                                Performer
                            </SwitchBlockBtnText>

                        </SwitchBlockBtn>
                    </SwitchBlock>

                    {/* Popular article */}
                    {isVendorFaq && <PopularArticleBlock>
                        <FaqSubTitle>Popular articles</FaqSubTitle>

                        {popularFaqVendorArticle.map((article, id) => {
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
                        {/* Browse all topic */}
                        <FaqSubTitle style={{ marginTop: 34 }}>
                            Browse all topics
                        </FaqSubTitle>

                        {faqVendorArticle.map((article, id) => {
                            return (
                                <AccountLink
                                    onPress={() => {
                                        setAllTopicsTab({
                                            isOpen: true,
                                            allTopicsList: article.topicsArticles,
                                            isClose: false,
                                            allTopicsTitle: article.topicsName,
                                        })
                                    }}
                                    key={id}
                                >
                                    <AccountLinkTopicsIcon>
                                        <AllTopicsIcon themeName={article.topicsName} />

                                        <AccountLinkText style={{ paddingLeft: 11 }}    >
                                            {article.topicsName}
                                        </AccountLinkText>
                                    </AccountLinkTopicsIcon>

                                    <AccountLinkIcon>
                                        <GoBackIcon width={9} height={16} />
                                    </AccountLinkIcon>
                                </AccountLink>)
                        })}
                    </PopularArticleBlock>

                    }

                    {!isVendorFaq && <PopularArticleBlock>

                    </PopularArticleBlock>}

                    {/* Contact us button */}
                    <ContactUsButton />
                </AdsListContainer>

            </FilterContainer>

            {/* All topics list */}
            {isAllTopicsTab.isOpen === true &&
                <AllTopicsTab
                    isOpenTab={isAllTopicsTab.isOpen}
                    isClose={isCloseAllTopicsTab}
                    articlesData={isAllTopicsTab.allTopicsList}
                    setOpen={setAllTopicsTab}
                    titleName={isAllTopicsTab.allTopicsTitle}
                />}

            {/* Articler */}
            {/* {isOpenCreateAd === true && <CreateAd isOpenTab={isOpenCreateAd} />} */}

        </Animated.View >
    )
})

export default FaqTab;

