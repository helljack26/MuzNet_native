import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.View`
width: 100%;
margin-top: 20px;
margin-bottom: 30px;
`;
const ContainerBlock = styled.View`
width: 100%;
display: flex;
flex-direction: column;

`;

const ContainerHeader = styled.View`
width: 100%;
display: flex;
justify-content: space-between;
`;
const ContainerHeaderBlock = styled.View`

`;
const HeaderText = styled(M.HeaderH1)`
margin-bottom: 5px;
font-size: 22px;
`;
const HeaderSubText = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 13px;
`;
const Drop = styled.View`
position: absolute;
display: flex;
flex-direction: column;
align-items: flex-end;
top: 0px;
right: 0px;
z-index: 999;
`;
const DropContainer = styled.View`
top: 0px;
margin-right: 10%;
margin-top: 10px;
background-color: white;
padding: 16px;
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
z-index: 999;
width:100%;
`;
const FormInputBlock = styled.View`
display: flex;
flex-direction: column;
width: 100%;
`;
const FormInputLabel = styled.Text`
font-family: ${F.light};
margin-bottom: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 13px;
`;
const FormInput = styled.TextInput`
padding-left: 10px;
padding-right: 10px;
width: 100%;
background-color: white;
font-family: ${F.light};
color: ${C.mainBlack};
border-width: 1.5px;
border-style: solid;
border-radius: 4px;
height:45px;
font-size: 16px;
`;
const ButtonSubmit = styled(M.ButtonBlue)`
width: 100%;
`;
const ButtonSubmitText = styled(M.ButtonBlueText)`

`;
const ErrorMessage = styled(M.ErrorMessage)`

`;
const LinkToAddNewObject = styled.TouchableOpacity`
width: 50px;
height: 50px;
border-radius: 25px;
background-color: ${C.mainBlue};
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const EmployeeItem = styled.View`
width: 100%;
margin-top: 25px;

display: flex;
justify-content: center;
flex-direction: row;
align-items: flex-start;
padding: 15px;
border-radius: 8px;
border-color: ${C.borderGray};
border-width: 1px;
`;
const EmployeeItemBlock = styled.View`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
text-align: center;
`;
const EmployeeInfoContainer = styled.View`
width: 100%;
display: flex;
align-items: center;
`;
const EmployeeImage = styled.View`
overflow: hidden;
border-color: ${C.borderGray};
border-width: 1px;
border-radius: 75px;
margin-bottom: 15px;
`;
const EmployeeInfoBlock = styled.View`
display: flex;
flex-direction: column;
align-items: center;
`;
const EmployeeInfoName = styled.Text`
color: ${C.mainBlack};
margin-bottom: 4px;
font-family: ${F.medium};
font-size: 19px;   
`;
const EmployeeInfoPosition = styled.Text`
font-size: 14px;
font-family: ${F.light};
color: ${C.mainBlack};
`;
const EmployeeText = styled.Text`
font-size: 18px;
font-family: ${F.light};
color: ${C.mainBlack};
margin-top: 14px;
`;

const ButtonContainer = styled.View`
position: absolute;
top: 0px;
right: 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const ButtonContainedAbsolute = styled.View`
width: 30px;
height: 30px;
`;
const Button = styled.TouchableOpacity`
position: absolute;
top: 0px;
bottom: 0px;
right: 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width : 40px;
height: 40px;
padding-top: 10px;
padding-right: 10px;
`;

export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    ContainerHeader: ContainerHeader,
    ContainerHeaderBlock: ContainerHeaderBlock,
    HeaderSubText: HeaderSubText,
    HeaderText: HeaderText,
    Drop: Drop,
    DropContainer: DropContainer,
    FormInputBlock: FormInputBlock,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ErrorMessage: ErrorMessage,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    LinkToAddNewObject: LinkToAddNewObject,
    EmployeeItem: EmployeeItem,
    EmployeeItemBlock: EmployeeItemBlock,
    EmployeeImage: EmployeeImage,
    EmployeeInfoName: EmployeeInfoName,
    EmployeeInfoPosition: EmployeeInfoPosition,
    EmployeeText: EmployeeText,
    EmployeeInfoBlock: EmployeeInfoBlock,
    EmployeeInfoContainer: EmployeeInfoContainer,
    Button: Button,
    ButtonContainedAbsolute: ButtonContainedAbsolute,
    ButtonContainer: ButtonContainer,
}