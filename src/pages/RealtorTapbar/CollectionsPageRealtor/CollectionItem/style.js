import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const CollectionItemBlock = styled.View`
  width: 100%;
  margin-bottom: 14px;
  background-color: ${C.backgroundGray};
  border-color: ${C.borderGray};
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  padding: 9px;
  padding-right: 15px;
`;
const CollectionItemBlockCol = styled.View`
display: flex;
flex-direction: row;
height: 100%;
`;
const CollectionItemImageBlock = styled.TouchableOpacity`
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
overflow: hidden;
display: flex;
flex-direction: row;
height:100%;
width: 130px;
`;
const CollectionItemImage = styled.Image`
width: 100%;
height: 100%;
`;
const CollectionItemInfo = styled.View`
display: flex;
flex-direction: column;
margin-left: 10px;
width: 50%;
`;
const CollectionItemTitle = styled.Text`
    color: ${C.mainBlack};
    font-family: ${F.medium};
    font-size: 14px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `;
const CollectionItemInput = styled.TextInput`
    background-color: white;
    color: ${C.mainBlack};
    font-family: ${F.medium};
    margin-bottom: 8px;
    border-radius: 8px;
    border-color: ${C.borderGray};
    border-width: 1px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 5px 0px;
    padding-left: 5px;
    margin-left: -5px;
    margin-right: -5px;
    font-size: 14px;
`;
const CollectionItemNumber = styled.Text`
    color: ${C.mainBlack};
    font-family: ${F.light};
    font-size: 12px;
`;
const CollectionItemBlockButtons = styled.View`
    display: flex;
    flex-direction: column;
`;

const Button = styled.TouchableOpacity`
width : 25px;
height: 27px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;


export const style = {
    CollectionItemBlock: CollectionItemBlock,
    CollectionItemBlockCol: CollectionItemBlockCol,
    CollectionItemBlockButtons: CollectionItemBlockButtons,
    CollectionItemImage: CollectionItemImage,
    CollectionItemImageBlock: CollectionItemImageBlock,
    CollectionItemInfo: CollectionItemInfo,
    CollectionItemTitle: CollectionItemTitle,
    CollectionItemInput: CollectionItemInput,
    CollectionItemNumber: CollectionItemNumber,
    Button: Button,
}