import React from 'react';
import { useState, useEffect } from 'react';

import { Animated } from 'react-native';
// Components
import DropSelect from '@/components/Dropdowns/DropSelect'
import SearchInputDropSelect from '@/components/Dropdowns/SearchInputDropSelect'
import SearchLocationDropSelect from '@/components/Dropdowns/SearchLocationDropSelect'
import DropSelectCalendar from '@/components/Dropdowns/DropSelectCalendar'
import PriceRangeSlider from '@/components/PriceRangeSlider'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateItemStyle } from './useAnimateItemStyle';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
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
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()
    const { onPress, height } = useAnimateItemStyle({ isOpenFilters })

    // Sort by
    const [isOpen, setIsOpen] = useState(false);
    const [sortType, setSortType] = useState(null);
    const toggling = (state) => setIsOpen(state);
    const onPositionSelect = value => () => { setSortType(value); setIsOpen(false); };

    // Genres Search 
    const [chosenGenres, getChosenGenres] = useState([]);
    // Instruments Search 
    const [chosenInstrument, getChosenInstrument] = useState([]);
    // Get location
    const [chosenLocation, getChosenLocation] = useState();

    const [chosenDate, getChosenDate] = useState('');

    const [priceRange, getPriceRange] = useState({
        minPrice: '',
        maxPrice: ''
    });
    useEffect(() => {
        // console.log("🚀 ~ file: SearchFilters.jsx ~ line 58 ~ useEffect ~ chosenLocation", priceRange)
    }, [chosenDate, priceRange]);
    return (<Animated.View style={{
        zIndex: 1000,
        height,
        // maxHeight: windowHeight - 50,
        // height: '100%',
        width: windowWidth,
        justifyContent: 'center',
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
    }}
    >
        <FilterContainer
            style={{ elevation: 100 }}>
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
            <FilterBlock
                keyboardShouldPersistTaps={'handled'}
            >
                <DropSelect
                    selectedValue={sortType}
                    toggling={toggling}
                    isOpen={isOpen}
                    onSelect={onPositionSelect}
                    dropHeader={S.SortByOptions.dropHeader}
                    dropOptions={S.SortByOptions.dropOptions}
                />
                {/* Search music genre */}
                <SearchInputDropSelect
                    dataForChoose={S.Genres}
                    alreadyChosenInstrument={chosenGenres}
                    searchPlaceholder={'Choose music genres'}
                    getChosenData={getChosenGenres}
                />
                {/* Search music genre */}
                <SearchInputDropSelect
                    dataForChoose={S.Instruments}
                    alreadyChosenInstrument={chosenInstrument}
                    searchPlaceholder={'Choose instruments'}
                    getChosenData={getChosenInstrument}
                />
                {/* Search music genre */}
                <SearchLocationDropSelect
                    setFilterLocation={getChosenLocation}
                />
                {/* Search music genre */}
                <DropSelectCalendar
                    setFilterDate={getChosenDate}
                />
                <PriceRangeSlider
                    getPriceRange={getPriceRange}
                />


            </FilterBlock>

        </FilterContainer>
    </Animated.View>
    )
})

export default SearchFilters;

