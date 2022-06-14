import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const DropBlock = styled.View`
margin: 0px 16px;
margin-bottom: 24px;
margin-top: 11px;
`;
const Drop = styled.Pressable`
width: 100%;
`;
const DropHeader = styled.Pressable`
border-radius: 6px;
border: 1px solid ${C.lightGray};
background-color: white;
width: 100%;
height: 48px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 16px;
`;
const ArrowBlock = styled.View`
margin-right: 3px;
`;
const DropContainer = styled.ScrollView`
width: 100%;
background-color: white;
border: 1px solid ${C.lightGray};
border-top-width: 0px ;
overflow: hidden;
border-radius: 6px;
`;

const OptionText = styled.Text`
font-family: ${F.regular};
color: ${props => props.isHeader === true ? C.sBlack : C.black};
font-size: 17px;
`;

export const style = {
    DropBlock: DropBlock,
    Drop: Drop,
    DropHeader: DropHeader,
    DropContainer: DropContainer,
    OptionText: OptionText,
    ArrowBlock: ArrowBlock,
}