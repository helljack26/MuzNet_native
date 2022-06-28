import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    AmericanExpressBankIcon,
    PayPalBankIcon,
    VisaBankIcon,
    MasterCardBankIcon,
    AddCrossIcon,
    RoundBlackCheckIcon,
} = IMAGES;

// Styles
import { style } from './style'
const {
    Container,
    SelectItem,
    CheckBox,
    BankCardIcon,
    SelectText,
    AddPayment,
    AddPaymentBg,
    AddPaymentBgImage,
    AddPaymentRow,
    AddPaymentRowText,
} = style;
// Store
import { observer } from 'mobx-react-lite';
import { useOfferToMusicianApiStore } from '@/stores/OfferToMusicianApi';

const ChoosePaymentMethod = observer(({ setShowSubmitButton }) => {
    const { windowHeight, windowWidth } = getWindowDimension()
    const { isOpenPaymentDetails, setOpenPaymentDetails, paymentDetails } = useOfferToMusicianApiStore();

    // Local state
    const [localPaymentMethods, setLocalPaymentMethods] = useState([]);
    const [localPaymentMethodActiveId, setLocalPaymentMethodActiveId] = useState();
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    useEffect(() => {
        if (!isEmpty(paymentDetails)) {
            setLocalPaymentMethods([paymentDetails, ...localPaymentMethods])
        }
    }, [paymentDetails]);

    return (

        <Container>
            {localPaymentMethods.length > 0 && localPaymentMethods.map((payment, id) => {
                const isActive = id === localPaymentMethodActiveId
                const lastFourDigitOfNumber = payment.cardNumber.slice(-4, payment.cardNumber.length)
                // console.log("🚀 ~ file: ChoosePaymentMethod.jsx ~ line 78 ~ {localPaymentMethods.length>0&&localPaymentMethods.map ~ lastFourDigitOfNumber", lastFourDigitOfNumber)
                return (
                    <SelectItem
                        key={id}
                        onPress={() => {
                            setLocalPaymentMethodActiveId(id)
                            setShowSubmitButton(true)
                        }}
                        isActive={isActive}
                    >
                        <BankCardIcon >
                            <MasterCardBankIcon width={24} height={17} />
                        </BankCardIcon>

                        <SelectText>Card ending is {lastFourDigitOfNumber}</SelectText>

                        <CheckBox isActive={isActive}>
                            {isActive === true && <RoundBlackCheckIcon width={20} height={20} />}
                        </CheckBox>
                    </SelectItem>)
            })}

            {/* Add payment method */}
            <AddPayment
                onPress={() => { setOpenPaymentDetails(true) }}
            >
                <AddPaymentBg>
                    <AddPaymentBgImage
                        style={{
                            width: windowWidth - 32,
                        }}
                        source={IMAGES.AddPaymentMethodBg} resizeMode={'stretch'} />
                </AddPaymentBg>

                <AddPaymentRow>
                    <AddCrossIcon width={16} height={16} />
                    <AddPaymentRowText>
                        Add payment details
                    </AddPaymentRowText>
                </AddPaymentRow>
            </AddPayment>

        </Container>

    )
})

export default ChoosePaymentMethod;