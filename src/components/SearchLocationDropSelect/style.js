
import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.ScrollView`

`;
const DropContainer = styled.ScrollView`
margin: 0px 16px;
position: absolute;
top: 48px;
left: 0px;
z-index: 999;
border: 1px solid ${C.lightGray};
border-top-width: 1px ;
border-radius: 6px;
`;
const ChosenBlock = styled.View`
width: 100%;
padding-top: 8px;
background-color: white;
overflow: hidden;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
overflow: hidden;

`;
const Item = styled.TouchableOpacity`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px 16px;
`;
const ItemText = styled(M.PlainText15)`
width: 100%;
`;
const RemoveChosenItem = styled.TouchableOpacity`
width: 24px;
height: 24px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;


export const style = {
    Container: Container,
    DropContainer: DropContainer,
    ChosenBlock: ChosenBlock,
    Item: Item,
    ItemText: ItemText,
    RemoveChosenItem: RemoveChosenItem,
}