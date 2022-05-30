import React from 'react';

import { StyleSheet, View } from 'react-native';

import HELPERS from '@/components/helpers/helpers'
const { spaceInPriceValue, locationStringCombine } = HELPERS

import CardDetailsButtonBar from '@/components/Card/CardDetailsButtonBar/CardDetailsButtonBar'
import ComplexAccordion from '../ComplexAccordion/ComplexAccordion'

import { style } from './style'
const {
    Container,
    Name_block,
    Name_block_header,
    Name_block_header_text,
    Name_block_header_text_block,
    Name_block_header_type,
    Name_block_header_text_block_new,
    Place,
    Price,
    Price_block,
    Price_block_price,
    Price_block_square_rating,
    Price_block_price_square,
} = style;

const ComplexDetails = ({ details, percentButtonLarge }) => {
    const {
        adTitle,
        adPrice,
        currencyType,
        adCity,
        adStreet,
        adDistrict,
        adHouseNumber,
        favoriteNumber,
        viewNumber,
        inFavorite,
        isDone,
        // coords,
        // agentId,
        // percentageText,
    } = details;

    const spacedPrice = spaceInPriceValue(adPrice)
    // const priceForSquareMeter = spaceInPriceValue(Math.trunc(adPrice / totalArea))
    const currencySymbol = currencyType !== undefined ? currencyType : ''

    const adLocation = locationStringCombine({ adCity, adStreet, adDistrict, adHouseNumber })

    return (
        <Container>
            {/* Main adTitle */}
            <Name_block>
                <Name_block_header>
                    <Name_block_header_text>
                        {adTitle}
                        <View style={styles.catalog_item_separate}></View>
                        {isDone !== undefined ? isDone === true ?
                            <Name_block_header_text_block_new>
                                <Name_block_header_type>
                                    Сдан
                                </Name_block_header_type>
                            </Name_block_header_text_block_new>
                            :
                            <Name_block_header_text_block>
                                <Name_block_header_type>
                                    {isDone}
                                </Name_block_header_type>
                            </Name_block_header_text_block> : null}
                    </Name_block_header_text>
                </Name_block_header>
            </Name_block>

            {/* Location */}
            <Place>
                {adLocation !== undefined && adLocation}
            </Place>

            {/* Price */}
            <Price>
                <Price_block>
                    <Price_block_price>от {spacedPrice} {currencySymbol}</Price_block_price>
                    {/* <Price_block_square_rating>
                        <Price_block_price_square>от {priceForSquareMeter} $ за м²</Price_block_price_square>
                    </Price_block_square_rating> */}
                </Price_block>
                <CardDetailsButtonBar inFavorite={inFavorite} favoriteNumber={favoriteNumber} viewNumber={viewNumber} percentButtonLarge={percentButtonLarge} />
            </Price>


            {/* About object */}
            <ComplexAccordion details={details} />
        </Container>
    )
}

export default ComplexDetails;

const styles = StyleSheet.create({
    catalog_item_separate: {
        width: 7,
    }
});
