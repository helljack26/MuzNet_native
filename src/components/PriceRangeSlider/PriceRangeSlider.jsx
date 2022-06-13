import React from 'react';
import { useState, useEffect } from 'react';

import { View, Text } from 'react-native';

import RangeSlider from 'rn-range-slider';


// Variables
import C from '@/res/colors'
// Images
import IMAGES from '@/res/images'
const {
    PriceRangeBgIcon,
    CheckRoundBlackIcon
} = IMAGES;
// Styles
import { style } from './style'

const {
    RangeBlock,
    RangeBlockHeader,
    RangeBlockHeaderTitle,
    RangeBlockHeaderText,

    Thumb,

} = style;

const PriceRangeSlider = () => {

    const [rangeDisabled, setRangeDisabled] = useState(false);
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(10000);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10000);
    const [floatingLabel, setFloatingLabel] = useState(false);

    const renderThumb = useCallback(() => <Thumb></Thumb>, []);
    const renderRail = useCallback(() => <Rail></Rail>, []);
    const renderRailSelected = useCallback(() => <RailSelected></RailSelected>, []);
    const renderLabel = useCallback(value => <Label text={value} />, []);
    const renderNotch = useCallback(() => <Notch />, []);
    const handleValueChange = useCallback((low, high) => {
        setLow(low);
        setHigh(high);
    }, []);
    const toggleRangeEnabled = useCallback(() => setRangeDisabled(!rangeDisabled), [rangeDisabled]);
    const setMinTo50 = useCallback(() => setMin(50), []);
    const setMinTo0 = useCallback(() => setMin(0), []);
    const setMaxTo100 = useCallback(() => setMax(100), []);
    const setMaxTo500 = useCallback(() => setMax(500), []);
    const toggleFloatingLabel = useCallback(() => setFloatingLabel(!floatingLabel), [floatingLabel]);
    return (
        <RangeBlock>
            <RangeBlockHeader>
                <RangeBlockHeaderTitle>
                    Price Range:
                </RangeBlockHeaderTitle>

                <RangeBlockHeaderText>
                    ${low} - ${high}
                </RangeBlockHeaderText>

            </RangeBlockHeader>
            <Slider
                style={styles.slider}
                min={min}
                max={max}
                step={1}
                disableRange={rangeDisabled}
                floatingLabel={floatingLabel}
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
            />

        </RangeBlock>
    );

}

export default PriceRangeSlider;