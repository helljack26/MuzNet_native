import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const СatalogItem = styled.View`
border-radius: 5px;
padding-bottom: 5px;
margin-bottom: 16px;
color: ${C.mainBlack};
`;
const AbsoluteStatusNew = styled.View`
position: absolute;
z-index: 990;
top: 11px;
padding: 9px 16px;
background-color: #6abd24;
border-top-left-radius: 0px;
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 0px;
left: 0;
display: flex;
justify-content: center;
align-items: center;
`;
const AbsoluteStatusSale = styled(AbsoluteStatusNew)`
background-color: #d30000;
`;
const AbsoluteStatusText = styled.Text`
font-size: 13px;
font-weight: 100;
line-height: 17px;
font-family: ${F.medium};
color: white;
`;
const CatalogItemImageBlock = styled.TouchableOpacity`
width: 100%;
height: 197px;
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
overflow: hidden;
`;
const CatalogItemImage = styled.Image`
width: 100%;
height: 100%;
`;
const PriceBlock = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 13px;
padding-right: 132px;

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

const DetailsBtnBlock = styled.View`
display: flex;
flex-direction: row;
position: absolute;
top: -5px;
right: 0;
`;
const CatalogItemInfo = styled.View`
display: flex;
flex-direction: column;
margin-top: 10px;
padding-top: 5px;
min-height: 122px;
`;
const CatalogItemInfoBlock = styled.View`
display: flex;
flex-direction: column;
`;
const CatalogItemInfoName = styled.TouchableOpacity`
margin-bottom: 8px;
margin-top: 8px;
`;
const CatalogItemInfoNameText = styled.Text`
font-family: ${F.medium};
font-size: 16px;
color: ${C.mainBlack};
`;
const CatalogItemInfoPlace = styled.Text`
font-family: ${F.light};
font-size: 12px;
margin-bottom: 5px;
`;
const CatalogItemInfoSize = styled(CatalogItemInfoPlace)`
margin-bottom: 0px;
`;
const CatalogItemFooter = styled.View`
border-top-color: ${C.borderGray};
border-top-width: 1px;
margin-top: 8px;
padding-top: 8px;
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 100%;
`;
const CatalogItemFooterBlock = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`;
const CatalogItemFooterBlockItem = styled.View`
display: flex;
flex-wrap: nowrap;
align-items: center;
flex-direction: row;
margin-right: 15px;
`;
const CatalogItemFooterBlockItemText = styled.Text`
font-size: 12px;
font-family: ${F.light};
margin-left: 5px;
margin-top: 2px;
display: flex;
align-items: center;
justify-content: space-between;
`;
const CatalogItemFooterLink = styled.TouchableOpacity`
`;
const CatalogItemFooterLinkText = styled.Text`
color: ${C.mainBlue};
font-family: ${F.medium};
font-size: 12px;
`;

export const styleCatalogItem = {
    СatalogItem: СatalogItem,
    CatalogItemImageBlock: CatalogItemImageBlock,
    AbsoluteStatusNew: AbsoluteStatusNew,
    AbsoluteStatusSale: AbsoluteStatusSale,
    AbsoluteStatusText: AbsoluteStatusText,
    CatalogItemImage: CatalogItemImage,
    DetailsBtnBlock: DetailsBtnBlock,
    PriceBlock: PriceBlock,
    NewPrice: NewPrice,
    OldPrice: OldPrice,
    Price: Price,
    CatalogItemInfo: CatalogItemInfo,
    CatalogItemInfoBlock: CatalogItemInfoBlock,
    CatalogItemInfoName: CatalogItemInfoName,
    CatalogItemInfoNameText: CatalogItemInfoNameText,
    CatalogItemInfoPlace: CatalogItemInfoPlace,
    CatalogItemInfoSize: CatalogItemInfoSize,
    CatalogItemFooter: CatalogItemFooter,
    CatalogItemFooterBlock: CatalogItemFooterBlock,
    CatalogItemFooterBlockItem: CatalogItemFooterBlockItem,
    CatalogItemFooterBlockItemText: CatalogItemFooterBlockItemText,
    CatalogItemFooterLink: CatalogItemFooterLink,
    CatalogItemFooterLinkText: CatalogItemFooterLinkText,
}