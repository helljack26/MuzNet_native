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
    SearchRemoveIcon,
    SearchRemoveIconBlock,
} = style;

// Store
import { observer } from 'mobx-react-lite';
import { useSearchApiStore } from '@/stores/SearchApi';

const ChatFooter = observer(({ searchText, isContractor, onChangeSearchText, isMinOne, initialFocusInput }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const screenName = route.name === 'MusicianListSearchScreen' || route.name === 'ContractorListSearchScreen'

    const { isOpenFilters, setOpenFilters } = useSearchApiStore();

    const stack = isContractor === true ? 'ContractorStack' : 'MusicianStack'
    const screen = isContractor === true ? 'ContractorListSearchScreen' : 'MusicianListSearchScreen'

    return (
        <SearchInputBlock>
            <SearchIconBlock>
                <SearchIcon width={14} height={14} />
            </SearchIconBlock>
            {/* Filters button */}
            <SearchRemoveIconBlock
                onPress={() => {
                    if (!screenName) {
                        navigation.navigate(stack, { screen: screen });
                    }
                    setOpenFilters(true)
                }}
            >
                <SearchRemoveIcon>
                    <FilterIcon width={15} height={15} />
                </SearchRemoveIcon>
            </SearchRemoveIconBlock>

            <SearchInput
                autoFocus={initialFocusInput === true ? true : false}
                maxLength={isMinOne === true ? 1 : 999}
                cursorColor={C.inputCursor}
                selectionColor={C.lightGray}
                placeholder={'Search'}
                keyboardType="default"
                value={searchText}
                onChangeText={onChangeSearchText}
            />
        </SearchInputBlock>

    );
})

export default ChatFooter;