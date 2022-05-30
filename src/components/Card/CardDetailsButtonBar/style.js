import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'


const Card_details = styled.View`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 24px;
`;
const FavoriteView = styled.View`
display: flex;
flex-direction: row;

align-items: center;
`;
const FavoriteView_block = styled.View`
font-size: 14px;
font-family: ${F.light};
display: flex;
align-items: center;
flex-direction: row;
margin-right: 16px;
margin-bottom: 13px;
`
const FavoriteView_block_text = styled.Text`
margin-left: 8px;
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 14px;
`
const Details_mobile = styled.View`
display: flex;
flex-direction: row;
margin-top: -8px;
`;

export const styles = {
    Card_details: Card_details,
    FavoriteView: FavoriteView,
    FavoriteView_block: FavoriteView_block,
    Details_mobile: Details_mobile,
    FavoriteView_block_text: FavoriteView_block_text,
}