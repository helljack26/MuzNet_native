import React from 'react';

import { useState } from 'react'
import IMAGES from '@/res/images'
const { CheckedIcon, CrossIcon } = IMAGES

// Styles
import { style } from './style'
const {
    SearchItem,
    FilterBlock,
    FilterItem,
    FilterHeader,
    FilterValue,
    SearchButtons,
    ReceiveEmail,
    ReceiveEmailCheckboxImg,
    ReceiveEmailText,
    SearchButtonsRight,
    RemoveSearch,
    RemoveSearchText,
    ShowResults,
    ShowResultsTextMobile,
} = style;

const FavoriteSearchItem = ({ data }) => {
    const { filters } = data;
    const [checkboxState, setcheckboxState] = useState();

    return (
        <SearchItem>
            <FilterBlock>
                {filters.map((filter, id) => {
                    return <FilterItem key={id}>
                        <FilterHeader>
                            {filter.header}:
                        </FilterHeader>
                        <FilterValue>
                            {filter.value}
                        </FilterValue>
                    </FilterItem>
                })}
            </FilterBlock>

            <SearchButtons>
                <ReceiveEmail onPress={() => setcheckboxState(checkboxState === true ? false : true)}  >
                    <ReceiveEmailCheckboxImg>
                        {checkboxState === true ? <CheckedIcon /> : null}
                    </ReceiveEmailCheckboxImg>

                    <ReceiveEmailText>
                        Получать уведомления по e-mail
                    </ReceiveEmailText>
                </ReceiveEmail>

                <SearchButtonsRight>
                    <RemoveSearch>

                        <CrossIcon />
                        <RemoveSearchText>
                            Удалить поиск
                        </RemoveSearchText>
                    </RemoveSearch>

                    <ShowResults
                        onClick={() => alert('Показываю')} >
                        <ShowResultsTextMobile>
                            Показать
                        </ShowResultsTextMobile>
                    </ShowResults>
                </SearchButtonsRight>
            </SearchButtons>
        </SearchItem >)
}


export default FavoriteSearchItem;