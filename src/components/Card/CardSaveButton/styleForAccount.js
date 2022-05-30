import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
width: 100%;
background-color: white;
display: flex;
flex-direction: column;
`
const Container_title = styled.View`
font-family: ${F.light};
display: block;
`
const Container_block = styled.View`
display: flex;
flex-direction: column;
width: 100%;
`
const Container_block_btn = styled.TouchableOpacity`
margin-top: 14px;
background-color: white;
border: 1px solid black;
padding:12px 13px;
justify-content: center;
display: flex;
flex-direction: row-reverse;
align-items: center;
border-radius: 4px;
`
const Container_block_btn_text = styled.Text`
margin-left: 15px;
font-family: ${F.regular};
font-size: 15px;
color: ${C.mainBlack};
`


export const styleForAccount = {
    Container: Container,
    Container_title: Container_title,
    Container_block: Container_block,
    Container_block_btn_text: Container_block_btn_text,
    Container_block_btn: Container_block_btn,
}