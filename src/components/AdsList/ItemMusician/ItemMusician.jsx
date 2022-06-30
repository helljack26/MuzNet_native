import React from "react";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// Images
import IMAGES from '@/res/images'
const {
    MapPointIcon
} = IMAGES;
// Styles
import { style } from './style'
import RateBlock from "@/components/RateBlock";

const {
    ItemContainer,
    ItemImageBlock,
    ItemImage,
    // Info
    ItemInfo,
    ItemInfoLocation,
    ItemInfoLocationText,
    ItemInfoName,
    ItemInfoGenres,
    ItemInfoGenre,
    ItemInfoGenreText,
    ItemInfoCost,
    ItemInfoCostValue,
    ItemInfoCostValuePostfix
} = style;


const ItemMusician = ({ data, isDisableBottomMargin, setScrollToTop }) => {
    if (data === undefined) return null

    const navigation = useNavigation();

    const {
        id,
        userAvatar,
        userPricePerHour,
        userPricePerHourCurrency,
        userFirstName,
        userLastName,
        userLocation,
        userGenres,
        userReview
    } = data;

    const [isInfoBiggerThanImage, setInfoBiggerThanImage] = useState(false);

    const onLayout = (event) => {
        const { height } = event.nativeEvent.layout;
        if (height > 106) {
            setInfoBiggerThanImage(true)
        } else {
            setInfoBiggerThanImage(false)
        }
        return
    }
    return (
        <ItemContainer
            style={{
                marginBottom: isDisableBottomMargin === true ? 0 : 8,
            }}
            onPress={() => {
                setScrollToTop !== undefined && setScrollToTop(true)
                navigation.navigate('ContractorStack', {
                    screen: 'MusicianCardScreen',
                    params: {
                        musicianId: id,
                    }
                }
                )
            }
            }
        >
            {/* Rate */}
            <RateBlock reviewData={userReview} screenType={'list'} />

            {/* Image */}
            <ItemImageBlock>
                <ItemImage source={userAvatar[0]} resizeMode={'cover'} />
            </ItemImageBlock>

            {/* Main data */}
            <ItemInfo
                isInfoBiggerThanImage={isInfoBiggerThanImage}
                onLayout={onLayout}
                isForMap={isDisableBottomMargin}
            >
                {/* Location */}
                <ItemInfoLocation>
                    <MapPointIcon width={8} height={12} />

                    <ItemInfoLocationText
                        ellipsizeMode={'tail'}
                        numberOfLines={1}
                    >
                        {userLocation}
                    </ItemInfoLocationText>
                </ItemInfoLocation>

                {/* Name */}
                <ItemInfoName
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                >
                    {userFirstName} {userLastName}
                </ItemInfoName>

                {/* Genres */}
                <ItemInfoGenres>
                    {userGenres.map((genre, id) => {
                        if (id < 3) {
                            return <ItemInfoGenre key={id}>
                                <ItemInfoGenreText>{genre.toLowerCase()}</ItemInfoGenreText>
                            </ItemInfoGenre>
                        } else {
                            return
                        }
                    })}
                </ItemInfoGenres>

                {/* Cost */}
                <ItemInfoCost>
                    <ItemInfoCostValue>
                        {userPricePerHourCurrency}{userPricePerHour}
                    </ItemInfoCostValue>
                    <ItemInfoCostValuePostfix>
                        / hour
                    </ItemInfoCostValuePostfix>
                </ItemInfoCost>

            </ItemInfo>
        </ItemContainer>

    );
}

export default ItemMusician;