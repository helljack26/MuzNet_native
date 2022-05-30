import React from 'react';
import { StyleSheet, View } from 'react-native';

import HELPERS from '@/components/helpers/helpers'
const { spaceInPriceValue, locationStringCombine } = HELPERS

import CardDetailsButtonBar from '../CardDetailsButtonBar/CardDetailsButtonBar'
import CardAccordion from '../CardAccordion/CardAccordion'
import ComplainLink from '@/components/Buttons/ComplainLink/ComplainLink';

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
    Price_block_price_new,
    Price_block_price_old,
    Price_block_square_rating,
    Price_block_price_square,
    Price_block_price_rating,
} = style;

const CardDetailsContainer = ({ details, isRent, percentButtonLarge, complexPath }) => {
    const {
        adTitle,
        adPrice,
        currencyType,
        discountPrice,
        adCity,
        adStreet,
        adDistrict,
        adHouseNumber,
        favoriteNumber,
        viewNumber,
        inFavorite,
        isNewHouse,
        objectDetails,
        adDescription,
        // coords,
        // agentId,
        // percentageText,
    } = details;

    const { propertyArea, plotArea } = objectDetails;

    const spacedPrice = spaceInPriceValue(adPrice)
    const spacedDiscountPrice = spaceInPriceValue(discountPrice)
    const currencySymbol = currencyType !== undefined ? currencyType : ''


    const priceForSquareMeter = spaceInPriceValue(Math.trunc(adPrice / propertyArea))
    const priceForPlotPart = spaceInPriceValue(Math.trunc(adPrice / plotArea))
    const isSquareMeter = propertyArea !== undefined && plotArea === undefined

    const adLocation = locationStringCombine({ adCity, adStreet, adDistrict, adHouseNumber })

    return (
        <Container>
            {/* Main adTitle */}
            <Name_block>
                <Name_block_header>
                    <Name_block_header_text>
                        {adTitle}
                        <View style={styles.catalog_item_separate}></View>
                        {isNewHouse !== undefined ? isNewHouse === true ?
                            <Name_block_header_text_block_new>
                                <Name_block_header_type>
                                    Новостройка
                                </Name_block_header_type>
                            </Name_block_header_text_block_new>
                            :
                            <Name_block_header_text_block>
                                <Name_block_header_type>
                                    Вторичное жилье
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
                    {/* Price */}
                    {discountPrice !== undefined && adPrice !== undefined ?
                        <Price_block>
                            {discountPrice !== undefined && <Price_block_price_new>{spacedDiscountPrice} {currencySymbol} {isRent === true && '/мес'}</Price_block_price_new>}
                            {adPrice !== undefined && <Price_block_price_old>{spacedPrice} {currencySymbol}</Price_block_price_old>}
                        </Price_block>
                        :
                        adPrice !== undefined && <Price_block_price>{spacedPrice} {currencySymbol} {isRent === true && '/мес'}</Price_block_price>
                    }

                    {/* <Price_block_price> */}
                    <Price_block_square_rating>
                        {/* For square meter property */}
                        {isSquareMeter && <Price_block_price_square>{priceForSquareMeter} {currencySymbol} за м² &nbsp;·&nbsp; </Price_block_price_square>}

                        {/* For plot property */}
                        {plotArea !== undefined && <Price_block_price_square>{priceForPlotPart} {currencySymbol} за сотку &nbsp;·&nbsp; </Price_block_price_square>}
                        <Price_block_price_rating>Ниже рыночной</Price_block_price_rating>
                    </Price_block_square_rating>
                </Price_block>
                <CardDetailsButtonBar inFavorite={inFavorite} favoriteNumber={favoriteNumber} viewNumber={viewNumber} percentButtonLarge={percentButtonLarge} />
            </Price>

            {/* About object */}
            <CardAccordion objectDetails={objectDetails} adDescription={adDescription} complexPath={complexPath} />

            {/* Complain link */}
            {percentButtonLarge === undefined && <ComplainLink />}

        </Container>
    )
}

export default CardDetailsContainer;
const styles = StyleSheet.create({
    catalog_item_separate: {
        width: 7,
    }
});
