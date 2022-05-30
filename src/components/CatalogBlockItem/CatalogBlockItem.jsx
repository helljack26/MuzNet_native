import React from 'react';

import { useNavigation } from '@react-navigation/native';

import FavoriteAndViewNumBlock from "@/components/FavoriteAndViewNumBlock";
import AddToFavoriteButton from '@/components/Buttons/AddToFavoriteButton/AddToFavoriteButton';
import ShareButton from '@/components/Buttons/ShareButton/ShareButton';

import HELPERS from '@/components/helpers/helpers'
const { spaceInPriceValue, locationStringCombine, sizeStringCombine } = HELPERS

// Styles
import { styleRecommendationItem } from './styleRecommendationItem'
import { styleCatalogItem } from './styleCatalogItem'
const CatalogBlockItem = ({ data, percentButton, isRecommendation }) => {
    // StyleSheet defined first check if recommendation block and after block realtor or user
    const style = isRecommendation !== undefined ? styleRecommendationItem : styleCatalogItem;
    // const style = styleRecommendationItem;
    const {
        СatalogItem,
        CatalogItemImageBlock,
        AbsoluteStatusNew,
        AbsoluteStatusSale,
        AbsoluteStatusText,
        CatalogItemImage,
        PriceBlock,
        NewPrice,
        OldPrice,
        Price,
        DetailsBtnBlock,
        CatalogItemInfo,
        CatalogItemInfoBlock,
        CatalogItemInfoName,
        CatalogItemInfoNameText,
        CatalogItemInfoPlace,
        CatalogItemInfoSize,
        CatalogItemFooter,
        CatalogItemFooterBlock,
        CatalogItemFooterLink,
        CatalogItemFooterLinkText,
    } = style;

    // Data
    const {
        id,
        complexId,
        adTitle,
        discountPrice,
        currencyType,
        adPrice,
        isRent,
        category,
        adCity,
        adStreet,
        adDistrict,
        adHouseNumber,
        complexName,
        imagePath,
        inFavorite,
        viewNumber,
        itemStatus,
        plans,
        favoriteNumber,
        objectDetails
    } = data;

    const { propertyArea, plotArea, apartmentRoomNumber } = objectDetails

    const isRealtor = percentButton !== undefined ? true : false;

    const isRealtorScreen = isRealtor ? 'ScreenRealtor' : 'ScreenUser'
    const isRealtorCardLink = isRealtor ? 'CardPageRealtor' : 'CardPage'
    const isRealtorComplexLink = isRealtor ? 'ApartmentsComplexPageRealtor' : 'ApartmentsComplexPage'

    const isComplexLink = plans !== undefined ? isRealtorComplexLink : isRealtorCardLink
    const isComplexId = plans !== undefined ? complexId : id

    const isRealtorHeight = isRealtor ? '97px' : '64px'

    const navigation = useNavigation();

    const spacedPrice = spaceInPriceValue(adPrice)
    const spacedDiscountPrice = spaceInPriceValue(discountPrice)
    const currencySymbol = currencyType !== undefined ? currencyType : ''

    const adLocation = locationStringCombine({ adCity, adStreet, adDistrict, adHouseNumber })
    const adSize = sizeStringCombine({ propertyArea, apartmentRoomNumber, plotArea })

    return (
        <СatalogItem>
            <CatalogItemImageBlock
                onPress={() => {
                    navigation.navigate(isRealtorScreen, {
                        screen: isComplexLink,
                        params: {
                            itemId: isComplexId,
                            category: category,
                        }
                    });
                }}
            >

                {/* Label new or disconts */}
                {itemStatus !== undefined ?
                    itemStatus === 'Новинка' ?
                        <AbsoluteStatusNew>
                            <AbsoluteStatusText>
                                {itemStatus}
                            </AbsoluteStatusText>
                        </AbsoluteStatusNew>
                        :
                        <AbsoluteStatusSale>
                            <AbsoluteStatusText>
                                {itemStatus}
                            </AbsoluteStatusText>
                        </AbsoluteStatusSale>
                    :
                    null
                }

                {/* Item image */}
                <CatalogItemImage source={imagePath[0]} resizeMode="stretch" />
            </CatalogItemImageBlock>

            {/* Item adTitle */}
            <CatalogItemInfo isRealtorPaddingRight={isRealtor}>
                <CatalogItemInfoBlock
                    isRealtorHeight={isRealtorHeight}
                    isRealtorPaddingRight={isRealtor}
                >
                    {/* Price */}
                    {discountPrice !== undefined && adPrice !== undefined ?
                        <PriceBlock>
                            {discountPrice !== undefined && <NewPrice>{spacedDiscountPrice} {currencySymbol} {isRent === true && '/мес'}</NewPrice>}
                            {adPrice !== undefined && <OldPrice>{spacedPrice} {currencySymbol}</OldPrice>}
                        </PriceBlock>
                        :
                        adPrice !== undefined && <Price>{spacedPrice} {currencySymbol} {isRent === true && '/мес'}</Price>
                    }
                    {/* adTitle */}
                    {adTitle !== undefined && <CatalogItemInfoName
                        onPress={() => {
                            navigation.navigate(isRealtorScreen, {
                                screen: isComplexLink,
                                params: {
                                    itemId: isComplexId,
                                    category: category,
                                }
                            });
                        }} >
                        <CatalogItemInfoNameText>
                            {adTitle}
                        </CatalogItemInfoNameText>
                    </CatalogItemInfoName>}

                    {/* Complex name */}
                    {complexName !== undefined && <CatalogItemInfoPlace>{complexName}</CatalogItemInfoPlace>}
                    {/* Location */}
                    <CatalogItemInfoPlace>
                        {adLocation !== undefined && adLocation}
                    </CatalogItemInfoPlace>

                    {/* Size */}
                    {adSize !== undefined && <CatalogItemInfoSize>{adSize}</CatalogItemInfoSize>}
                </CatalogItemInfoBlock>

                {/* Footer */}
                <CatalogItemFooter>
                    <CatalogItemFooterBlock>

                        <FavoriteAndViewNumBlock
                            favoriteNumber={favoriteNumber}
                            viewNumber={viewNumber}
                        />

                    </CatalogItemFooterBlock>
                    <CatalogItemFooterLink
                        onPress={() => {
                            navigation.navigate(isRealtorScreen, {
                                screen: isComplexLink,
                                params: {
                                    itemId: isComplexId,
                                    category: category,
                                }
                            });
                        }}
                    >
                        <CatalogItemFooterLinkText>
                            Подробнее &gt;
                        </CatalogItemFooterLinkText>
                    </CatalogItemFooterLink>
                </CatalogItemFooter>

                {/* Buttons  */}
                <DetailsBtnBlock>
                    {percentButton !== undefined && percentButton}
                    <ShareButton isBig={false} isRecommendation={isRecommendation} />
                    <AddToFavoriteButton inFavorite={inFavorite} isBig={false} isRecommendation={isRecommendation} />
                </DetailsBtnBlock>
            </CatalogItemInfo>

        </СatalogItem>
    )
}
export default CatalogBlockItem;
