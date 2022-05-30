import styled from 'styled-components/native';
import { M } from '@/res/mixin'

const Main = styled(M.MainContainer)`
padding-top: 12px;
`;
const MainBlock = styled.View`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
flex-direction: row;
flex-wrap: wrap;
`;

export const styleRecommendationBlock = {
    Main: Main,
    MainBlock:MainBlock,
}