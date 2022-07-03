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
import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText,
} = M;
// Store
import { observer } from 'mobx-react-lite';
import { usePaymentAndPayoutApiStore } from '@/stores/PaymentAndPayoutApi';

const ChoosePaymentMethod = observer(({ setShowSubmitButton, isAccountScreen }) => {
    // if account we disable choose option
    const { windowHeight, windowWidth } = getWindowDimension()
    const { isOpenPaymentDetails, setOpenPaymentDetails, paymentDetails } = usePaymentAndPayoutApiStore();

    // Local state
    const [localPaymentMethods, setLocalPaymentMethods] = useState([{
        cardCvvCode: 696,
        cardExpiryDate: "04/29",
        cardNumber: "5555 6666 7777 8888",
        cardZipCode: "67646",
        nameOnCard: "John Dou",
    }]);
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
                const isActive = id === localPaymentMethodActiveId && !isAccountScreen
                const lastFourDigitOfNumber = payment.cardNumber.slice(-4, payment.cardNumber.length)
                return (
                    <SelectItem
                        activeOpacity={isAccountScreen ? 1 : 0.2}
                        key={id}
                        onPress={() => {
                            if (!isAccountScreen) {
                                setLocalPaymentMethodActiveId(id)
                                setShowSubmitButton(true)
                            }
                        }}
                        isActive={isActive}
                    >
                        <BankCardIcon >
                            <MasterCardBankIcon width={24} height={17} />
                        </BankCardIcon>

                        <SelectText>Card ending in {lastFourDigitOfNumber}</SelectText>


                        {!isAccountScreen && <CheckBox isActive={isActive}>
                            {isActive === true && <RoundBlackCheckIcon width={20} height={20} />}
                        </CheckBox>}
                    </SelectItem>)
            })}

            {/* Add payment method */}
            {!isAccountScreen ? <AddPayment
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
                :
                <BlackBtn
                    style={{
                        marginTop: 16
                    }}
                    onPress={() => { setOpenPaymentDetails(true) }}
                >

                    <BlackBtnText>
                        Add payment method
                    </BlackBtnText>

                </BlackBtn>
            }
        </Container>

    )
})

export default ChoosePaymentMethod;