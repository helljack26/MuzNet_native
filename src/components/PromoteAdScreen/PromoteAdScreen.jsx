import React from 'react';
import { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// Components
import ChoosePromoteType from './ChoosePromoteType'
import ChoosePromoteDuration from './ChoosePromoteDuration'
import ConfirmAndPay from './ConfirmAndPay'
import AfterSubmitWindow from '@/components/AfterSubmitWindow'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'

const PromoteAdScreen = ({ stackName, welcomeScreenName }) => {
    const navigation = useNavigation();

    const { windowHeight, windowWidth } = getWindowDimension()
    // Steps shown state 
    const [isOpenChoosePromoteDuration, setOpenChoosePromoteDuration] = useState(false);
    const [isCloseChoosePromoteDuration, setCloseChoosePromoteDuration] = useState(false);

    const [isOpenConfirmAndPay, setOpenConfirmAndPay] = useState(false);
    const [isCloseConfirmAndPay, setCloseConfirmAndPay] = useState(false);

    const [selectedPromoteType, setSelectedPromoteType] = useState();
    const [selectedPromoteDuration, setSelectedPromoteDuration] = useState({
        promotePrice: 21,
        promoteDuration: 7,
    });

    const [isOpenAfterSubmitMessage, setOpenAfterSubmitMessage] = useState(false);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            if (!isOpenChoosePromoteDuration && !isOpenConfirmAndPay && !isOpenAfterSubmitMessage) {
                navigation.goBack()
            }
            if (isOpenChoosePromoteDuration === true && !isOpenConfirmAndPay) {
                setCloseChoosePromoteDuration(true)
                setTimeout(() => {
                    setCloseChoosePromoteDuration(false)
                }, 590);
            }
            if (isOpenChoosePromoteDuration === true && isOpenConfirmAndPay === true) {
                setCloseConfirmAndPay(true)
                setTimeout(() => {
                    setCloseConfirmAndPay(false)
                }, 590);
            }
            if (isOpenAfterSubmitMessage === true) {
                navigation.navigate(stackName, { screen: welcomeScreenName })
            }
            return true
        })
        return () => {
            backHandler.remove()
        }
    }, [isOpenChoosePromoteDuration, isOpenConfirmAndPay, isOpenAfterSubmitMessage])

    const onSubmitPromoteAd = () => {
        setOpenAfterSubmitMessage(true)
        setOpenChoosePromoteDuration(false)
        setOpenConfirmAndPay(false)
        const newPromote = {
            promoteType: selectedPromoteType,
            promoteDuration: selectedPromoteDuration.promoteDuration,
            promotePrice: selectedPromoteDuration.promotePrice,
        }
        console.log("🚀 ~ file: PayoutDetails.jsx ~ line 89 ~ onSubmitPromoteAd ~ newPayout", newPromote)
        return
    };

    const AfterSubmitButtonAction = () => {
        setOpenAfterSubmitMessage(false)
        navigation.navigate(stackName, { screen: welcomeScreenName })
    };

    return (
        <View style={{
            zIndex: 1015,
            height: windowHeight + 50,
            width: windowWidth,
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
                setSelectedOption={setSelectedPromoteDuration}
                isOpenTab={isOpenChoosePromoteDuration}
                setOpenTab={setOpenChoosePromoteDuration}
                setOpenNextTab={setOpenConfirmAndPay}
                isCloseTab={isCloseChoosePromoteDuration}
            />
            }

            {isOpenConfirmAndPay === true && <ConfirmAndPay
                selectedPromoteDuration={selectedPromoteDuration}
                isOpenTab={isOpenConfirmAndPay}
                setOpenTab={setOpenConfirmAndPay}
                onSubmitPromoteAd={onSubmitPromoteAd}
                isCloseTab={isCloseConfirmAndPay}
            />}

            <AfterSubmitWindow
                title={'Your deal was submitted'}
                message={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
                windowImage={IMAGES.SuccessPayment}
                isPromoteBigImage={true}
                buttonText={'Home Screen'}
                setOpen={setOpenAfterSubmitMessage}
                isOpen={isOpenAfterSubmitMessage}
                afterSubmitButton={AfterSubmitButtonAction}
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
                afterSubmitButton={AfterSubmitButtonAction}
            /> */}
        </View >
    )
}

export default PromoteAdScreen;

