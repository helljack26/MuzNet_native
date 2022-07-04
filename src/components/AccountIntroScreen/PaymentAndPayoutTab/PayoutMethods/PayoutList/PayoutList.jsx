import React from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    RoundBlackCheckIcon,
} = IMAGES;

// Styles
import { style } from './style'
import F from '@/res/fonts'

const {
    Container,
    SelectItem,
    CheckBox,
    SavedPaymentText,
    SelectText,
} = style;
import { M } from '@/res/mixin'
const {
    BlackBtn,
    BlackBtnText,
} = M;
// Store
import { observer } from 'mobx-react-lite';
import { usePaymentAndPayoutApiStore } from '@/stores/PaymentAndPayoutApi';

const PayoutList = observer(({ setShowSubmitButton }) => {
    // if account we disable choose option
    const { isOpenPaymentDetails, setOpenPayoutDetails, payoutDetails } = usePaymentAndPayoutApiStore();
    console.log("🚀 ~ file: PayoutList.jsx ~ line 36 ~ PayoutList ~ payoutDetails", payoutDetails)

    // Local state
    const [localPayoutMethods, setLocalPayoutMethods] = useState([{
        country: 'USA',
        howToGetPaid: 'Paypal in USD',
        accountType: 'Checking',
        accountInfo: {
            cardHolderName: 'Dima',
            routingNumber: '22222222',
            accountNumber: '22222222',
            confirmAccountNumber: '22222222',
        },
    }]);
    const [localPaymentMethodActiveId, setLocalPaymentMethodActiveId] = useState();
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    useEffect(() => {
        if (!isEmpty(payoutDetails)) {
            setLocalPayoutMethods([payoutDetails, ...localPayoutMethods])
        }
    }, [payoutDetails]);

    return (
        <Container>
            {localPayoutMethods.length > 0 &&
                <SavedPaymentText>
                    Saved payout methods
                </SavedPaymentText>
            }
            {localPayoutMethods.length === 0 &&
                <SavedPaymentText
                    style={{
                        fontFamily: F.regular,
                    }}
                >
                    No payout method
                </SavedPaymentText>
            }
            {localPayoutMethods.length > 0 && localPayoutMethods.map((payout, id) => {
                const isFirst = id === 0
                const isActive = id === localPaymentMethodActiveId
                const lastFourDigitOfNumber = payout.accountInfo.accountNumber.slice(-4, payout.accountInfo.accountNumber.length)
                return (
                    <SelectItem
                        key={id}
                        onPress={() => {
                            setLocalPaymentMethodActiveId(id)

                        }}
                        isActive={isActive}
                    >
                        <SelectText>Account ending in {lastFourDigitOfNumber}</SelectText>

                        <CheckBox isActive={isActive}>
                            {(isFirst && localPaymentMethodActiveId === undefined) && <RoundBlackCheckIcon width={24} height={24} />}
                            {(isActive) && <RoundBlackCheckIcon width={24} height={24} />}
                        </CheckBox>
                    </SelectItem>)
            })}

            {/* Add payment method */}

            <BlackBtn
                style={{
                    marginTop: 16
                }}
                onPress={() => { setOpenPayoutDetails(true) }}
            >

                <BlackBtnText>
                    Add Payout Method
                </BlackBtnText>

            </BlackBtn>

        </Container>

    )
})

export default PayoutList;