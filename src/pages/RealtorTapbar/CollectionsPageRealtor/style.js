import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'

const Container = styled.ScrollView`
width: 100%;
padding: 0px 4%;
padding-top: 50px;
background-color: white ;
padding-bottom: 100px;
`;
const AdsHeader = styled.View`
width: 100%;
`;
const AdsHeaderText = styled.Text`
margin-bottom: 2px;
color: ${C.mainBlack};
font-family: ${F.medium};
font-size: 20px;
`;
const CollectionsEmptyText = styled.Text`
font-size: 24px;
margin-top: 25px;
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
color: ${C.mainBlack};
`;
const AdsQueryNumber = styled.Text`
color: ${C.secondBlack};
font-family: ${F.light};
font-size: 12px;
`;
const CollectionsContainer = styled.View`
display: flex;
flex-direction: column;
margin-top: 23px;
`;

export const style = {
    Container: Container,
    AdsHeader: AdsHeader,
    AdsHeaderText: AdsHeaderText,
    CollectionsEmptyText: CollectionsEmptyText,
    AdsQueryNumber: AdsQueryNumber,
    CollectionsContainer: CollectionsContainer,
}