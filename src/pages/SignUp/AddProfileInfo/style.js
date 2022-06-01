
import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.View`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
padding: 0px 20px;
padding-top: 60px;
`;
const Header = styled.View`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 24px;
`;

const StepBackButton = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
position: absolute;
padding-left: 5px;
padding-right: 10px;
padding-top: 10px;
padding-bottom: 10px;
top: -5px;
left: 0px;
`;
const TabNumberIndication = styled.View`
display: flex;
align-items: center;
flex-direction: row;
`;
const TabNumberText = styled(M.MediumText17)`
color: ${props => props.isActive === true ? C.black : C.gray};
`;
const ProgressBar = styled.View`
width: 100%;
height:5px;
display: flex;
align-items: center;
flex-direction: row;
border-radius: 5px;
background-color: ${C.lightGray};
margin-top: 18px;
margin-bottom: 32px;
`;
const ProgressBarLine = styled.View`
width: ${props => props.progressWidth !== undefined && props.progressWidth + '%'};
height: 5px;
border-radius: 5px;
background-color: ${C.black};
`;
const ContainerTitle = styled(M.Title24)`
`;
const ContainerDescription = styled(M.MediumText17)`
color: ${C.sBlack};
margin-top: 8px;

`;
const Content = styled.View`
width: 100%;

`;
const FormInputBlock = styled(M.FormInputBlock)`

`;
const FormInputContainer = styled.View`

`;
const FormInputLabel = styled(M.FormInputLabel)`

`;
const FormInput = styled(M.FormInput)`

`;
const ButtonSubmit = styled(M.BlackBtn)`

`;

const ButtonSubmitText = styled(M.BlackBtnText)`

`;

const ContentBlock = styled.View`
display: flex;
width: 100%;
align-items: center;
flex-direction: column;

position: absolute;
bottom : ${props => props.isKeyboardOpen === true ? 20 + 'px' : 50 + 'px'};
`;
const ContentBlockRow = styled.View`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: row;
margin-top: 16px;

`;
const ContainerText = styled(M.PlainText17)`
color: ${C.sBlack};
display: flex;
align-items: center;
flex-direction: row;
padding-right: 5px;
`;
const ContainerLink = styled.TouchableOpacity`

`;
const ContainerLinkText = styled(M.BorderBtnText)`
    font-family: ${F.bold};

`;
export const style = {
    Container: Container,
    Header: Header,
    StepBackButton: StepBackButton,
    TabNumberIndication: TabNumberIndication,
    TabNumberText: TabNumberText,
    ProgressBar: ProgressBar,
    ProgressBarLine: ProgressBarLine,
    ContainerTitle: ContainerTitle,
    ContainerDescription: ContainerDescription,
    // Form
    Content: Content,
    FormInputBlock: FormInputBlock,
    FormInputContainer: FormInputContainer,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,

    // Submit
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    ContentBlock: ContentBlock,
    ContentBlockRow: ContentBlockRow,
    ContainerText: ContainerText,
    ContainerLink: ContainerLink,
    ContainerLinkText: ContainerLinkText,
}