import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Content = styled.View`
display: flex;
flex-direction: column;
align-items: center;
padding-bottom: 20px;
background-color: ${C.sBlack};
`;


export const style = {
    Content: Content,

}

