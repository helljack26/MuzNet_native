import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const DropBlock = styled.View`
width: 100%;
margin-bottom: 22px;
`;
const Drop = styled.TouchableOpacity`
width: 100%;
`;
const DropHeader = styled.TouchableOpacity`
border-radius: 6px;
border: 1px solid ${C.lightGray};
background-color: white;
width: 100%;
height: 48px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 20px;
`;
const ArrowBlock = styled.View`
transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
`;
const DropContainer = styled.ScrollView`
width: 100%;
position: absolute;
top: 56px;
background-color: white;
left: 0px;
z-index: 999;
border-color: ${C.lightGray};
border-width: 1px;
border-radius: 6px;
`;
const OptionsList = styled.View`
border-radius: 6px;
height: 100%;
width: 100%;
padding: 6px 0px;
`;
const Option = styled.TouchableOpacity`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 20px;

`;
const OptionText = styled.Text`
font-family: ${props => props.isActive === true ? F.extraBold : F.regular};
color: ${props => props.isHeader === true ? C.sBlack : C.black};
font-size: 17px;
`;
const FormDateInputBlock = styled.View`
width: 100%;
height: 44px;
border-bottom-color: ${C.lightGray};
border-bottom-width: 1px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
padding-left: 13px;
padding-right: 13px;
`;
const FormDateInputPlaceHolder = styled.TouchableOpacity`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row; 
`;
const FormDateInputPlaceHolderText = styled.Text`
font-size: 16px;
font-family: ${F.light};
color: ${C.mainBlack};
`;

export const style = {
    DropBlock: DropBlock,
    Drop: Drop,
    DropHeader: DropHeader,
    DropContainer: DropContainer,
    OptionsList: OptionsList,
    Option: Option,
    OptionText: OptionText,
    FormDateInputBlock: FormDateInputBlock,
    FormDateInputPlaceHolder: FormDateInputPlaceHolder,
    FormDateInputPlaceHolderText: FormDateInputPlaceHolderText,
    ArrowBlock: ArrowBlock,
}