import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'

const ItemContainer = styled.View`
display: flex;
flex-direction: column;
width: 100%;
border-color: ${C.borderGray};
border-width: 1px;
border-radius: 8px;
padding: 14px 14px;
margin-bottom: 20px;
`;
const ItemContainerBlock = styled.View`
display: flex;
width: 100%;
flex-direction: column;
margin-bottom: -14px;
`;
const ItemColImageBlock = styled.TouchableOpacity`
width: 100%;
height: 170px;
overflow: hidden;
border-radius: 8px;
margin-bottom: 10px;
border-color: ${C.borderGray};
border-width: 1px;
border-style: solid;
`;
const ItemContainerItemCol = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
border-bottom-color: ${C.borderGray};
border-bottom-width: 1px;
flex-direction: column;
width:100%;
`;
const ItemColInfoBlock = styled.View`
width: 100%;
display: flex;
flex-direction: column;
`;
const PriceBlock = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;
const Price = styled.Text`
font-family: ${F.medium};
font-size: 14px;
`;
const NewPrice = styled(Price)`
margin-right: 13px;
color: ${C.mainBlue};
`;
const OldPrice = styled(Price)`
text-decoration: line-through;
`;
const CatalogItemInfoName = styled.TouchableOpacity`
margin-bottom: 8px;
margin-top: 8px;
`;
const CatalogItemInfoNameText = styled.Text`
font-size: 15px;
font-family: ${F.medium};
color: ${C.mainBlack};
`;
const CatalogItemInfoPlace = styled.Text`
font-size: 12px;
font-family: ${F.light};
margin-bottom: 5px;
`;
const CatalogItemInfoSize = styled(CatalogItemInfoPlace)`
margin-bottom: 0px;
`;
const ItemColRightBlock = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
margin-bottom: 14px;
`;
const ItemColRightBlockButtons = styled.View`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;
const MessageButton = styled.TouchableOpacity`
height: 42px;
border-color: ${props => props.isActive ? C.mainBlue : 'gray'};
border-width: 1px;
border-style: solid;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
width: 100%;
`;
const MessageButtonText = styled.Text`
font-size: 13px;
font-family: ${F.light};
color: ${props => props.isActive ? C.mainBlue : C.secondBlack};
`;
const ItemContainerFooter = styled.View`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
margin-top: 14px;
`;
const ItemContainerFooterButtons = styled.View`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
`;
const FooterButton = styled.TouchableOpacity`
height: 42px;
width: 100%;
padding: 0px 20px;
margin-top: 14px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
border-color: black;
border-radius: 4px;
border-width: ${props => !props.isActive ? 1 + 'px' : 0 + 'px'};
background-color: ${props => props.isActive ? C.mainBlue : 'white'};
`;
const FooterButtonText = styled.Text`
font-family: ${props => props.isActive ? F.medium : F.regular};
color: ${props => props.isActive ? 'white' : C.mainBlack};
font-size: 15px;
margin-left: 15px;
`;

export const style = {
    ItemContainer: ItemContainer,
    ItemContainerBlock: ItemContainerBlock,
    ItemContainerItemCol: ItemContainerItemCol,
    ItemColImageBlock: ItemColImageBlock,
    ItemColInfoBlock: ItemColInfoBlock,
    PriceBlock: PriceBlock,
    NewPrice: NewPrice,
    OldPrice: OldPrice,
    Price: Price,
    CatalogItemInfoName: CatalogItemInfoName,
    CatalogItemInfoNameText: CatalogItemInfoNameText,
    CatalogItemInfoPlace: CatalogItemInfoPlace,
    CatalogItemInfoSize: CatalogItemInfoSize,
    ItemColRightBlock: ItemColRightBlock,
    ItemColRightBlockButtons: ItemColRightBlockButtons,
    MessageButton: MessageButton,
    MessageButtonText: MessageButtonText,
    ItemContainerFooter: ItemContainerFooter,
    ItemContainerFooterButtons: ItemContainerFooterButtons,
    FooterButton: FooterButton,
    FooterButtonText: FooterButtonText,
}