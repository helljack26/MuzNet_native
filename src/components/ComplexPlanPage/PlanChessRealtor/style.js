import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
    width: 99.8%;
    margin-top: 32px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
`;

const ContainerBlock = styled.ScrollView`
    display: flex;
    flex-direction: row;
    width: 99%;
    margin-left: 8px;
    margin-right:35px;
    padding-bottom:25px;
`;

const FloorColumn = styled.View`
border-right-color: ${C.borderGray};
border-right-width: 1px;
padding-right: 8px;
margin-bottom: 42px;
`
const Item = styled.View`
border-radius:8px;
border: 1px solid ${C.borderGray};
width: 32px;
background-color : ${C.backgroundGray};
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 8px;
`
const FloorColumnHeader = styled(Item)`
    height: 32px;
`;
const FloorItems = styled(Item)`
    height: 40px;

`;
const FloorItemsNumber = styled.Text`
    color: ${C.secondBlack};
    font-family: ${F.medium};
    font-size: 13px;
`;

export const style = {
    Container: Container,
    FloorItems: FloorItems,
    FloorItemsNumber: FloorItemsNumber,
    FloorColumn: FloorColumn,
    FloorColumnHeader: FloorColumnHeader,
    ContainerBlock: ContainerBlock,
}