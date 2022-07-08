import React from "react";
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'
// Images
import IMAGES from '@/res/images'
const {
    SearchIcon,
    FilterIcon
} = IMAGES;
// Styles
import { style } from './style'
const {
    // Search input
    SearchInputBlock,
    SearchInput,
    SearchIconBlock,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';

const FaqSearchInput = observer(({ searchText, isContractor, onChangeSearchText, isMinOne, initialFocusInput }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const screenName = route.name === 'MusicianListSearchScreen' || route.name === 'ContractorListSearchScreen'

    return (
        <SearchInputBlock>
            <SearchIconBlock>
                <SearchIcon width={14} height={14} />
            </SearchIconBlock>

            <SearchInput
                autoFocus={initialFocusInput === true ? true : false}
                maxLength={isMinOne === true ? 1 : 999}
                cursorColor={C.inputCursor}
                selectionColor={C.lightGray}
                placeholder={'Search help articles'}
                keyboardType="default"
                value={searchText}
                onChangeText={onChangeSearchText}
            />
        </SearchInputBlock>

    );
})

export default FaqSearchInput;