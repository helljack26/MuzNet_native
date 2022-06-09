import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const DropBlock = styled.View`
width: 100%;
margin: 0px 16px;
background-color: white;
border-radius: 6px;
margin-bottom: 22px;
margin-top: 22px;

`;
const Drop = styled.TouchableOpacity`

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
padding: 0px 16px;


`;
const ArrowBlock = styled.View`
transform: ${props => props.isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'};
margin-right: 7px;
`;
const DropContainer = styled.ScrollView`
width: 100%;
margin-top: 0px;
background-color: white;
/* position: absolute; */
/* left: 0px; */
/* z-index: 999; */
border-color: ${C.lightGray};
border-width: 1px;
border-radius: 6px;
box-shadow: 10px 5px 5px black;
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
justify-content: space-between;
align-items: center;
padding: 8px 16px;

`;
const OptionText = styled.Text`
font-family: ${F.regular};
color: ${props => props.isHeader === true ? C.sBlack : C.black};
font-size: 17px;
`;

const OptionActiveIcon = styled.View`
width: 20px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

export const style = {
    DropBlock: DropBlock,
    Drop: Drop,
    DropHeader: DropHeader,
    DropContainer: DropContainer,
    OptionsList: OptionsList,
    Option: Option,
    OptionText: OptionText,
    ArrowBlock: ArrowBlock,
    OptionActiveIcon: OptionActiveIcon,
}