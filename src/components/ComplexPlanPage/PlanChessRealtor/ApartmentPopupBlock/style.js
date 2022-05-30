import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Popup = styled.View`
/* width: ${props => props.scrollWidth !== undefined ? props.scrollWidth - 8 + 'px' : 0}; */
/* height: ${props => props.scrollHeight !== undefined ? props.scrollHeight - 8 + 'px' : 0}; */
width: 100%;
height: 100%;
background-color: rgba(236, 236, 236, 0.353);
border-radius: 8px;
margin-top: 40px;
margin-bottom: 25px;
padding-top: 14px;
/* padding-left: 800px; */
padding-left: ${props => props.clientX !== undefined ? props.clientX + 'px' : 0};
 position: absolute;
 top: 0;
 left: 50px;
z-index: 998;
`;
const PopupContainer = styled.View`
`
const PopupBlock = styled.View`
width: 270px;
min-height: 330px;
/* background-color: white; */
border-radius: 8px;
/* border: 1px solid ${C.borderGray}; */
display: flex;
flex-direction:column;
align-items: center;
padding: 12px 16px;
z-index: 998;


`;
const PopupHeader = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const PopupHeaderNumber = styled.Text`
color: ${C.mainBlack};
font-family: ${F.regular};
font-size: 17px;
`;
const PopupHeaderClose = styled.TouchableOpacity`
padding: 12px 16px;
position: absolute;
top: 0;
right: 0;

`;
const PopupImageBlock = styled.View`
width: 100%;
height: 152px;
overflow: hidden;
border-radius: 8px;
border: 1px solid ${C.borderGray};
margin-top: 12px;
`;
const PopupDetails = styled.View`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
/* padding-right: 30px; */
`;
const PopupDetailsCol = styled.View`
display: flex;
margin-top: 13px;
flex-direction: column;
`;
const PopupDetailsPrice = styled.Text`
    color: ${C.mainBlack};
    font-family: ${F.medium};
    font-size: 15px;
`;
const PopupDetailsName = styled.Text`
margin-top: 11px ;
color: ${C.mainBlack};
font-family: ${F.medium};
font-size: 17px;
margin-bottom: 8px ;
`;
const PopupDetailsArea = styled.Text`
    color: ${C.mainBlack};
    font-family: ${F.light};
    font-size: 12px;
`;
const PopupDetailsButtons = styled.View`
position: absolute;
top: -7px;
right: 0;
display: flex;
flex-direction: row;
`;
const PopupFooter = styled.View`
margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const PopupFooterBlock = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PopupFooterInfo = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const PopupFooterInfoText = styled.Text`
font-size: 12px;
margin-right: 15px;
margin-left: 10px;
margin-top: 2px;
font-family: ${F.light};
color: ${C.mainBlack};
`;
const PopupFooterLink = styled.TouchableOpacity`

`;
const PopupFooterLinkText = styled.Text`
font-size: 13.3px;
color: ${C.mainBlue};
font-family: ${F.medium};
`;

export const style = {
  Popup: Popup,
  PopupContainer: PopupContainer,
  PopupBlock: PopupBlock,
  PopupHeader: PopupHeader,
  PopupHeaderNumber: PopupHeaderNumber,
  PopupHeaderClose: PopupHeaderClose,
  PopupImageBlock: PopupImageBlock,
  PopupDetails: PopupDetails,
  PopupDetailsCol: PopupDetailsCol,
  PopupDetailsPrice: PopupDetailsPrice,
  PopupDetailsName: PopupDetailsName,
  PopupDetailsArea: PopupDetailsArea,
  PopupDetailsButtons: PopupDetailsButtons,
  PopupFooter: PopupFooter,
  PopupFooterBlock: PopupFooterBlock,
  PopupFooterInfo: PopupFooterInfo,
  PopupFooterInfoText: PopupFooterInfoText,
  PopupFooterLink: PopupFooterLink,
  PopupFooterLinkText: PopupFooterLinkText,
}