import React from "react";

import IMAGES from '@/res/images'
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';
// Styles
import styled from "styled-components";

const { GoBackIcon } = IMAGES;


const Arrow = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
position: absolute;
padding-left: 5px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 10px;
top: 0px;
left: -10px;
z-index: 1000;
bottom: 0px;
`;
const CalendarArrowButtonLeft = styled(Arrow)`
left: -50px;
`;
const CalendarArrowButtonRight = styled(Arrow)`
transform: rotate(180deg);
`;

const CalendarArrow = ({ direction, leftAction, rightAction }) => {

    return (direction === 'left' ? <CalendarArrowButtonLeft
        onPress={() => {
            leftAction(true)
            rightAction(false)
        }}
    >
        <GoBackIcon width={12} height={20} />

    </CalendarArrowButtonLeft>
        :
        <CalendarArrowButtonRight
            onPress={() => {
                rightAction(true)
                leftAction(false)
            }}
        >
            <GoBackIcon width={12} height={20} />

        </CalendarArrowButtonRight>
    )
}
export default CalendarArrow; 