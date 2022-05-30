import styled from 'styled-components/native';

import ICONSIZE from '@/res/sizes'
import C from '@/res/colors'

const ButtonLarge = styled.TouchableOpacity`
background-color: white;
width: ${ICONSIZE.buttonLarge}px;
height: ${ICONSIZE.buttonLarge}px;
border: 1px solid ${C.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
`
const ButtonSmall = styled.TouchableOpacity`
background-color: white;
padding: 10px;
width: ${ICONSIZE.buttonSmRecommendation}px;
height: ${ICONSIZE.buttonSmRecommendation}px;
border: 1px solid ${C.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
margin-bottom: 8px;
`
export const styleRecommendationButton = {
    ButtonLarge: ButtonLarge,
    ButtonSmall: ButtonSmall,
}