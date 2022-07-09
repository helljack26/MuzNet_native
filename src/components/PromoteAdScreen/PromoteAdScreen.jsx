import React from 'react';
import { useState, useEffect } from 'react';
import { View, Keyboard, BackHandler } from 'react-native';
// Components
import ChoosePromoteType from './ChoosePromoteType'
import ChoosePromoteDuration from './ChoosePromoteDuration'
import ConfirmAndPay from './ConfirmAndPay'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'

// Store
import { observer } from 'mobx-react-lite';

// import { usePaymentAndPayoutApiStore } from '@/stores/PaymentAndPayoutApi';

const PromoteAdScreen = observer(() => {

    // const { isOpenPayoutDetails, setOpenPayoutDetails, setPayoutDetails, isClosePayoutDetails } = usePaymentAndPayoutApiStore();

    const { windowHeight, windowWidth } = getWindowDimension()
    // Steps shown state 
    const [isOpenChoosePromoteDuration, setOpenChoosePromoteDuration] = useState(true);
    const [isCloseChoosePromoteDuration, setCloseChoosePromoteDuration] = useState(false);

    const [isOpenConfirmAndPay, setOpenConfirmAndPay] = useState(false);
    const [isCloseConfirmAndPay, setCloseConfirmAndPay] = useState(false);

    const [selectedPromoteType, setSelectedPromoteType] = useState();
    const [selectedPromoteDuration, setSelectedPromoteDuration] = useState();
    const [selectedAccountType, setSelectedAccountType] = useState();

    // useEffect(() => {
    //     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
    //         if (!isOpenChoosePromoteDuration && !isOpenConfirmAndPay) {
    //             setTimeout(() => {
    //                 setOpenPayoutDetails(false)
    //             }, 600);
    //         }
    //         if (isOpenChoosePromoteDuration === true && !isOpenConfirmAndPay) {
    //             setCloseChoosePromoteDuration(true)
    //             setTimeout(() => {
    //                 setCloseChoosePromoteDuration(false)
    //             }, 590);
    //         }
    //         if (isOpenChoosePromoteDuration === true && isOpenConfirmAndPay === true) {
    //             setCloseConfirmAndPay(true)
    //             setTimeout(() => {
    //                 setCloseConfirmAndPay(false)
    //             }, 590);
    //         }

    //         return true
    //     })
    //     return () => {
    //         backHandler.remove()
    //     }
    // }, [isOpenPayoutDetails, isOpenChoosePromoteDuration, isOpenConfirmAndPay])

    const onSubmitPromoteAd = (data) => {
        const newPayout = {
            country: selectedPromoteType,
            howToGetPaid: selectedPromoteDuration,
            accountType: selectedAccountType,
            accountInfo: {
                cardHolderName: data.nameOnCard,
                routingNumber: data.routingNumber,
                accountNumber: data.accountNumber,
                confirmAccountNumber: data.confirmAccountNumber,
            },
        }
        console.log("🚀 ~ file: PayoutDetails.jsx ~ line 89 ~ onSubmitPromoteAd ~ newPayout", newPayout)

        // setPayoutDetails(newPayout)

        setOpenChoosePromoteDuration(false)
        setOpenConfirmAndPay(false)
        setSelectedPromoteType(undefined)
        setSelectedPromoteDuration(undefined)
        setSelectedAccountType(undefined)
        // Clear input value
        Keyboard.dismiss()
        closeTab()

        return
    };

    return (
        <View style={{
            zIndex: 1015,
            height: windowHeight + 50,
            width: windowWidth,
            // justifyContent: 'center',
            // position: "absolute",
            // top: 0,
            // bottom: 0,
            // right: 0,
        }}
        >
            {/* Initial tab always show */}
            <ChoosePromoteType
                selectedPromoteType={selectedPromoteType}
                setSelectedOption={setSelectedPromoteType}
                setOpenNextTab={setOpenChoosePromoteDuration}
            />

            {isOpenChoosePromoteDuration === true && <ChoosePromoteDuration
                selectedPromoteType={selectedPromoteType}
                selectedPromoteDuration={selectedPromoteDuration}
                setSelectedOption={setSelectedPromoteDuration}
                isOpenTab={isOpenChoosePromoteDuration}
                setOpenTab={setOpenChoosePromoteDuration}
                setOpenNextTab={setOpenConfirmAndPay}
                isCloseTab={isCloseChoosePromoteDuration}
            />
            }

            {isOpenConfirmAndPay === true && <ConfirmAndPay
                isOpenTab={isOpenConfirmAndPay}
                setOpenTab={setOpenConfirmAndPay}
                onSubmitPromoteAd={onSubmitPromoteAd}
                isCloseTab={isCloseConfirmAndPay}
            />
            }
        </View >
    )
})

export default PromoteAdScreen;

