import React from "react";
import { useState, useEffect, useRef } from 'react';
import C from '@/res/colors'
import S from '@/res/strings'

import useComponentVisible from '@/components/helpers/useComponentVisible'

import ApartmentPopupBlock from '../ApartmentPopupBlock/ApartmentPopupBlock'

import { usePopupStore } from '@/stores/popupStore';
import { usePopupDataStore } from '@/stores/popupDataStore';

import HELPERS from '@/components/helpers/helpers'
const { spaceInPriceValue } = HELPERS

// Images
import IMAGES from '@/res/images'

const { LockGrayIcon,
    CrossGrayIcon } = IMAGES;

// Styles
import { style } from './style.js'
import { observer } from "mobx-react-lite";
const {
    ApartmentSmallCell,
    ApartmentSmallCellHeader,
    ApartmentSmallCellPrice,
    ApartmentSmallCellCol,
    ApartmentSmallCellDisable,
    ApartmentSmallCellReserved,
    ApartmentSmallCellDisableText,
} = style;

const EntranceBlockItem = observer(({ apartmentData, isOpenPopup, isLast }) => {

    const {
        id,
        isSold,
        propertyArea,
    } = apartmentData;

    const marginRight = isLast ? 0 : 8;

    // const [popupVisible, setPopupVisible] = useState(false);
    const [itemXPosition, setItemXPosition] = useState();

    const { ref, isComponentVisible, setIsComponentVisible, setLeftOffset } = useComponentVisible(false);

    // TODO первая попытка остановился на вычислении расстояния относильно ячейки, при скролле берет значение относительно страницы и все что уезжает в лево устанавливает в минус, найти способ как узнать сдвиг относительно родительского контейнера
    // TODO вторая попытка, попробовать с тем что есть убрать утечку по первому методу из статьи  
    // https://www.loginradius.com/blog/engineering/how-to-fix-memory-leaks-in-react/#:~:text=Can't%20perform%20a%20React,in%20a%20useEffect%20cleanup%20function.

    // Popup store
    const { popupVisibleStore, setPopupVisible } = usePopupStore();
    const { setPopupData } = usePopupDataStore();


    const openPopup = () => {
        setPopupData(apartmentData)
        setIsComponentVisible(true)
        setPopupVisible(true)

        // setLeftOffset(itemXPosition)
    }

    switch (isSold) {
        case true:
            return (
                <ApartmentSmallCellDisable style={{ marginRight: marginRight, flexDirection: 'column', }}    >
                    <CrossGrayIcon width={14} height={14} />
                </ApartmentSmallCellDisable>)

        case 'reserved':
            return (
                <ApartmentSmallCellReserved style={{ marginRight: marginRight }}     >
                    <LockGrayIcon width={14} height={14} />
                </ApartmentSmallCellReserved>)
        //Available 
        default:
            return (
                <>
                    <ApartmentSmallCell
                        id={id}
                        ref={ref}
                        onPress={() => openPopup()}
                        style={{
                            marginRight: marginRight,
                            borderColor: isComponentVisible === true ? C.mainBlue : C.borderGray
                        }}

                        onLayout={(event) => {
                            event.target.measure(
                                (x, y, width, height, pageX, px) => {

                                    setItemXPosition(Math.round(pageX));
                                },
                            );
                        }}
                    >
                        <ApartmentSmallCellHeader>
                            {/* {propertyArea} */}
                            {itemXPosition}
                            {/* {S.squareMeterSymbol} */}
                        </ApartmentSmallCellHeader>

                    </ApartmentSmallCell>

                </>
            )
    }
})
export default EntranceBlockItem;