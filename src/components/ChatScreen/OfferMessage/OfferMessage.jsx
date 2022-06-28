import React from "react";
import { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { getWindowDimension } from '@/components/helpers/getWindowDimension'

// Images
import IMAGES from '@/res/images'
import C from '@/res/colors'
const {
    CrossBlackIcon,
} = IMAGES;
// Styles
import { style } from './style'

const {
    ModalWindowBlock,
    OfferDetails,
    OfferDetailsTitle,
    OfferDetailsBlock,
    OfferLi,
    OfferLiKeys,
    OfferLiValue,
    OfferStatus,
    OfferStatusText,
} = style;

const OfferMessage = ({ offerDetails }) => {
    const { windowHeight, windowWidth } = getWindowDimension()
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

    const isDateString = offerDate.string !== undefined && offerDate.string

    const isTimeStartString = offerStartTime.string !== undefined && offerStartTime.string
    const isTimeEndString = offerEndTime.string !== undefined && offerEndTime.string
    const isDurationString = offerDuration !== undefined && offerDuration
    const timeString = `${isTimeStartString}-${isTimeEndString} (${isDurationString} hours)`

    const isLocationString = offerLocation !== undefined && offerLocation

    const isTotalPriceString = offerTotalMoney !== undefined && offerTotalMoney
    const isPricePerHourString = offerPricePerHour !== undefined && offerPricePerHour

    const isPhoneNumberString = offerPhoneNumber !== undefined && offerPhoneNumber

    const isAdditionalString = offerAdditionalInfo !== undefined && offerAdditionalInfo

    const [offerStatus, setOfferStatus] = useState('Waiting for the answer');

    useEffect(() => {
        setTimeout(() => {
            setOfferStatus('Offer accepted')
        }, 5000);
    }, []);

    return (
        <ModalWindowBlock
            style={{
                width: windowWidth - 32,
            }}
        >

            {/* Offer details */}
            <OfferDetails>
                <OfferDetailsBlock
                    style={{
                        width: windowWidth - 32,
                    }}>
                    <OfferDetailsTitle>
                        Michael is sending you offer, please check it
                    </OfferDetailsTitle>

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

                    <OfferLi>
                        <OfferLiKeys>Contact phone:</OfferLiKeys>
                        <OfferLiValue>{isPhoneNumberString}</OfferLiValue>
                    </OfferLi>

                    <OfferLi
                        style={{
                            marginBottom: 0,
                        }}
                    >
                        <Text>
                            <OfferLiKeys>Additional information: </OfferLiKeys><OfferLiValue>{isAdditionalString}</OfferLiValue>
                        </Text>
                    </OfferLi>


                    <OfferStatus>
                        <OfferStatusText>
                            {offerStatus}
                        </OfferStatusText>
                    </OfferStatus>

                </OfferDetailsBlock>

            </OfferDetails>


        </ModalWindowBlock>

    );
}

export default OfferMessage;