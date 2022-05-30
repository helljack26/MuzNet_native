import styled from 'styled-components/native';

import C from '@/res/colors'
import F from '@/res/fonts'

const SearchItem = styled.View`
width: 100%;
display: flex;
flex-direction: column;
padding: 0px 16px;
padding-top: 20px;
padding-bottom: 13px;

border: 1px solid ${C.borderDarkGray};
margin-bottom: 24px;
border-radius: 8px;
`;
const FilterBlock = styled.View`
width:100%;
display: flex;
flex-direction: column;
margin-bottom: 16px;
border-bottom-width: 1px;
border-bottom-color:${C.borderDarkGray};
`;
const FilterItem = styled.View`
display: flex;
flex-direction: row;
margin-bottom: 16px;

align-content: center;
`;
const FilterHeader = styled.Text`
font-size: 14px;
  font-family: ${F.light};
  color:${C.secondBlack};
  margin-right: 8px;
`;
const FilterValue = styled.Text`
font-size: 14px;
  font-family: ${F.light};
  color:${C.mainBlack};
`;
const SearchButtons = styled.View`
display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  width:100%;
`;
const ReceiveEmail = styled.TouchableOpacity`
  display: flex;
flex-direction: row;
  align-items: center;
    margin-bottom: 16px;
    width:100%;
  justify-content: flex-start;

`;
const ReceiveEmailCheckboxImg = styled.View`
  height: 29px;
  width: 29px;
  border: 1px solid ${C.borderDarkGray};
  border-radius: 4px;
margin-right: 10px;
`;
const ReceiveEmailText = styled.Text`
font-size: 13px;
color: ${C.mainBlack};
font-family: ${F.regular};
`;
const SearchButtonsRight = styled.View`
display: flex;
flex-direction: row;
align-content: center;
width:100%;
justify-content: space-between;
`;
const RemoveSearch = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
`;
const RemoveSearchText = styled.Text`
margin-left: 13px;
font-family: ${F.medium};
color: ${C.mainBlack};
`;
const ShowResults = styled.TouchableOpacity`
border-radius: 4px;
align-self: center;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 16px 25px;
background-color: ${C.mainBlue};
width: 50%;
`;
const ShowResultsTextMobile = styled.Text`
font-size: 13px;
color:white;
font-family: ${F.medium};
font-size: 14px;
`;

export const style = {
  SearchItem: SearchItem,
  FilterBlock: FilterBlock,
  FilterItem: FilterItem,
  FilterHeader: FilterHeader,
  FilterValue: FilterValue,
  SearchButtons: SearchButtons,
  ReceiveEmail: ReceiveEmail,
  ReceiveEmailCheckboxImg: ReceiveEmailCheckboxImg,
  ReceiveEmailText: ReceiveEmailText,
  SearchButtonsRight: SearchButtonsRight,
  RemoveSearch: RemoveSearch,
  RemoveSearchText: RemoveSearchText,
  ShowResults: ShowResults,
  ShowResultsTextMobile: ShowResultsTextMobile,
}