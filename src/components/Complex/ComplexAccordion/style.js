import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const About = styled.View`
width: 100%;
margin-top: 24px;
`;
const Block_header = styled.TouchableOpacity`
font-size: 20px;
border-top-color: ${C.borderGray};
border-top-width: 1px;
background-color: white;
padding-top: 16px;  
padding-bottom: 16px;
padding-right: 7px;
flex-direction: row;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Block_header_Text = styled.Text`
font-family: ${F.medium};
font-size: 20px;
`;
const About_block = styled.View`
display: flex;
background-color: white;
`;
const About_block_ul = styled.View`
font-family: ${F.light};
margin-bottom: 10px;
`;
const Benefits_value = styled.Text`
margin-bottom: 10px;
display: flex;
margin-left: 5px;
font-size: 14px;
color: ${C.mainBlack};
align-items: center;
`;
const Description = styled.View`
display:flex;
background-color: white;
padding-bottom: 20px;
border-bottom-color: ${C.borderGray};
border-bottom-width: 1px;
`;
const Description_text = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 14px;
line-height:21px;
`;

export const styles = {
  About: About,
  Block_header: Block_header,
  Block_header_Text: Block_header_Text,
  About_block: About_block,
  About_block_ul: About_block_ul,
  Benefits_value: Benefits_value,
  Description: Description,
  Description_text: Description_text,
}