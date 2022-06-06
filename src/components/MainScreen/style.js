
import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Content = styled.View`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: white;
`;
const ContentTitle = styled(M.Title28)`
margin-top: 17%;
margin-bottom: 32px;
width: 100%;
`;
const FormBlock = styled.View`
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
const ShowPasswordIconButton = styled(M.ShowPasswordIconButton)`

`;

const ErrorMessage = styled(M.ErrorMessage)`

`;

export const style = {
    Content: Content,
    ContentTitle: ContentTitle,
    //:// Form
    FormBlock: FormBlock,
    FormInputBlock: FormInputBlock,
    FormInputContainer: FormInputContainer,
    FormInputLabel: FormInputLabel,
    FormInput: FormInput,
    ShowPasswordIconButton: ShowPasswordIconButton,
    ErrorMessage: ErrorMessage,
}

