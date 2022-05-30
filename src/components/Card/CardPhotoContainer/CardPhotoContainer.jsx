import C from '@/res/colors'
import IMAGES from '@/res/images'

const { CameraIcon, ShowOnMapIcon, RouteIcon } = IMAGES;

import React from 'react';
import { View, Dimensions, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 50;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

import { styles } from './styles.js'
const {
    Button,
    MapButton,
    BtnBlock,
    AllPhotoText,
} = styles;

const RenderItem = ({ item }) => {
    return (
        <View
            style={{
                marginTop: 15,
                marginLeft: -39,
                width: '100%',
                height: 200,
                borderRadius: 8,
                borderBottomWidth: 2,
                borderBottomColor: C.borderGray,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                backgroundColor: 'white',
            }}>
            <Image source={item} style={{ width: '100%', height: 200 }} />
        </View>
    );
};

export default function CardPhotoContainer({ photoCollection }) {

    return (
        <View>
            <Carousel
                data={photoCollection}
                renderItem={RenderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                enableSnap={true}
            />
            <Button>
                <CameraIcon width={19} />
                <AllPhotoText
                >Показать все фото ({photoCollection.length})</AllPhotoText>
            </Button>
            <BtnBlock>
                <MapButton>
                    <ShowOnMapIcon width={16} />
                    <AllPhotoText >
                        Смотреть на карте
                    </AllPhotoText>
                </MapButton>
            </BtnBlock>
        </View>
    );
};