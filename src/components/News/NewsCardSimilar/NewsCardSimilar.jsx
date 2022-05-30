import F from '@/res/fonts'
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useNewsApiStore } from '@/stores/NewsApi';

import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";

// Styles
import { style } from './style'

const {
    Container,
    AdsHeader,
    AdsHeaderText,
    NewsContainer,
    NewsItemBlock,
    NewsItemImageBlock,
    NewsItemImage,
    NewsItemInfo,
    NewsItemTitle,
    NewsItemDate,
} = style;

const NewsCardSimilar = observer(({ linkToPage }) => {
    const navigation = useNavigation();

    const { similarNews, getSimilarNews } = useNewsApiStore();
    const newsApi = toJS(similarNews)
    const isNews = newsApi ? newsApi : []

    useEffect(() => {
        getSimilarNews();
    }, []);

    const NewsItem = ({ data }) => {
        const { id, adTitle, creationDate, photoPath } = data;
        return <NewsItemBlock onPress={() => {
            navigation.navigate(linkToPage, {
                itemId: id,
            })
        }} >
            <NewsItemImageBlock>
                <NewsItemImage
                    resizeMode={'contain'}
                    source={photoPath} />
            </NewsItemImageBlock>
            <NewsItemInfo>
                <NewsItemTitle>
                    {adTitle}
                </NewsItemTitle>
                <NewsItemDate>
                    {creationDate}
                </NewsItemDate>
            </NewsItemInfo>
        </NewsItemBlock>
    }
    return (
        <View style={styles.body}>
            <ScrollView
                horizontal={false}
                style={styles.container}>
                <Container>
                    <AdsHeader>
                        <AdsHeaderText>Похожие новости</AdsHeaderText>
                    </AdsHeader>
                    <NewsContainer>
                        {isNews.map((item, id) => <NewsItem data={item} key={id} />)}
                    </NewsContainer>
                </Container>

            </ScrollView>
        </View>
    );
})

export default NewsCardSimilar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        fontFamily: F.regular,
    },
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: F.regular,
    },
})

