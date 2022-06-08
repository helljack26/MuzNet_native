import React from "react";
import { useNavigation } from '@react-navigation/native';
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
import RateBlock from "@/components/RateBlock";

const {
    // Search input
    SearchInputBlock,
    SearchInput,
    SearchIconBlock,
    SearchRemoveIconBlock,
} = style;

const ListSearchInput = ({ searchText, onChangeSearchText }) => {
    const navigation = useNavigation();

    return (
        <SearchInputBlock>

            <SearchIconBlock>
                <SearchIcon width={14} height={14} />
            </SearchIconBlock>

            <SearchRemoveIconBlock >
                <FilterIcon width={15} height={15} />
            </SearchRemoveIconBlock>

            <SearchInput
                cursorColor={C.inputCursor}
                selectionColor={C.lightGray}
                placeholder={'Search'}
                keyboardType="default"
                value={searchText}
                onChangeText={onChangeSearchText}
            />
        </SearchInputBlock>

    );
}

export default ListSearchInput;