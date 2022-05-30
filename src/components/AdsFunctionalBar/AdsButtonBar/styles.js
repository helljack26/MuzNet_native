import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin: 0px 4%;
width: 92%;
background-color: white;
padding-top: 12px;
`;
const SortButton = styled.TouchableOpacity`
border-radius: 5px;
width: 79%;
border: 1px solid ${C.mainBlack};
padding: 12px 30px;
font-size: 13px;
font-family: ${F.light};
display: flex;
justify-content: center;
align-items: center;
`;
const FavoriteButton = styled.TouchableOpacity`
border-radius: 5px;
border: 1px solid ${C.mainBlack};
padding: 14px 0px;
width: 17%;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
`;
const Title = styled.Text`
color: ${C.mainBlack};
font-size: 13px;
`;
const SortValue = styled.Text`
color: ${C.mainBlack};
font-size: 14px;
font-family: ${F.medium};
margin-right: 20px;
`;

export const styles = {
    Container: Container,
    SortButton: SortButton,
    FavoriteButton: FavoriteButton,
    Title: Title,
    SortValue: SortValue,
}