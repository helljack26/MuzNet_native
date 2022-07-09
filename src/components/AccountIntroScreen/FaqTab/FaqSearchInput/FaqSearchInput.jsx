import React from "react";
// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'
// Images
import IMAGES from '@/res/images'
const {
    SearchIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    SearchInputBlock,
    SearchInput,
    SearchIconBlock,
} = style;

// Store
import { observer } from 'mobx-react-lite';

const FaqSearchInput = observer(({ searchText, onChangeSearchText }) => {

    return (
        <SearchInputBlock>
            <SearchIconBlock>
                <SearchIcon width={14} height={14} />
            </SearchIconBlock>

            <SearchInput
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