import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const CardContainer = styled.View`
background-color: ${C.lightGray};
border-top-left-radius: 16px;
border-top-right-radius: 16px;
overflow: hidden;
`;

const Header = styled.View`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
border-bottom-color: ${C.lightGray};
border-bottom-width: 1px;
`;
const HeaderClose = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 32px;
height: 32px;
position: absolute;
top: -3px;
right:16px;
bottom: 0px;
`;
const ContentBlock = styled.View`
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: row;
margin-top: 16px;
margin-top: 16px;
padding: 0px 10px;
padding-top: 7px;
width: 100%;
height : 126px;
position: absolute;
left:0;
bottom:0;
background-color: ${C.white};
border-color: ${C.lightGray};
border-width: 1px;
`;
const ContentBlockRow = styled.View`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
`;

const ButtonSubmit = styled(M.BlackBtn)`
width: 60%;
`;

const ButtonSubmitText = styled(M.BlackBtnText)`

`;
const ContainerPerHour = styled.View`
width: 40%;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: row;
margin-left: -10px;
`;
const PricePerHourValue = styled(M.Title24)`
margin-bottom: -3px;
`;
const PricePerHourText = styled(M.PlainText17)`

`;
export const style = {
    CardContainer: CardContainer,
    Header: Header,
    HeaderClose: HeaderClose,
    ContentBlock: ContentBlock,
    ContentBlockRow: ContentBlockRow,
    ContainerPerHour: ContainerPerHour,
    PricePerHourValue: PricePerHourValue,
    PricePerHourText: PricePerHourText,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
}
