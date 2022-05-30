import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
border-top-color: ${C.borderGray};
border-top-width: 1px;
padding-top: 30px;
`
const Container_block = styled.View`
`
const User = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;

`
const User_info = styled.View`
font-family: ${F.light};
margin-left: 15px;
display: flex;
flex-direction: column;
`
const User_info_name = styled.Text`
font-family: ${F.light};
font-size: 16px;
`
const User_info_loginTime = styled.Text`
font-size: 12px;
font-family: ${F.light};
color: ${C.secondBlack};
`
const Btn_block = styled.View`
margin-top: 24px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Btn_phone = styled.TouchableOpacity`
border-radius: 4px;
width: 48.5%;
display: flex;
align-items: center;
justify-content: center;
padding: 14px 0px;
background-color: white;
border: 1px solid black;
`
const Btn_chat = styled.TouchableOpacity`
border-radius: 4px;
width: 48.5%;
display: flex;
align-items: center;
justify-content: center;
background-color: ${C.mainBlue};
padding: 14px 0px;
`
const Btn_phone_text = styled.Text`
font-size: 13px;
font-family: ${F.medium};
color: ${C.mainBlack};
`
const Btn_chat_text = styled.Text`
color: white;
font-family: ${F.medium};
font-size: 13px;
`
const Rating = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin-top: 15px;
margin-bottom: 20px;
`
const Rating_number = styled.Text`
color: ${C.mainBlack};
font-size: 40px;
margin-top:5px;
font-family: ${F.medium};
`
const Rating_block = styled.View`
margin-top: 3px;
margin-left: 12px;
display: flex;
flex-direction: column;
`
const Rating_block_title = styled.Text`
font-size: 18px;
`
const Rating_block_links = styled.View`
display: flex;
flex-direction: row;
align-items: center;
`
const Rating_block_links_link = styled.TouchableOpacity`
display: flex;
`
const Devider = styled.View`
width: 1px;
height:15px;
background-color: black;
display: flex;
flex-direction: row;
margin:0px 10px;
`
const Rating_block_links_link_text = styled.Text`
color: ${C.mainBlue};
font-family: ${F.medium};
font-size: 14px;
`
const Footer = styled.View`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
padding-right: 10%;
padding-bottom: 23px;
`
const Footer_block = styled.View`
width: 90%;
margin-bottom: 13px;
display: flex;
flex-direction: row;
`
const Footer_block_text = styled.View`
margin-left: 15px;
display: flex;
flex-direction: column;
`
const Footer_block_text_value = styled.Text`
color: ${C.mainBlack};
font-family: ${F.light};
font-size: 14px;
`
const Footer_link = styled.TouchableOpacity`
display: flex;
flex-direction: row;
`
const Footer_link_text = styled.Text`
color: ${C.mainBlue};
font-family: ${F.light};
font-size: 14px;
border-bottom-width: 1px;
border-bottom-color: ${C.mainBlue};
border-style: dashed;
`

export const styles = {
    Container: Container,
    Container_block: Container_block,
    User: User,
    User_info: User_info,
    User_info_name: User_info_name,
    User_info_loginTime: User_info_loginTime,
    Btn_block: Btn_block,
    Btn_phone: Btn_phone,
    Btn_chat: Btn_chat,
    Btn_phone_text: Btn_phone_text,
    Btn_chat_text: Btn_chat_text,
    Rating: Rating,
    Rating_number: Rating_number,
    Rating_block: Rating_block,
    Rating_block_title: Rating_block_title,
    Rating_block_links: Rating_block_links,
    Rating_block_links_link: Rating_block_links_link,
    Rating_block_links_link_text: Rating_block_links_link_text,
    Devider: Devider,
    Footer: Footer,
    Footer_block: Footer_block,
    Footer_block_text: Footer_block_text,
    Footer_block_text_value: Footer_block_text_value,
    Footer_link: Footer_link,
    Footer_link_text: Footer_link_text,
}