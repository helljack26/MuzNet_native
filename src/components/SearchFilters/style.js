import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const FilterContainer = styled.ScrollView`
width: 100%;
background-color: ${C.white};
margin-top: 5%;
border-top-left-radius: 16px;
border-top-right-radius: 16px;
overflow: hidden;
`;
const Header = styled.View`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-top: 24px;
border-bottom-color: ${C.lightGray};
border-bottom-width: 1px;
`;
const HeaderClose = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 32px;
height: 32px;
position: absolute;
top: -3px;
right:   16px;
bottom: 0px;
`;
const HeaderTitle = styled(M.MediumText20)`
margin-bottom: 12px;
`;
const FilterBlock = styled.ScrollView`
width: 100%;
`;

export const style = {
    FilterContainer: FilterContainer,
    Header: Header,
    HeaderClose: HeaderClose,
    HeaderTitle: HeaderTitle,
    FilterBlock: FilterBlock,
}