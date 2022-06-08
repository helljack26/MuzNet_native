import React from "react";
import { useNavigation } from '@react-navigation/native';
// Images
import IMAGES from '@/res/images'
const {
    MapPointIcon
} = IMAGES;
// Styles
import { style } from '../ItemMusician/style'
import RateBlock from "@/components/RateBlock";

const {
    ItemContainer,
    ItemImageBlock,
    ItemImage,
    // Info
    ItemInfo,
    ItemInfoLocation,
    ItemInfoLocationText,
    ItemInfoDescription,
    ItemInfoName,
    ItemInfoCost,
    ItemInfoCostValue,
    ItemInfoCostValuePostfix
} = style;


const ItemMusician = ({ data }) => {
    if (data === undefined) return null
    const navigation = useNavigation();

    const {
        id,
        adImage,
        adCostPerHour,
        adCostPerHourCurrency,
        adDescription,
        adTitle,
        adLocation,
        adReview
    } = data;

    return (
        <ItemContainer
        // onPress={() => navigation.navigate('ContractorStack', {
        //     screen: 'MusicianCardScreen',
        //     params: {
        //         id: id,
        //     }
        // })}
        >
            {/* Rate */}
            <RateBlock reviewData={adReview} screenType={'list'} />

            {/* Image */}
            <ItemImageBlock>
                <ItemImage source={adImage[0]} resizeMode={'cover'} />
            </ItemImageBlock>

            {/* Main data */}
            <ItemInfo>
                {/* Location */}
                <ItemInfoLocation>
                    <MapPointIcon width={8} height={12} />

                    <ItemInfoLocationText>
                        {adLocation}
                    </ItemInfoLocationText>
                </ItemInfoLocation>

                {/* Name */}
                <ItemInfoName>
                    {adTitle}
                </ItemInfoName>
                {/* Description */}
                <ItemInfoDescription
                    ellipsizeMode={'tail'}
                    numberOfLines={1}>
                    {adDescription}
                </ItemInfoDescription>

                {/* Cost */}
                <ItemInfoCost>
                    <ItemInfoCostValue>
                        {adCostPerHourCurrency}{adCostPerHour}
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