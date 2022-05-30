import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const EntranceColumn = styled.View`
padding-right: 8px;
border-right-color: ${C.borderGray};
`;
const EntranceColumnHeader = styled.View`
  border-radius:8px;
  border-color: ${C.borderGray};
  border-width: 1px;
  width: 100%;
  height: 32px;
  padding: 0px 15px;
  background-color : ${C.backgroundGray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;

`;
const EntranceColumnHeaderText = styled.Text`
    color: ${C.secondBlack};
    font-family: ${F.medium};
    font-size: 13px;
`;
const FloorRowBlock = styled.View`
  display: flex;
  flex-direction: row;
`;
export const style = {
  EntranceColumn: EntranceColumn,
  EntranceColumnHeader: EntranceColumnHeader,
  EntranceColumnHeaderText: EntranceColumnHeaderText,
  FloorRowBlock: FloorRowBlock,
}