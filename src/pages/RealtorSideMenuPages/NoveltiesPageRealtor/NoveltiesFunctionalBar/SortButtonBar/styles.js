import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
margin: 0px 4%;
width: 92%;
background-color: white;
padding-top: 12px;
`;
const SortButton = styled.TouchableOpacity`
border-radius: 5px;
width: 100%;
border: 1px solid ${C.mainBlack};
padding: 12px 30px;
margin-bottom: 12px;
font-size: 13px;
font-family: ${F.light};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
const Title = styled.Text`
color: ${C.mainBlack};
font-size: 14px;
`;
const SortValueBox = styled.View`
margin-right: 15px;
margin-left: 10px;
`;
const SortValueText = styled.Text`
color: ${C.mainBlack};
font-size: 14px;
padding-left: 8px;
padding-right: 15px;
font-family: ${F.medium};
`
export const styles = {
    Container: Container,
    SortButton: SortButton,
    Title: Title,
    SortValueBox: SortValueBox,
    SortValueText: SortValueText,
}