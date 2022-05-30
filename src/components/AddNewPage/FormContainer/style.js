import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Form = styled.View`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 18px;
margin-bottom: 60px;
z-index: 0;
`;
const FormRowDetailsContainer = styled.View`
width: 100%;
display: flex;
flex-direction: column;
padding-bottom: 4px;
`;

const FormRow = styled.View`
width: 100%;
display: flex;
flex-direction: column;
`;
const BorderLine = styled.View`
width: 100%;
display: flex;
height: 1px;
background-color: ${C.borderGray};
margin-bottom: 20px;
`;
const FormRowName = styled(FormRow)`
flex-direction: column;
`;
const FormRowPrice = styled(FormRow)`
flex-direction: column;
`;
const FormRowPriceBlock = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;

`;
const FormRowAdress = styled(FormRow)`
z-index: -10;

`;
const FormRowApartmentDetails = styled(FormRow)`

`;
const FormRowDetailsApartment = styled.View`

`;
const FormRowDetailsComplex = styled(FormRowDetailsApartment)`

`;
const FormRowDetailsHouse = styled(FormRowDetailsApartment)`

`;
const FormRowDetailsPlot = styled(FormRowDetailsApartment)`

`;
const FormRowDetailsCommerce = styled(FormRowDetailsApartment)`

`;
const FormThirdBlockApartment = styled(FormRow)`

`;
const FormThirdBlockComplex = styled.View`

`;
const FormThirdBlockComplexRow = styled(FormRowDetailsApartment)`

`;
const FormInputContainer = styled.View`

`;
const FormInputIcon = styled.Text`
position: absolute;
top: 28%;
right:${props => props.isPlotValue ? 5 + 'px' : 15 + 'px'};
height: 25px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
font-size: 16px;
font-family: ${F.light};
color: ${C.mainBlack};
`;
const FormInputBlock = styled.View`
display: flex;
flex-direction: column;
width: ${props => props.isCurrency === true ? 72 + '%' : 100 + '%'};
margin-bottom: 22px;
`;
const FormInputTextBlock = styled.View`
display: flex;
flex-direction: column;
width: 100%;
`;
const FormInputLabel = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
margin-bottom: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 16px;
`;
const FormInputLabelText = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 14px;
`;
const FormInputLabelTextMobile = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 14px;
margin-bottom: 5px;
`;
const FormInput = styled.TextInput`
padding-left: 10px;
padding-right: 10px;
width: 100%;
background-color: white;
font-family: ${F.light};
color: ${C.mainBlack};
border-width: 1px;
border-radius: 4px;
height:45px;
font-size: 16px;
`;
const FormTextArea = styled.TextInput`
font-size: 16px;
padding: 7px 10px;
background-color: white;
font-family: ${F.light};
color: ${C.mainBlack};
border-color: ${C.borderDarkGray};
border-width: 1px;
border-style: solid;
border-radius: 4px;
height: 160px;
`;
const CheckboxBlock = styled.Text`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-bottom: 6px;
`;
const Checkbox = styled.View`
opacity: 0;
width: 0px;
height:0px;
`;
const CheckboxImg = styled.Text`
border-radius: 4px;
height: 32px;
width: 32px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;
const CheckboxBlockText = styled.Text`
font-size: 14px;
font-family: ${F.light};
color: ${C.mainBlack};
margin-left: 8px;
`;
const ButtonSubmit = styled.TouchableOpacity`
border-radius: 4px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 15px 0px;
background-color: ${C.mainBlue};
/* margin-top: 15px; */
width:100%;
`;
const ButtonSubmitText = styled.Text`
color: white;
font-family: ${F.medium};
font-weight: 100;
font-size: 15px;
`;
const ErrorMessage = styled(M.ErrorMessage)`

`;
const DropCurrencyValueBlock = styled.View`
width: 25%;
`;
const DropApartmentTypeBlock = styled.View`
width: 100%;
`;

export const style = {
    Form: Form,
    FormRowDetailsContainer: FormRowDetailsContainer,
    FormRowName: FormRowName,
    BorderLine: BorderLine,
    FormRowPrice: FormRowPrice,
    FormRowPriceBlock: FormRowPriceBlock,
    FormRowApartmentDetails: FormRowApartmentDetails,
    FormThirdBlockApartment: FormThirdBlockApartment,
    FormThirdBlockComplex: FormThirdBlockComplex,
    FormThirdBlockComplexRow: FormThirdBlockComplexRow,
    FormInputContainer: FormInputContainer,
    FormInputIcon: FormInputIcon,
    FormInputBlock: FormInputBlock,
    FormInputLabel: FormInputLabel,
    FormInputLabelText: FormInputLabelText,
    FormInputLabelTextMobile: FormInputLabelTextMobile,
    FormInput: FormInput,
    FormTextArea: FormTextArea,
    FormInputTextBlock: FormInputTextBlock,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
    ErrorMessage: ErrorMessage,
    CheckboxBlock: CheckboxBlock,
    Checkbox: Checkbox,
    CheckboxImg: CheckboxImg,
    CheckboxBlockText: CheckboxBlockText,
    DropCurrencyValueBlock: DropCurrencyValueBlock,
    DropApartmentTypeBlock: DropApartmentTypeBlock,
    FormRowAdress: FormRowAdress,
    // FormRowDetails: FormRowDetails,
    FormRowDetailsApartment: FormRowDetailsApartment,
    FormRowDetailsComplex: FormRowDetailsComplex,
    FormRowDetailsHouse: FormRowDetailsHouse,
    FormRowDetailsPlot: FormRowDetailsPlot,
    FormRowDetailsCommerce: FormRowDetailsCommerce,
}