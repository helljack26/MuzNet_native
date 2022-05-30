import React from "react";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import FavoriteAndViewNumBlock from "@/components/FavoriteAndViewNumBlock";
import CardSaveButton from "@/components/Card/CardSaveButton/CardSaveButton";

import HELPERS from '@/components/helpers/helpers'
const { spaceInPriceValue, locationStringCombine } = HELPERS
// Images
import IMAGES from '@/res/images'
const {
    ArchiveIcon,
    RenameIcon,
    CrossIcon,
} = IMAGES;

// Styles
import { style } from './style.js'
const {
    ItemContainer,
    ItemContainerBlock,
    ItemContainerItemCol,
    ItemColImageBlock,
    ItemColInfoBlock,
    PriceBlock,
    NewPrice,
    OldPrice,
    Price,
    CatalogItemInfoName,
    CatalogItemInfoNameText,
    CatalogItemInfoPlace,
    CatalogItemInfoSize,
    ItemColRightBlock,
    ItemColRightBlockButtons,
    // MessageButton,
    // MessageButtonImage,
    // MessageButtonText,
    ItemContainerFooter,
    ItemContainerFooterButtons,
    FooterButton,
    FooterButtonText,
} = style;

const ObjectDataItem = ({ data, isActiveObject, percentButton }) => {
    const navigation = useNavigation();

    const {
        id,
        complexId,
        adTitle,
        category,
        discountPrice,
        adPrice,
        isRent,
        currencyType,
        complexName,
        adCity,
        adStreet,
        adDistrict,
        adHouseNumber,
        size,
        imagePath,
        favoriteNumber,
        viewNumber,
        plans,
        // percentageText,
    } = data;

    // const messageNumber = 0;

    const spacedPrice = spaceInPriceValue(adPrice)
    const spacedDiscountPrice = spaceInPriceValue(discountPrice)
    const currencySymbol = currencyType !== undefined ? currencyType : ''

    const adLocation = locationStringCombine({ adCity, adStreet, adDistrict, adHouseNumber })

    const isComplexLink = plans !== undefined ? 'ApartmentsComplexPageRealtor' : 'CardPageRealtor'
    const isComplexId = plans !== undefined ? complexId : id

    return (
        <ItemContainer>
            <ItemContainerBlock>

                <ItemColImageBlock
                    onPress={() => {
                        navigation.navigate('ScreenRealtor', {
                            screen: isComplexLink,
                            params: {
                                itemId: isComplexId,
                                category: category,
                            }
                        });
                    }}
                >
                    <Image source={imagePath[0]}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='stretch' />
                </ItemColImageBlock>

                <ItemContainerItemCol>
                    <ItemColInfoBlock>

                        {/* Price */}
                        {discountPrice !== undefined && adPrice !== undefined ?
                            <PriceBlock>
                                {discountPrice !== undefined && <NewPrice>{spacedDiscountPrice} {currencySymbol} {isRent === true && '/мес'}</NewPrice>}
                                {adPrice !== undefined && <OldPrice>{spacedPrice} {currencySymbol}</OldPrice>}
                            </PriceBlock>
                            :
                            adPrice !== undefined && <Price>{spacedPrice} {currencySymbol} {isRent === true && '/мес'}</Price>
                        }

                        <CatalogItemInfoName
                            onPress={() => {
                                navigation.navigate('ScreenRealtor', {
                                    screen: isComplexLink,
                                    params: {
                                        itemId: isComplexId,
                                        category: category,
                                    }
                                });
                            }}
                        >
                            <CatalogItemInfoNameText>
                                {adTitle}
                            </CatalogItemInfoNameText>
                        </CatalogItemInfoName>

                        {complexName !== undefined && <CatalogItemInfoPlace>{complexName}</CatalogItemInfoPlace>}

                        {adLocation !== undefined && <CatalogItemInfoPlace>{adLocation}</CatalogItemInfoPlace>}

                        {size !== undefined && <CatalogItemInfoSize>{size}</CatalogItemInfoSize>}

                    </ItemColInfoBlock>

                    <ItemColRightBlock>

                        <FavoriteAndViewNumBlock
                            favoriteNumber={favoriteNumber}
                            viewNumber={viewNumber}
                            isForCard={true}
                        />

                        <ItemColRightBlockButtons>

                            {percentButton !== undefined && percentButton}
                            {/* 
                            <MessageButton
                                isActive={false}
                            >
                                <MessageButtonImage
                                    isActive={false}
                                    buttonImage={IMAGES.ChatDefaultIcon}
                                ></MessageButtonImage>

                                <MessageButtonText isActive={false}>
                                    Сообщения: {messageNumber}
                                </MessageButtonText>

                            </MessageButton> */}

                        </ItemColRightBlockButtons>

                    </ItemColRightBlock>

                </ItemContainerItemCol>

            </ItemContainerBlock>

            <ItemContainerFooter>
                <CardSaveButton isForAccount={true} />

                <ItemContainerFooterButtons>

                    {isActiveObject && <FooterButton  >
                        <ArchiveIcon height={13} width={13} />
                        <FooterButtonText>Архивировать</FooterButtonText>
                    </FooterButton>}

                    {!isActiveObject && <FooterButton isActive={true}>
                        <FooterButtonText isActive={true}>Активировать</FooterButtonText>
                    </FooterButton>}


                    <FooterButton >
                        <RenameIcon height={13} width={13} />
                        <FooterButtonText >Редактировать</FooterButtonText>
                    </FooterButton>

                    <FooterButton >
                        <CrossIcon height={10} width={10} />
                        <FooterButtonText >Удалить</FooterButtonText>
                    </FooterButton>

                </ItemContainerFooterButtons>

            </ItemContainerFooter>
        </ItemContainer>
    )
}
export default ObjectDataItem;