import React from 'react';

import IMAGES from '@/res/images'
const { ArrowDownIcon } = IMAGES;

// Styles
import { styles } from './styles.js'
const {
    Container,
    SortButton,
    Title,
    SortValueText,
} = styles;

const SortButtonBar = () => {
    const sortValue = 'по умолчанию'
    const sortValue2 = 'за месяц'

    return (
        <Container>
            <SortButton>
                <Title>
                    Сортировка:
                </Title>
                <SortValueText>
                    {sortValue}
                </SortValueText>
                <ArrowDownIcon />

            </SortButton>
            <SortButton>
                <Title>
                    Выводить новое:
                </Title>
                <SortValueText>
                    {sortValue2}
                </SortValueText>
                <ArrowDownIcon />

            </SortButton>

        </Container>
    )
}
export default SortButtonBar;
