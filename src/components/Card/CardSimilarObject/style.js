import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Similar = styled.ScrollView`
width: 100%;
`
const Similar_header = styled.Text`
font-size:20px;
font-family: ${F.medium};
color: ${C.mainBlack};
border-top-color: ${C.borderGray};
border-top-width: 1px;
padding-top: 28px;
padding-bottom: 16px;
`
const Similar_block = styled.View`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`
export const styles = {
    Similar: Similar,
    Similar_header: Similar_header,
    Similar_block: Similar_block,

}