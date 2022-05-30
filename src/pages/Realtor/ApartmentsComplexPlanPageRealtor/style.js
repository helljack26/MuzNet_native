import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Main = styled.ScrollView`
width: 100%;
height: 100%;
background-color: white;
padding: 0px 4%;
padding-top: 15px;
`;
const PlanHeader = styled.View`
width: 100%;
`;

const PlanHeaderBackButtonMobile = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
`;
const PlanHeaderBackButtonMobileText = styled.Text`
margin-left: 8px;
font-family: ${F.light};
font-size: 12px;
color: ${C.mainBlack};
margin-top: 2px;
`
const PlanHeaderNameBlock = styled.View`
display: flex;
align-items: center;
margin-bottom: 7px;
flex-direction: row;
`;
const PlanHeaderName = styled.Text`
font-weight: 100;
margin-right: 10px;
line-height: 30px;
font-family: ${F.medium};
color: ${C.mainBlack};
font-size: 19px;
`;
const PlanHeaderChess = styled(PlanHeaderName)`
font-family: ${F.regular};
color: ${C.mainBlack};
font-size: 18px;
margin-top: 22px;
`;
const PlanHeaderComplex = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 13px;

`;
const Label = styled.View`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
padding: 4px 8px;
border-radius: 20px;
`
const DoneLabel = styled(Label)`
background-color: ${C.green};
`
const ExpiryDateLabel = styled(Label)`
background-color: ${C.orange};
`
const LabelText = styled.Text`
color: white;
font-size: 10px;
font-family: ${F.regular};
padding: 0px;
`
const PlanChessContainer = styled.View`
display: flex;
flex-direction: row;
width: 100%;
`
const ContainerBlockBorder = styled.Text`
    margin-top: 32px;
    margin-bottom: 74px;
    width: 2px;
    display: flex;
    background-color: ${C.borderGray};
`;
export const style = {
    Main: Main,
    PlanHeader: PlanHeader,
    PlanHeaderNameBlock: PlanHeaderNameBlock,
    PlanHeaderChess: PlanHeaderChess,
    PlanHeaderName: PlanHeaderName,
    PlanHeaderComplex: PlanHeaderComplex,
    DoneLabel: DoneLabel,
    LabelText: LabelText,
    ExpiryDateLabel: ExpiryDateLabel,
    PlanHeaderBackButtonMobile: PlanHeaderBackButtonMobile,
    PlanHeaderBackButtonMobileText: PlanHeaderBackButtonMobileText,
    ContainerBlockBorder: ContainerBlockBorder,
    PlanChessContainer: PlanChessContainer,
}