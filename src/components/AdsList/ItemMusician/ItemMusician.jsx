import React from "react";
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


const ItemMusician = ({ data }) => {
    if (data === undefined) return null

    const navigation = useNavigation();

    const {
        id,
        userAvatar,
        userCostPerHour,
        userCostPerHourCurrency,
        userFullName,
        userLocation,
        userGenres,
        userMusicalInstrument,
        userReview
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
            <RateBlock reviewData={userReview} screenType={'list'} />

            {/* Image */}
            <ItemImageBlock>
                <ItemImage source={userAvatar[0]} resizeMode={'cover'} />
            </ItemImageBlock>

            {/* Main data */}
            <ItemInfo>
                {/* Location */}
                <ItemInfoLocation>
                    <MapPointIcon width={8} height={12} />

                    <ItemInfoLocationText>
                        {userLocation}
                    </ItemInfoLocationText>
                </ItemInfoLocation>

                {/* Name */}
                <ItemInfoName>
                    {userFullName}
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
                        {userCostPerHourCurrency}{userCostPerHour}
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