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
border-radius: 4px;
border: 1px solid ${C.borderGray};
background-color: white;
width: 100%;
height: 45px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 16px;
font-family: ${F.light};
`;
const DropContainer = styled.ScrollView`
width: 100%;
position: absolute;
top: 44px;
max-height: 180px;
background-color: white;
left: 0px;
z-index: 999;
border-left-color: ${C.borderGray};
border-left-width: 1px;
border-right-color: ${C.borderGray};
border-right-width: 1px;
`;
const OptionsList = styled.View`
height: 100%;
width: 100%;
`;
const Option = styled.TouchableOpacity`
width: 100%;
display: flex;
background-color: ${props => props.isActive === true ? C.backgroundGray : 'white'};
flex-direction: row;
align-items: center;
border-bottom-color: ${C.borderGray};
border-bottom-width: 1px;
height: 45px;
padding: 0px 16px;
`;
const OptionText = styled.Text`
font-family: ${F.light};
font-size: 16px;
`;
const FormDateInputBlock = styled.View`
width: 100%;
height: 44px;
border-bottom-color: ${C.borderGray};
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
}