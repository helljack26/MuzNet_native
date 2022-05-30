import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.ScrollView`
    width: 100%;
    padding: 0px 4%;
    padding-top: 50px;
    background-color: white;
    padding-bottom: 100px;
`;
// Header
const Header = styled.View`
    width: 100%;
`;
const HeaderText = styled(M.HeaderH1)`
    margin-bottom: 2px;
`;

// Button
const FavoriteSwithBlock = styled.View`
    border-radius: 5px;
    border: 1px solid black;
    overflow: hidden;
    margin-top: 20px;
    display: flex;
    flex-direction: row; 
    align-content: center;
       width:100%;
`;
const Button = styled.TouchableOpacity`
  display: flex;
  padding: 13px 0px;
  flex-direction: row; 
  justify-content: center;
  align-content: center;
 width:50%;
`;
const ItemButton = styled(Button)`
  background-color: ${(props) => props.isActive === true ? `${C.mainBlack}` : "white"};
`;
const SearchButton = styled(Button)`
  background-color: ${(props) => props.isActive === true ? `${C.mainBlack}` : "white"};
`;
const ButtonTextMobile = styled.Text`
  font-size: 12px;
  font-family: ${F.regular};
  color: ${(props) => props.isActive === true ? "white" : `${C.mainBlack}`};
`;
// Blocks
const FavoriteItemContainer = styled.View`
  margin-top: 30px;
  margin-bottom: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FavoriteSearchContainer = styled.View`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
`;

export const style = {
  Container: Container,
  FavoriteItemContainer: FavoriteItemContainer,
  FavoriteSearchContainer: FavoriteSearchContainer,
  Header: Header,
  HeaderText: HeaderText,
  FavoriteSwithBlock: FavoriteSwithBlock,
  ItemButton: ItemButton,
  SearchButton: SearchButton,
  ButtonTextMobile: ButtonTextMobile,
}