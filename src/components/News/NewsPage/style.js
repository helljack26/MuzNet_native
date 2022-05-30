import styled from 'styled-components/native';
import F from '@/res/fonts'
import C from '@/res/colors'

const Container = styled.View`
 padding-bottom: 24px;
    margin: 0 4%;
        width: 100%;
    margin-top: 30px;
`;
const AdsHeader = styled.View`
    width: 100%;
`;
const AdsHeaderText = styled.Text`
    font-size: 20px;
    margin-bottom: 2px;
    color: ${C.mainBlack};
    font-family: ${F.medium};

`;
const AdsQueryNumber = styled.Text`
    font-size: 13px;
    color: ${C.secondBlack};
    font-family: ${F.light};
`;
const NewsContainer = styled.View`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
const NewsItemBlock = styled.TouchableOpacity`
  width: 92%;
  margin-bottom: 20px;
`;
const NewsItemImageBlock = styled.View`
    border-radius: 8px;
    overflow: hidden;
    height: 200px;
  display: flex;
  justify-content:center;
  align-content:center ;
`;
const NewsItemImage = styled.Image`
    width: 100%;
    margin-bottom: 0px;
`;
const NewsItemInfo = styled.View`
 margin-top: 5px;
  display: flex;
  flex-direction: column;
`;
const NewsItemTitle = styled.Text`
    color: ${C.mainBlack};
    font-family: ${F.medium};
    font-size: 19px;
    margin-bottom: 5px;
    line-height: 23.5px;
`;
const NewsItemDate = styled.Text`
      color: ${C.secondBlack};
    font-family: ${F.light};
    font-size: 13px;
`;

export const style = {
    Container: Container,
    AdsHeader: AdsHeader,
    AdsHeaderText: AdsHeaderText,
    AdsQueryNumber: AdsQueryNumber,
    NewsContainer: NewsContainer,
    NewsItemBlock: NewsItemBlock,
    NewsItemImage: NewsItemImage,
    NewsItemImageBlock: NewsItemImageBlock,
    NewsItemInfo: NewsItemInfo,
    NewsItemTitle: NewsItemTitle,
    NewsItemDate: NewsItemDate,
}