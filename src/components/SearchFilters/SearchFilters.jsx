import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import { Animated, Button, ScrollView, StyleSheet, View } from 'react-native';
// Components
import DropSelect from '@/components/DropSelect'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateItemStyle } from './useAnimateItemStyle';
// Images
import IMAGES from '@/res/images'
const {
    CrossBlackIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'

// Styles
import { style } from './style'
const {
    FilterContainer,
    Header,
    HeaderClose,
    HeaderTitle,
    FilterBlock,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';

const SearchFilters = observer(() => {
    const { isOpenFilters, setOpenFilters } = useSearchApiStore();

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, height } = useAnimateItemStyle({ isOpenFilters })

    // Sort by
    const [isOpen, setIsOpen] = useState(false);
    const [positionType, setPositionType] = useState(null);
    const toggling = (state) => setIsOpen(state);
    const onPositionSelect = value => () => { setPositionType(value); setIsOpen(false); };

    return (<Animated.View style={{
        zIndex: 1000,
        // height,
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
    }}>
        <FilterContainer style={{ elevation: 10 }}  >

            {/* Header */}
            <Header>
                <HeaderClose
                    onPress={() => {
                        setOpenFilters(false)
                        onPress(false)
                    }}
                >
                    <CrossBlackIcon width={16} height={16} />
                </HeaderClose>

                <HeaderTitle>
                    Sort and filter
                </HeaderTitle>
            </Header>

            {/* Sort and filters */}
            <FilterBlock>
                <DropSelect
                    selectedValue={positionType}
                    toggling={toggling}
                    isOpen={isOpen}
                    onSelect={onPositionSelect}
                    dropHeader={S.SortByOptions.dropHeader}
                    dropOptions={S.SortByOptions.dropOptions}
                />


            </FilterBlock>

        </FilterContainer>
    </Animated.View>
    )
})

export default SearchFilters;

