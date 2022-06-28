import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, View, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import ChoosePaymentMethod from '@/components/ChoosePaymentMethod'
import OfferAddPaymentDetails from './OfferAddPaymentDetails'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { addDotForNumber } from '@/components/helpers/addDotForNumber'
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    LockGrayIcon,
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
    FilterBlock,

    OfferDetails,
    OfferDetailsTitle,
    OfferDetailsBlock,
    OfferLi,
    OfferLiKeys,
    OfferLiValue,
    OfferPayment,

    ContentBlock,
    ContentBlockRow,
    ContainerLink,
    ContainerPrice,
    ContainerHour,
    ButtonSubmit,
    ButtonSubmitText,
    SecurePaymentMessage,
    SecurePaymentMessageText,
    SecurePaymentMessageReadMoreText,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useOfferToMusicianApiStore } from '@/stores/OfferToMusicianApi';

const OfferPreview = observer(() => {

    const route = useRoute();

    const { offerDetails, isOpenOfferPreview, setOpenOfferPreview, setOpenCreateOffer, setPaySucessful } = useOfferToMusicianApiStore();

    const {
        offerAdditionalInfo,
        offerDate,
        offerDuration,
        offerStartTime,
        offerEndTime,
        offerLocation,
        offerPricePerHour,
        offerTotalMoney,
        offerPhoneNumber,
    } = offerDetails;

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, width } = useAnimateOfferPreview()

    useEffect(() => {
        if (isOpenOfferPreview === true) {
            onPress(true)
        }
    }, [isOpenOfferPreview]);

    // Is show submit button
    const [isShowSubmitButton, setShowSubmitButton] = useState(false);

    const onSubmit = () => {
        setOpenCreateOffer(false)
        setOpenOfferPreview(false)
        setPaySucessful(true)
        onPress(false)
    };

    const isDateString = offerDate.string !== undefined && offerDate.string

    const isTimeStartString = offerStartTime.string !== undefined && offerStartTime.string
    const isTimeEndString = offerEndTime.string !== undefined && offerEndTime.string
    const isDurationString = offerDuration !== undefined && offerDuration
    const timeString = `${isTimeStartString}-${isTimeEndString} (${isDurationString} hours)`

    const isLocationString = offerLocation !== undefined && offerLocation

    const isTotalPriceString = offerTotalMoney !== undefined && offerTotalMoney
    const isPricePerHourString = offerPricePerHour !== undefined && offerPricePerHour

    const isPhoneNumberString = offerPhoneNumber !== undefined && offerPhoneNumber
    return (
        <Animated.View style={{
            zIndex: 1000,
            height: windowHeight,
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

                {/* Header */}
                <Header >
                    <HeaderClose
                        onPress={() => {
                            setOpenOfferPreview(false)
                            onPress(false)
                        }}
                    >
                        <GoBackIcon width={9} height={16} />
                    </HeaderClose>

                    <HeaderTitle>
                        Offer Preview
                    </HeaderTitle>
                </Header>
                {/* Secure message */}
                <FilterBlock keyboardShouldPersistTaps={'handled'}>

                    {/* Offer details */}
                    <OfferDetails>
                        <OfferDetailsTitle>
                            Offer details:
                        </OfferDetailsTitle>

                        <OfferDetailsBlock>

                            <OfferLi>
                                <OfferLiKeys>Date:</OfferLiKeys>
                                <OfferLiValue>{isDateString}</OfferLiValue>
                            </OfferLi>

                            <OfferLi>
                                <OfferLiKeys>Time:</OfferLiKeys>
                                <OfferLiValue>{timeString}</OfferLiValue>
                            </OfferLi>

                            <OfferLi>
                                <OfferLiKeys>Location:</OfferLiKeys>
                                <OfferLiValue
                                    style={{
                                        paddingRight: 70
                                    }}
                                >{isLocationString}</OfferLiValue>
                            </OfferLi>

                            <OfferLi>
                                <OfferLiKeys>Price:</OfferLiKeys>
                                <OfferLiValue>{`$${isTotalPriceString}`}</OfferLiValue>
                                <OfferLiValue
                                    style={{
                                        color: C.cyanGray,
                                    }}
                                >{` ($${isPricePerHourString} per hour)`}</OfferLiValue>
                            </OfferLi>

                            <OfferLi
                                style={{
                                    marginBottom: 0,
                                }}
                            >
                                <OfferLiKeys>Contact phone:</OfferLiKeys>
                                <OfferLiValue>{isPhoneNumberString}</OfferLiValue>
                            </OfferLi>
                        </OfferDetailsBlock>
                    </OfferDetails>

                    {/* Сhoose payment method */}
                    <OfferPayment>
                        <OfferDetailsTitle>
                            Choose payment method:
                        </OfferDetailsTitle>

                        <ChoosePaymentMethod setShowSubmitButton={setShowSubmitButton} />
                    </OfferPayment>


                    <SecurePaymentMessage>
                        <LockGrayIcon width={22} height={27} />
                        <SecurePaymentMessageText>
                            We use a secure payment system that holds funds in a secured intermediary trust account until the performance take place <SecurePaymentMessageReadMoreText>Learn more</SecurePaymentMessageReadMoreText>
                        </SecurePaymentMessageText>
                    </SecurePaymentMessage>

                    {/* Empty block if open keyboard */}
                    <View
                        style={{
                            marginBottom: isKeyboardOpen === true ? 200 : 0,
                        }}
                    >
                    </View>
                </FilterBlock>

                {/* Footer block */}
                <ContentBlock
                    style={{
                        width: windowWidth,
                    }}
                    isKeyboardOpen={isKeyboardOpen}>
                    <ContentBlockRow>

                        <ContainerLink>
                            <ContainerPrice>${isTotalPriceString}</ContainerPrice>
                            <ContainerHour>for {isDurationString} hours</ContainerHour>
                        </ContainerLink>

                        <ButtonSubmit
                            activeOpacity={isShowSubmitButton ? 0.2 : 1}
                            style={{
                                width: '60%',
                                backgroundColor: isShowSubmitButton ? C.black : C.gray,
                            }}

                            onPress={() => {
                                if (isShowSubmitButton === true) {
                                    onSubmit()
                                }
                            }}

                        >
                            <ButtonSubmitText
                                style={{
                                    color: isShowSubmitButton ? C.white : C.sBlack,
                                }}
                            >
                                Pay
                            </ButtonSubmitText>
                        </ButtonSubmit>
                    </ContentBlockRow>
                </ContentBlock>
            </FilterContainer>


            {/* Payment details  */}
            <OfferAddPaymentDetails />

        </Animated.View >
    )
})

export default OfferPreview;

