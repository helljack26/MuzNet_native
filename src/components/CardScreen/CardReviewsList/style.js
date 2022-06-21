import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const SliderContainer = styled.View`
/* width: 100%; */
`;
const SliderScrollView = styled.ScrollView`
margin-top: 15px;
margin-bottom: 16px;
margin-left: -16px;
margin-right: -16px;
padding-left: 16px;
`;
const ReviewViewAllBtn = styled(M.BorderBtn)`

`;
const ReviewViewAllBtnText = styled(M.BorderBtnText)`

`;
export const style = {
    SliderContainer: SliderContainer,
    SliderScrollView: SliderScrollView,
    ReviewViewAllBtn: ReviewViewAllBtn,
    ReviewViewAllBtnText: ReviewViewAllBtnText,
}
