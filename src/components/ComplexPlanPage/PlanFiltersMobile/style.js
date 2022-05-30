import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const PlanFiltersMobile = styled.TouchableOpacity`
display: flex;
flex-direction: row;
z-index: 0;
justify-content: center;
align-items: center;
width: 100%;
border-color: ${C.mainBlack};
border-width: 1px;
margin-top: 22px;
background-color: white;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border-bottom-left-radius: 5px;
height: 42px;
`
const PlanFiltersMobileText = styled.Text`
font-size: 14px;
font-family: ${F.light};
color: ${C.secondBlack};
`
const PlanFiltersMobileNumber = styled.View`
border-top-left-radius: 12px;
border-top-right-radius: 12px;
border-bottom-right-radius: 12px;
border-bottom-left-radius: 12px;
width: 24px;
height: 24px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color : ${C.mainBlue};
margin-left: 13px;
padding-right: 1px;
`
const PlanFiltersMobileNumberText = styled.Text`
color: white;
font-family: ${F.medium};
font-size: 12px;
`

export const style = {
  PlanFiltersMobile: PlanFiltersMobile,
  PlanFiltersMobileText: PlanFiltersMobileText,
  PlanFiltersMobileNumber: PlanFiltersMobileNumber,
  PlanFiltersMobileNumberText: PlanFiltersMobileNumberText,
}