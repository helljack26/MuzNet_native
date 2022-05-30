import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
width: 100%;
background-color: #f4f4f4;
height: 69px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: 32px;
padding: 5px 15px;
`
const Container_title = styled.View`
font-family: $medium-font;
display: block;
`
const Container_block = styled.View`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
const Container_block_btn = styled.TouchableOpacity`
background-color: white;
border: 1px solid black;
padding:12px 13px;
justify-content: center;
display: flex;
flex-direction: row;
align-items: center;
font-size: 14px;
border-radius: 4px;
`
const Container_block_btn_text = styled.Text`
margin-right: 5px;
font-family: ${F.light};
font-size: 13px;
color: ${C.mainBlack};
`


export const styleForCard = {
    Container: Container,
    Container_title: Container_title,
    Container_block: Container_block,
    Container_block_btn_text: Container_block_btn_text,
    Container_block_btn: Container_block_btn,
}