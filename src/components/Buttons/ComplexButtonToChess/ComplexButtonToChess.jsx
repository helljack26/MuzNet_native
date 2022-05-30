import React from "react";
import { useNavigation } from '@react-navigation/native';

import F from '@/res/fonts'
import C from '@/res/colors'

// Styles
import styled from "styled-components/native";

const ButtonToChessMobile = styled.TouchableOpacity`
border-radius: 8px;
width: 49%;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 16px;
background-color: ${C.mainBlue};
`;
const ButtonToChessText = styled.Text`
font-size: 14px;
font-family: ${F.medium};
color: white;
`;

const ComplexButtonToChess = ({ screenName, planPageName, complexId, planId }) => {
    const navigation = useNavigation();

    return <ButtonToChessMobile
        onPress={() => {
            navigation.navigate(screenName, {
                screen: planPageName,
                params: {
                    complexId: complexId,
                    planId: planId,
                }
            });
        }}  >
        <ButtonToChessText >
            Шахматка
        </ButtonToChessText>
    </ButtonToChessMobile>

}
export default ComplexButtonToChess; 