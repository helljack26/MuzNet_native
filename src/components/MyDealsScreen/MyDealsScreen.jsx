import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, View } from 'react-native';
// Components
import ContactUsTab from '../LeaveFeedbackScreen/ContactUsTab'
import DealTab from './DealTab'
import AfterSubmitWindow from '@/components/AfterSubmitWindow'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    DealTitleIcon,
    DealTimeIcon,
    DealLocationIcon,
    DealUserIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    FilterContainer,
    AdsListContainer,
    SwitchBlock,
    SwitchBlockBtn,
    SwitchBlockBtnText,
    Header,
    HeaderClose,
    HeaderTitle,
    DealBlock,
    DealStatusLabel,
    DealBlockItem,
} = style;
// Mixins
import { M } from '@/res/mixin'
const {
    PlainText17,
    TitleBold17,
} = M;
// Store
import { observer } from 'mobx-react-lite';
import { useAccountApiStore } from '@/stores/AccountApi';

const MyDealsScreen = observer(({ isContractor }) => {
    const navigation = useNavigation();

    const { windowHeight, windowWidth } = getWindowDimension()
    // Tab state 
    const [isActiveDeals, setActiveDeals] = useState(true)

    // Store
    const { contractorAccountDataApi, musicianAccountDataApi, submitDeal } = useAccountApiStore();

    const userDeals = isContractor === true ? contractorAccountDataApi[0].userDeals : musicianAccountDataApi[0].userDeals
    // 
    const dealsData = isActiveDeals === true ? userDeals.activeDeals : userDeals.closedDeals

    // Atricle state 
    const [isDealTab, setDealTab] = useState({
        isOpen: false,
        dealData: {},
    })
    const [isCloseDealTab, setCloseDealTab] = useState(false);

    // Contact us tab state
    const [isOpenContactUs, setOpenContactUs] = useState(false);
    const [isCloseContactUs, setCloseContactUs] = useState(false);

    // After submit window
    const [isOpenAfterSubmitMessage, setOpenAfterSubmitMessage] = useState(false);

    // Native back button handler
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // Close current tab
            if (!isDealTab.isOpen && !isOpenContactUs) {
                navigation.goBack()
            }
            if (isDealTab.isOpen && !isOpenContactUs) {
                setCloseDealTab(true)
                setTimeout(() => {
                    setCloseDealTab(false)
                }, 600);
            }
            if (isDealTab.isOpen && !isOpenContactUs) {
                setCloseDealTab(true)
                setTimeout(() => {
                    setCloseDealTab(false)
                }, 600);
            }
            const isMainOpenContact = !isDealTab.isOpen && isOpenContactUs
            const isDealTabOpenContact = isDealTab.isOpen && isOpenContactUs

            if (isMainOpenContact || isDealTabOpenContact) {
                setCloseContactUs(true)
                setTimeout(() => {
                    setOpenContactUs(false)
                    setCloseContactUs(false)
                }, 600);
            }
            return true
        })
        return () => {
            backHandler.remove()
        }
    }, [isDealTab.isOpen, isOpenContactUs])

    const submitDealAction = (dealData) => {
        submitDeal(dealData, isContractor)
        setOpenAfterSubmitMessage(true)

    }
    const afterSubmitButtonAction = () => {
        setOpenAfterSubmitMessage(false)
        setDealTab({
            isOpen: false,
            dealData: {},
        })
    };

    return (
        <View
            style={{
                height: windowHeight,
                width: windowWidth,
            }}
        >
            <FilterContainer style={{ height: windowHeight, width: windowWidth }}  >
                {/* Form */}
                <AdsListContainer
                    showsVerticalScrollIndicator={false}
                >

                    {/* Header */}
                    <Header >
                        <HeaderClose
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <GoBackIcon width={12} height={21} />
                        </HeaderClose>

                        <HeaderTitle>
                            Deals
                        </HeaderTitle>
                    </Header>

                    {/* Switch buttons */}
                    <SwitchBlock>
                        <SwitchBlockBtn onPress={() => { setActiveDeals(true) }}
                            isActive={isActiveDeals}
                        >
                            <SwitchBlockBtnText isActive={isActiveDeals} >Active</SwitchBlockBtnText>

                        </SwitchBlockBtn>
                        <SwitchBlockBtn onPress={() => { setActiveDeals(false) }} isActive={!isActiveDeals}>
                            <SwitchBlockBtnText isActive={!isActiveDeals}>Closed</SwitchBlockBtnText>

                        </SwitchBlockBtn>
                    </SwitchBlock>

                    {dealsData.length === 0 && <TitleBold17
                        style={{
                            textAlign: 'center'
                        }}
                    >
                        You haven't {isActiveDeals ? 'active' : 'closed'} deals
                    </TitleBold17>}

                    {/* Deals list */}
                    {dealsData.map((deal, id) => {
                        const dealDate = deal.adDate.string.split(',')
                        const dealDateWithoutSpace = dealDate[1].trim()
                        const statusText = deal.dealStatus ? 'Active' : 'Closed'
                        return <DealBlock
                            onPress={() => {
                                setDealTab({
                                    isOpen: true,
                                    dealData: deal,
                                })
                            }}
                            key={id}
                        >

                            <DealStatusLabel
                                isActive={deal.dealStatus}
                            >{statusText}</DealStatusLabel>

                            <TitleBold17>
                                Deal № {deal.dealId}
                            </TitleBold17>

                            <DealBlockItem style={{ marginTop: 16 }}>
                                <DealTitleIcon width={11} height={16} />
                                <PlainText17 style={{ marginLeft: 8 }}>
                                    {deal.adTitle}
                                </PlainText17>
                            </DealBlockItem>

                            <DealBlockItem>
                                <DealTimeIcon width={14} height={14} />
                                <PlainText17 style={{ marginLeft: 8 }}>
                                    {`${dealDateWithoutSpace}, ${deal.eventStart.string} to ${deal.eventEnd.string}`}
                                </PlainText17>
                            </DealBlockItem>

                            <DealBlockItem>
                                <DealLocationIcon width={13} height={17} />
                                <PlainText17
                                    ellipsizeMode={'tail'}
                                    numberOfLines={1}
                                    style={{ marginLeft: 8, marginRight: 1 }}>
                                    {deal.adLocation}
                                </PlainText17>
                            </DealBlockItem>

                            <DealBlockItem>
                                <DealUserIcon width={12} height={14} />
                                <PlainText17 style={{ marginLeft: 8 }}>
                                    {deal.dealUserName}
                                </PlainText17>
                            </DealBlockItem>

                        </DealBlock>
                    })}

                    {/* Empty block */}
                    <View style={{ height: 130 }}></View>
                </AdsListContainer>

            </FilterContainer>

            {/* Deal */}
            {isDealTab.isOpen === true &&
                <DealTab
                    isContractor={isContractor}
                    isOpenTab={isDealTab.isOpen}
                    dealData={isDealTab.dealData}
                    isClose={isCloseDealTab}
                    setOpen={setDealTab}
                    setOpenContactUs={setOpenContactUs}
                    setOpenAfterSubmitMessage={submitDealAction}
                />}

            {/* Contact us link */}
            {isOpenContactUs && <ContactUsTab
                isOpen={isOpenContactUs}
                isClose={isCloseContactUs}
                setOpen={setOpenContactUs}
            />}
            {/* Submit perfomance */}
            <AfterSubmitWindow
                title={'Your deal was submitted'}
                message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                windowImage={IMAGES.SuccessPayment}
                isPromoteBigImage={true}
                buttonText={'My Deals'}
                setOpen={setOpenAfterSubmitMessage}
                isOpen={isOpenAfterSubmitMessage}
                afterSubmitButton={afterSubmitButtonAction}
            />

            {/* If payment error */}
            {/* <AfterSubmitWindow
                title={'Something went wrong'}
                message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                windowImage={IMAGES.ErrorPayment}
                isPromoteBigImage={true}
                buttonText={'Try again'}
                setOpen={setOpenAfterSubmitMessage}
                isOpen={isOpenAfterSubmitMessage}
                afterSubmitButton={afterSubmitButtonAction}
            /> */}
        </View >
    )
})

export default MyDealsScreen;

