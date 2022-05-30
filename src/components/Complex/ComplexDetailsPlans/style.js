import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
const Plans = styled.View`
width: 100%;
border-bottom-color: ${C.borderGray};
border-bottom-width: 1px;
`;
const Block_header = styled.TouchableOpacity`
font-size: 20px;
border-top-color: ${C.borderGray};
border-top-width: 1px;
background-color: white;
padding-top: 16px;  
padding-bottom: 16px;
padding-right: 7px;
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Block_header_Text = styled.Text`
font-family: ${F.medium};
font-size: 20px;
`;
const About_block = styled.View`
display: flex;
background-color: white;
`;
const About_block_ul = styled.View`
font-family: ${F.light};
margin-bottom: 10px;
`;

const PartsBlock = styled.View`
  display: flex;
flex-direction: column;
width: 100%;
  padding-bottom: 12px;
`
const BlockItemInfo = styled.View`
width:90%;
`
const BlockItem = styled.View`
border: 1px solid ${C.borderGray};
padding: 14px;
margin-bottom: 12px;
padding-right: 10px;
position: relative;
border-radius: 4px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
min-height: 135px;
`
const BlockItemCol = styled.View`
display: flex;
justify-content: space-between;
flex-direction: column;
`
const BlockItemName = styled.Text`
font-family: ${F.medium};
color: ${C.mainBlack};
font-size: 17px;
`
const BlockItemDescription = styled.Text`
font-family: ${F.light};
color: ${C.secondBlack};
font-size: 13px;
margin-bottom: 10px;
`
const BlockItemLink = styled.TouchableOpacity`
`
const BlockItemLinkText = styled.Text`
color: ${C.mainBlue};
font-size: 13px;
font-family: ${F.medium};
`
const Label = styled.View`
display: flex;
align-items: center;
justify-content: center;
padding: 4px 8px;
border-radius: 20px;
position: absolute;
top: 0px;
right: 0px;
`
const DoneLabel = styled(Label)`
background-color: ${C.green};
margin-left: 10px;
`
const ExpiryDateLabel = styled(Label)`
background-color: ${C.orange};
margin-left: 10px;
`
const LabelText = styled.Text`
color: white;
font-size: 10px;
font-family: ${F.regular};
padding: 0;
`

export const styles = {
  Plans: Plans,
  Block_header: Block_header,
  Block_header_Text: Block_header_Text,
  About_block: About_block,
  About_block_ul: About_block_ul,
  PartsBlock: PartsBlock,
  BlockItem: BlockItem,
  BlockItemCol: BlockItemCol,
  BlockItemInfo: BlockItemInfo,
  BlockItemName: BlockItemName,
  BlockItemDescription: BlockItemDescription,
  BlockItemLink: BlockItemLink,
  BlockItemLinkText: BlockItemLinkText,
  DoneLabel: DoneLabel,
  LabelText: LabelText,
  ExpiryDateLabel: ExpiryDateLabel,
}