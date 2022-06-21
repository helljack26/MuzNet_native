import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'
import { M } from '@/res/mixin'

const CardContainer = styled.View`
background-color: ${C.white};
`;
const CardContainerScrollView = styled.ScrollView`
width: 100%;
height: 100%;
margin-bottom: 126px;
`;

const Header = styled.View`
width: 100%;
padding: 0px 16px;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
position: absolute;
top: 60px;
left: 0px;
right: 0px;
z-index: 999;
`;
const HeaderClose = styled.TouchableOpacity`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 48px;
height: 48px;
background-color: ${C.opacity20white};
border-radius: 6px;
`;
// Card info
const CardInfo = styled.View`
width: 100%;
padding: 27px 16px;
border-radius: 12px;
margin-top: -12px;
background-color: ${C.white};
border-color: #eaeaea41;
border-width: 1px;
border-style: solid;
`;
const CardInfoRow = styled.View`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;
const CardLocation = styled.View`
display: flex;
align-items: center;
flex-direction: row;
`;
const CardLocationText = styled(M.PlainText17)`
margin-left: 5px;
color: ${C.sBlack};
`;
const CardTitle = styled(M.Title28)`
margin-top: 8px;
margin-bottom: 10px;
font-family: ${F.extraBold};
`;
const GenreBlock = styled.View`
width: 100%;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: flex-start;
flex-direction: row;
`;
const Genre = styled.View`
border-color: ${C.black};
border-width: 1px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding-left: 16px;
padding-right: 16px;
padding-bottom: 2px;
height: 28px;
margin-bottom: 10px;
margin-right:8px;
border-radius: 14px;
`;
const GenreText = styled(M.MediumText13)`

`;
const DescriptionContainer = styled.View`
margin-top: 19px;
`;
const DescriptionContainerText = styled(M.MediumText17)`
color: ${C.cyanGray};
`;
const ShowDescriptionButton = styled.TouchableOpacity`
margin-top: 8px;
`;
const ShowDescriptionButtonText = styled(M.TitleBold15)`
text-decoration: underline;
`;
const CardBorder = styled.View`
margin: 24px 0px;
height: 1px;
border-radius: 2px;
background-color: ${C.gray};
opacity: 0.2;
`;
const CardList = styled.View`

`;
const CardListBlock = styled.View`

`;
const CardListHeader = styled(M.TitleBold20)`
margin-bottom: 16px;
`;
const CardListText = styled(M.PlainText17)`
color: ${C.cyanGray};
margin-bottom: 8px;
`;
const CardListItem = styled.View`
display: flex;
align-items: center;
flex-direction: row;
`;
const CardListDot = styled.View`
width: 6px;
height:6px ;
margin-bottom: 8px;
margin-right: 8px;
border-radius: 3px;
background-color: ${C.black};
`;
const WarningBlock = styled.View`
width: 100%;
display: flex;
align-items: center;
flex-direction: row;
`;
const WarningBlockText = styled(M.PlainText13)`
margin-left: 10px;
color: ${C.cyanGray};
`;
// Bottom buttons
const ContentBlock = styled.View`
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: row;
margin-top: 16px;
margin-top: 16px;
padding: 0px 10px;
padding-top: 7px;
width: 100%;
height : 126px;
position: absolute;
left:0;
bottom:0;
background-color: ${C.white};
border-color: ${C.lightGray};
border-width: 1px;
z-index: 1000;
`;
const ContentBlockRow = styled.View`
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
`;
const ButtonSubmit = styled(M.BlackBtn)`
width: 60%;
`;
const ButtonSubmitText = styled(M.BlackBtnText)`

`;
const ContainerPerHour = styled.View`
width: 40%;
display: flex;
justify-content: center;
align-items: flex-end;
flex-direction: row;
margin-left: -10px;
`;
const PricePerHourValue = styled(M.Title24)`
margin-bottom: -3px;
`;
const PricePerHourText = styled(M.PlainText17)`

`;
export const style = {
    CardContainer: CardContainer,
    CardContainerScrollView: CardContainerScrollView,
    Header: Header,
    HeaderClose: HeaderClose,

    // Card info
    CardInfo: CardInfo,
    CardInfoRow: CardInfoRow,
    CardLocation: CardLocation,
    CardLocationText: CardLocationText,
    CardTitle: CardTitle,
    GenreBlock: GenreBlock,
    Genre: Genre,
    GenreText: GenreText,
    DescriptionContainer: DescriptionContainer,
    DescriptionContainerText: DescriptionContainerText,
    ShowDescriptionButton: ShowDescriptionButton,
    ShowDescriptionButtonText: ShowDescriptionButtonText,
    CardBorder: CardBorder,
    CardList: CardList,
    CardListBlock: CardListBlock,
    CardListText: CardListText,
    CardListHeader: CardListHeader,
    CardListItem: CardListItem,
    CardListDot: CardListDot,
    WarningBlock: WarningBlock,
    WarningBlockText: WarningBlockText,
    // Bottom buttons
    ContentBlock: ContentBlock,
    ContentBlockRow: ContentBlockRow,
    ContainerPerHour: ContainerPerHour,
    PricePerHourValue: PricePerHourValue,
    PricePerHourText: PricePerHourText,
    ButtonSubmit: ButtonSubmit,
    ButtonSubmitText: ButtonSubmitText,
}
