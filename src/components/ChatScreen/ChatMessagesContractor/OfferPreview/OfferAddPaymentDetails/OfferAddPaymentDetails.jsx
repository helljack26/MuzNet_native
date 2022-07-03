import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, Keyboard, View, Pressable, KeyboardAvoidingView, BackHandler } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Components
import AddPaymentDetails from '@/components/AddPaymentDetails'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateCreateOffer } from './useAnimateCreateOffer';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
    WarningBlackIcon,
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
} = style;
// Store
import { observer } from 'mobx-react-lite';
import { useOfferToMusicianApiStore } from '@/stores/OfferToMusicianApi';

const OfferAddPaymentDetails = observer(() => {
    const navigation = useNavigation();

    const route = useRoute();

    const { isOpenPaymentDetails, isOpenOfferPreview, setOpenPaymentDetails, setPaymentDetails } = useOfferToMusicianApiStore();

    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, height } = useAnimateCreateOffer()
    useEffect(() => {
        if (isOpenPaymentDetails === true) {
            onPress(true)
        }
    }, [isOpenPaymentDetails]);

    const [isShowingPaymentDetails, setShowingPaymentDetails] = useState(false);

    useEffect(() => {
        if (isOpenPaymentDetails === true && isOpenOfferPreview === true) {
            setShowingPaymentDetails(true)
        }
    }, [isOpenPaymentDetails, isOpenOfferPreview]);

    useEffect(() => {
        if (isShowingPaymentDetails === true && isOpenPaymentDetails === false) {
            onPress(false)
        }
    }, [isShowingPaymentDetails, isOpenPaymentDetails]);


    const onSubmitPaymentDetails = (data) => {
        console.log("🚀 ~ file: OfferAddPaymentDetails.jsx ~ line 206 ~ onSubmitPaymentDetails ~ data", data)
        setPaymentDetails(data)
        setOpenPaymentDetails(false)
        setShowingPaymentDetails(false)

        onPress(false)
        // Clear input value
        Keyboard.dismiss()
        return
    };

    return (
        <Animated.View style={{
            zIndex: 1000,
            height,
            // height: '90%',
            width: windowWidth,
            justifyContent: 'center',
            position: "absolute",
            left: 0,
            bottom: 0,
            right: 0,
        }}
        >
            <FilterContainer
                style={{ elevation: 100 }}>

                {/* Header */}
                <Header >
                    <HeaderClose
                        onPress={() => {
                            setOpenPaymentDetails(false)
                            setShowingPaymentDetails(false)
                            onPress(false)
                        }}
                    >
                        <CrossBlackIcon width={16} height={16} />
                    </HeaderClose>

                    <HeaderTitle>
                        Add Payment Details
                    </HeaderTitle>
                </Header>

                <AddPaymentDetails onSubmitPaymentDetails={onSubmitPaymentDetails} />

            </FilterContainer>

        </Animated.View >
    )
})

export default OfferAddPaymentDetails;

