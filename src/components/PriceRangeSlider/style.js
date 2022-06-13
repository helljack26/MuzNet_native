import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const RangeBlock = styled.View`
margin: 0px 16px;
`;
const RangeBlockHeader = styled.View`
display: flex;

justify-content: space-between;
align-items: center;
flex-direction: row;

`;
const RangeBlockHeaderTitle = styled.Text`

`;
const RangeBlockHeaderText = styled.Text`

`;

export const style = {
    RangeBlock: RangeBlock,
    RangeBlockHeader: RangeBlockHeader,
    RangeBlockHeaderTitle: RangeBlockHeaderTitle,
    RangeBlockHeaderText: RangeBlockHeaderText,
}