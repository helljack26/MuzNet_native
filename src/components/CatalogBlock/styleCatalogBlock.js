import styled from 'styled-components/native';
import { M } from '@/res/mixin'

const Main = styled(M.MainContainer)`
padding-top: 12px;
`;
const MainBlock = styled.View`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export const styleCatalogBlock = {
    Main: Main,
    MainBlock: MainBlock,
}