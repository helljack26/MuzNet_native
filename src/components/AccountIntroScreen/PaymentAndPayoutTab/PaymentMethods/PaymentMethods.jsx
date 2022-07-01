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

const PaymentMethods = observer(({ isPayments, isOpen, setOpen }) => {

    const route = useRoute();

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, width } = useAnimateOfferPreview()

    useEffect(() => {
        if (isOpen === true) {
            onPress(true)
        }
    }, [isOpen]);

    // Is show submit button
    const [isShowSubmitButton, setShowSubmitButton] = useState(false);



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
                            onPress(false)
                            setTimeout(() => {
                                setOpen(false)
                            }, 600);
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


                    {/* Сhoose payment method */}
                    <OfferPayment>
                        <OfferDetailsTitle>
                            Choose payment method:
                        </OfferDetailsTitle>

                        <ChoosePaymentMethod setShowSubmitButton={setShowSubmitButton} />
                    </OfferPayment>

                    {/* Empty block if open keyboard */}
                    <View
                        style={{
                            marginBottom: isKeyboardOpen === true ? 200 : 0,
                        }}
                    >
                    </View>
                </FilterBlock>

            </FilterContainer>


            {/* Payment details  */}
            <OfferAddPaymentDetails />

        </Animated.View >
    )
})

export default PaymentMethods;

