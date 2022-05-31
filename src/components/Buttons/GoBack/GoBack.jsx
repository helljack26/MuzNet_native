import React from "react";

import IMAGES from '@/res/images'
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';
// Styles
import styled from "styled-components";

const { GoBackIcon } = IMAGES;


const GoBackButton = styled.TouchableOpacity`
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
bottom: 0px;
`;

const GoBack = () => {
    const navigation = useNavigation();

    return (<GoBackButton

        onPress={() => {
            navigation.goBack()
        }}>
        <GoBackIcon width={12} height={20} />

    </GoBackButton>
    )
}
export default GoBack; 