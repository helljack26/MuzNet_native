import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'


const СatalogItem = styled.View`
width: 48%;
border-radius: 5px;
padding-bottom: 5px;
margin-bottom: 16px;
color: ${C.mainBlack};
`;
const AbsoluteStatusNew = styled.View`
z-index: 990;
position: absolute;
top: 7px;
left: 0;
background-color: #6abd24;
border-top-left-radius: 0px;
border-top-right-radius: 6px;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 0px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 10px;
`;
const AbsoluteStatusSale = styled(AbsoluteStatusNew)`
background-color: #d30000;
`;
const AbsoluteStatusText = styled.Text`
letter-spacing: 0.2px;
line-height: 17px;
font-weight: 100;
font-family: ${F.medium};
color: white;
font-size: 9.5px;
`;
const CatalogItemImageBlock = styled.TouchableOpacity`
width: 100%;
height: 100px;
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
`;
const Price = styled.Text`
font-family: ${F.medium};
font-size: 12px;
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
flex-direction: column;
position: absolute;
top: 0;
right: 0;
`;
const CatalogItemInfo = styled.View`
display: flex;
flex-direction: column;
margin-top: 10px;
`;
const CatalogItemInfoBlock = styled.View`
display: flex;
flex-direction: column;
padding-right: 30px;
min-height: ${props => props.isRealtorHeight};
`;
const CatalogItemInfoName = styled.TouchableOpacity`
margin-bottom: 8px;
margin-top: 8px;
`;
const CatalogItemInfoNameText = styled.Text`
font-size: 13px;
font-family: ${F.medium};
color: ${C.mainBlack};
`;
const CatalogItemInfoPlace = styled.Text`
font-family: ${F.light};
margin-bottom: 10px;
margin-bottom: 5px;
font-size: 10px;

`;
const CatalogItemInfoSize = styled(CatalogItemInfoPlace)`
margin-bottom: 0px;
`;
const CatalogItemFooter = styled.View`
margin-top: 8px;
padding-top: 8px;
border-top-color: ${C.borderGray};
border-top-width: 1px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const CatalogItemFooterBlock = styled.View`
display: flex;
align-items: center;
flex-direction: row;
`;
const CatalogItemFooterBlockItem = styled.View`
display: flex;
flex-wrap: nowrap;
align-items: center;
flex-direction: row;
`;
const CatalogItemFooterBlockItemText = styled.Text`
font-family: ${F.light};
margin-top: 2px;
font-size: 10px;
margin-left: 5px;
margin-right: 5px;
`;
const CatalogItemFooterLink = styled.TouchableOpacity`

`;
const CatalogItemFooterLinkText = styled.Text`
color: ${C.mainBlue};
font-family: ${F.medium};
font-size: 10px;
`;

export const styleRecommendationItem = {
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