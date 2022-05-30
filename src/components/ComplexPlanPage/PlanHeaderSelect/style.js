import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const DropBlock = styled.View`
width: 100%;
`;
const Drop = styled.TouchableOpacity`
color: ${C.mainBlack};
background-color: white;
width: 100%;
border-radius: 5px;
border: 1px solid ${C.borderDarkGray};
`;
const DropHeader = styled.TouchableOpacity`
background-color: white;
width: 100%;
height: 42px;
display: flex;
flex-direction: row;
border-radius: 5px;
justify-content: space-between;
padding: 0px 16px;
align-items: center;
border: none;
font-family: ${F.light};
`;
const DropContainer = styled.View`
width: 100%;
position: absolute;
top: 44px;
background-color: white;
left: 0px;
z-index: 999;
border-left-color: ${C.borderGray};
border-left-width: 1px;
border-right-color: ${C.borderGray};
border-right-width: 1px;
`;
const DropContainerList = styled.View`
width: 100%;
`;
const DropContainerListLink = styled.TouchableOpacity`
display: flex;
flex-direction: row;
align-items: center;
border-bottom-color: ${C.borderGray};
border-bottom-width: 1px;
height: 45px;
padding: 0px 16px;
`;
const DropContainerListLinkText = styled.Text`
font-family: ${F.medium};
font-size: 20px;
`;

export const style = {
    DropBlock: DropBlock,
    Drop: Drop,
    DropHeader: DropHeader,
    DropContainer: DropContainer,
    DropContainerList: DropContainerList,
    DropContainerListLink: DropContainerListLink,
    DropContainerListLinkText: DropContainerListLinkText,
}