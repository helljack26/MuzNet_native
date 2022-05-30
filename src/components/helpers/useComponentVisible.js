import { useState, useEffect, useRef } from 'react';
// import scrollState from "stores/entranceScrollWidth";
import { usePopupStore } from '@/stores/popupStore';

export default function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const [leftOffset, setLeftOffset] = useState();

    const ref = useRef(null);
    const { setPopupVisible, parentContainerWidth, setPopupClientLeft } = usePopupStore();

    // const { popupData, popupVisible, setPopupVisible, setPopupData, popupClientLeft } = usePopupStore();

    // const handleClickOutside = (event) => {
    //     if (event.target.alt !== undefined && event.target.alt === 'Close popup') {
    //         setIsComponentVisible(false);
    //     }
    // };

    useEffect(() => {
        if (isComponentVisible) {
            // setPopupVisible(true)
            // console.log('вотэтокайф',leftOffset);
            // There set popup position
            let scrollWidth = parentContainerWidth;
            const popupWidth = 300;
            const clientLeft = leftOffset
            // If not enough place for popup at right, place it left
            const isPlaceRightEnough = ((clientLeft + popupWidth) + 200) < scrollWidth;
            const placeAtLeftSide = clientLeft - (popupWidth + 15)
            console.log("🚀 ~ file: useComponentVisible.js ~ line 31 ~ useEffect ~ placeAtLeftSide", placeAtLeftSide)
            // // Condition where placing popup
            const left = isPlaceRightEnough === true ? clientLeft + 110 : placeAtLeftSide;
            console.log("🚀 ~ file: useComponentVisible.js ~ line 33 ~ useEffect ~ left", left)
            setPopupClientLeft(left)
            // setIsComponentVisible(initialIsVisible)
            // if (scrollWidth === 0) {
            //     scrollWidth = scrollState.scrollWidth
            //   
            // } else {
            //     setLeftOffset(left)
            // }
        }
        // document.addEventListener('click', handleClickOutside);
        // return () => {
        //     document.removeEventListener('click', handleClickOutside);
        // }
    }, [isComponentVisible, initialIsVisible, leftOffset]);

    return { ref, isComponentVisible, setIsComponentVisible, leftOffset, setLeftOffset };
}