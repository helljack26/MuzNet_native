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
margin-left: 10px;
`
const ButtonSmall = styled.TouchableOpacity`
background-color: white;
padding: 5px;
width: ${ICONSIZE.buttonSmall}px;
height: ${ICONSIZE.buttonSmall}px;
border: 1px solid ${C.mainBlack};
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
margin-bottom: 8px;
`
export const styleCatalogButton = {
    ButtonLarge: ButtonLarge,
    ButtonSmall: ButtonSmall,
}