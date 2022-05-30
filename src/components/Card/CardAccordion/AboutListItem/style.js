import styled from 'styled-components/native';

import C from '@/res/colors'
import F from '@/res/fonts'

const AboutBlockUlLi = styled.Text`
margin-bottom: 12px;
display: flex;
`
const AboutBlockLiTitle = styled.Text`
color: ${C.secondBlack};
font-size: 14px;
font-family: ${F.light};
`
const AboutBlockLiLink = styled.TouchableOpacity`

`
const AboutBlockLiLinkText = styled.Text`
text-decoration: underline;
font-family: ${F.light};
color: ${C.mainBlue};
margin-bottom: -3px;
`
const AboutBlockLiText = styled.Text`
color: ${C.mainBlack};
font-size: 14px;
font-family: ${F.light};
`

export const style = {
  AboutBlockUlLi: AboutBlockUlLi,
  AboutBlockLiTitle: AboutBlockLiTitle,
  AboutBlockLiLink: AboutBlockLiLink,
  AboutBlockLiLinkText: AboutBlockLiLinkText,
  AboutBlockLiText: AboutBlockLiText,
}