import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'
import { M } from '@/res/mixin'

const Container = styled.ScrollView`
width: 100%;
height: 100%;
margin-top: 20px;
margin-bottom: 60px;
`;
const ContainerBlock = styled.View`
width: 100%;
height: 100%;

display: flex;
flex-direction: column;
margin-top: 20px;
`;

const ContainerHeader = styled.View`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
`;
const ContainerHeaderBlock = styled.View`

`;
const HeaderText = styled(M.HeaderH1)`
font-size: 22px;

`;
const ContainerBlockRow = styled.View`
display: flex;
flex-direction: row;
margin-bottom: 16px;
`;
const ContainerBlockRowTitle = styled.Text`
font-family: ${F.light};
color: ${C.secondBlack};
margin-right: 4px;
font-size: 17px;

`;
const ContainerBlockRowValue = styled.Text`
font-family: ${F.light};
color: ${C.mainBlack};
font-size: 17px;
`;

const LinkToAddNewObject = styled.TouchableOpacity`
margin-top: 20px;
margin-bottom: 50%;
padding: 15px 0px;
background-color: ${C.mainBlue};
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
`;
const LinkToAddNewObjectDisable = styled.View`
background-color: ${C.disabledButton};
margin-top: 20px;
margin-bottom: 50%;
padding: 15px 0px;
border-radius: 4px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
`;
const LinkToAddNewObjectText = styled.Text`
color: white;
font-size: 15px;
font-weight: 100;
font-family: ${F.regular};
`;
const DropApartmentTypeBlock = styled.View`
width: 100%;
`;
const DropBlock = styled.View`
width: 100%;
margin-top: 8px;
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
height: 100%;
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
font-family: ${F.light};
font-size: 16px;
`;
export const style = {
    Container: Container,
    ContainerBlock: ContainerBlock,
    ContainerHeader: ContainerHeader,
    ContainerHeaderBlock: ContainerHeaderBlock,
    ContainerBlockRow: ContainerBlockRow,
    ContainerBlockRowTitle: ContainerBlockRowTitle,
    ContainerBlockRowValue: ContainerBlockRowValue,
    HeaderText: HeaderText,
    LinkToAddNewObject: LinkToAddNewObject,
    LinkToAddNewObjectDisable: LinkToAddNewObjectDisable,
    LinkToAddNewObjectText: LinkToAddNewObjectText,
    DropApartmentTypeBlock: DropApartmentTypeBlock,
    DropBlock: DropBlock,
    Drop: Drop,
    DropHeader: DropHeader,
    DropContainer: DropContainer,
    DropContainerList: DropContainerList,
    DropContainerListLink: DropContainerListLink,
    DropContainerListLinkText: DropContainerListLinkText,
}