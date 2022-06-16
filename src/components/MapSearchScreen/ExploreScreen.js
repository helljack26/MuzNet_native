import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { useNavigation, useRoute } from '@react-navigation/native';
// Components
import ItemMusician from '@/components/AdsList/ItemMusician'
import ItemVendor from '@/components/AdsList/ItemVendor'
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'

// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'

import { markers, mapDarkStyle, mapStandardStyle } from './mapData';

// Store
import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";
import { useMapSearchApiStore } from '@/stores/MapSearchApi';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 105;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 20;

//////////////////////////////////////////////////////////////////////////////

const ExploreScreen = observer(() => {
    const navigation = useNavigation();
    const route = useRoute();

    const isForContractor = route.name === 'ContractorMapSearchScreen'

    const { windowHeight, windowWidth } = getWindowDimension()
    // Store
    const { musicianMapData, vendorMapData, setMapData } = useMapSearchApiStore();
    const jsMusicianMapData = toJS(musicianMapData)
    const jsVendorMapData = toJS(vendorMapData)
    const mapData = isForContractor ? jsMusicianMapData : jsVendorMapData

    // Set list
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMapData(route.name);
        });
        return unsubscribe;
    }, [navigation]);

    const initialMapState = {
        region: {
            latitude: 37.87631002055519,
            longitude: -122.27392673492432,
            latitudeDelta: 0.04864195044303443,
            longitudeDelta: 0.040142817690068,
        },
    };

    const [state, setState] = useState(initialMapState);
    // Map animation
    let mapIndex = 0;

    let mapAnimation = new Animated.Value(0);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {

            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= mapData.length) {
                index = mapData.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;


                    setTimeout(() => {
                        setCurrentIndex(mapIndex)
                        const { coordinate } = mapData[index];
                        _map.current.animateToRegion(
                            {
                                ...coordinate,
                                latitudeDelta: state.region.latitudeDelta,
                                longitudeDelta: state.region.longitudeDelta,
                            },
                            400
                        );
                    }, 400);
                }
            }, 10)
        });

    });


    const interpolations = mapData.map((marker, index) => {

        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        });

        return { scale };
    });

    const onMarkerPress = (mapEventData) => {
        const markerID = mapEventData._targetInst.return.key;

        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }

    const _map = useRef(null);
    const _scrollView = useRef(null);


    return (
        <View style={{
            width: windowWidth,
            height: windowHeight,
        }}>
            <MapView
                ref={_map}
                initialRegion={state.region}
                style={styles.container}
                provider={PROVIDER_GOOGLE}
                customMapStyle={mapStandardStyle}
            >
                {mapData.map((marker, index) => {
                    const isActive = index === currentIndex
                    const isActiveMark = isActive ? styles.activeMark : styles.defaultMark
                    const isActiveText = isActive ? styles.activeMarkerText : styles.markerText
                    const scaleStyle = {
                        // transform: [
                        //     {
                        //         scale: interpolations[index].scale,
                        //     },
                        // ],
                    };

                    return (
                        <MapView.Marker
                            zIndex={isActive ? 1000 : 0}
                            key={index} coordinate={marker.coordinate} onPress={(e) => onMarkerPress(e)}>
                            <Animated.View style={isActiveMark}>
                                <Animated.Text
                                    style={isActiveText}
                                >
                                    $ {marker.adCostPerHour}
                                </Animated.Text>
                            </Animated.View>
                        </MapView.Marker>
                    );
                })}
            </MapView>

            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment="center"
                style={styles.bottomCardView}
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET
                }}
                contentContainerStyle={{
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                }
                            },
                        },
                    ],
                    { useNativeDriver: true }
                )}
            >
                {mapData.map((marker, id) => {
                    return <View
                        style={styles.card} key={id}>
                        {isForContractor === true ?
                            <ItemMusician data={marker} key={id} isDisableBottomMargin={true} />
                            :
                            <ItemVendor data={marker} key={id} isDisableBottomMargin={true} />}
                    </View>
                })}
            </Animated.ScrollView>
        </View>
    );
})
export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 500,
        width: '100%',
        marginBottom: 15,
    },
    bottomCardView: {
        position: "absolute",
        bottom: 60,
        left: 0,
        right: 0,
        width: '100%',
    },
    card: {
        borderRadius: 6,
        marginHorizontal: 10,
        height: '100%',
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    activeMark: {
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        minWidth: 58,
        backgroundColor: C.black,
        elevation: 25,
        borderRadius: 50,
    },
    defaultMark: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: C.white,
        height: 32,
        minWidth: 58,
        borderRadius: 50,

    },
    markerText: {
        paddingHorizontal: 10,
        paddingTop: 3,
        paddingBottom: 5,
        fontFamily: F.bold,
        fontSize: 15,

        color: C.black,
    },
    activeMarkerText: {
        color: C.white,
        paddingHorizontal: 10,
        paddingTop: 3,
        paddingBottom: 5,
        fontFamily: F.bold,
        fontSize: 15,
    }
});