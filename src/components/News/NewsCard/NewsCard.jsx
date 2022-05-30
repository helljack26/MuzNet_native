import * as React from 'react';
import F from '@/res/fonts'
import C from '@/res/colors'

import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import IMAGES from '@/res/images'
const { ArrowLeft } = IMAGES

const source = {
    html: `<div style="
    color:#222222; font-size:16px">
    <header style="
        width: 100%;
        border-radius: 20px;
        margin-top:10px;">
        <div>
            <div style=" width:100%; color:black; margin-bottom: 10px;">
                <h1 style="margin-bottom: 0px;">
                    Мы открылись!
                </h1>
                <span style=" font-size:14px ">
                    26 марта 2022
                </span>
                
            </div>
            <span style="font-size:14px;  margin-bottom: 15px;">
            <span>
                Просмотров:
            </span>
            <span>
                341
            </span>
        </span>
            <img  src="http://immovable.romura.space/img/news_mock/news_header.png" width: 100%; height: 400px;" style=" margin-bottom: 15px;" alt="View icon" />

        </div>
    </header>

    <main>
        <div style=" margin-bottom: 20px;">
            <h2  style=" margin-bottom: 0px;">
                Коронованный герцог графства ни к чему нас не обязывает
            </h2>
            <p>
                Вот вам яркий пример современных тенденций - повышение уровня гражданского сознания однозначно
                определяет каждого участника как способного принимать собственные решения касаемо инновационных
                методов управления процессами. Но элементы политического процесса освещают чрезвычайно интересные
                особенности картины в целом, однако конкретные выводы, разумеется, объединены в целые кластеры себе
                подобных. Вот вам яркий пример современных тенденций - высококачественный прототип будущего проекта
                прекрасно подходит для реализации новых принципов формирования материально-технической и кадровой
                базы.
            </p>
            <p>
                Лишь реплицированные с зарубежных источников, современные исследования преданы
                социально-демократической анафеме! С другой стороны, социально-экономическое развитие не даёт нам
                иного выбора, кроме определения как самодостаточных, так и внешне зависимых концептуальных решений.
                Но консультация с широким активом не оставляет шанса для переосмысления внешнеэкономических политик.
                Прежде всего, повышение уровня гражданского сознания предопределяет высокую востребованность
                поставленных обществом задач. Для современного мира экономическая повестка сегодняшнего дня напрямую
                зависит от направлений прогрессивного развития.
            </p>
            <img src="http://immovable.romura.space/img/news_mock/news_blog_1.png" width='100%' style=" margin-top: 15px;" alt="View icon" />
        </div>

        <div>
            <h2 style=" margin-bottom: 0px; margin-top:10px;">
                Только новая модель организационной деятельности сделала своё дело
            </h2>
            <p>
                С другой стороны, социально-экономическое развитие представляет собой интересный эксперимент
                проверки соответствующих условий активизации. Современные технологии достигли такого уровня, что
                убеждённость некоторых оппонентов обеспечивает широкому кругу (специалистов) участие в формировании
                как самодостаточных, так и внешне зависимых концептуальных решений. Учитывая ключевые сценарии
                поведения, реализация намеченных плановых заданий не даёт нам иного выбора, кроме определения
                своевременного выполнения сверхзадачи. Равным образом, дальнейшее развитие различных форм
                деятельности позволяет выполнить важные задания по разработке прогресса профессионального
                сообщества.
            </p>
        </div>

        <span>
            <div>
                <h2 style=" margin-bottom: 0px; margin-top:10px;">
                    Высококачественный прототип будущего проекта бодрит
                </h2>
                <ul style="list-style-type:decimal;">
                    <li>
                        Как принято считать, активно развивающиеся страны третьего мира представляют собой не что
                        иное, как квинтэссенцию победы маркетинга над разумом и должны быть.
                    </li>
                    <li>
                        Разнообразный и богатый опыт говорит нам, что высокое качество позиционных исследований
                        обеспечивает актуальность вывода текущих активов.
                    </li>
                    <li>
                        Независимые государства, инициированные исключительно синтетически, обнародованы. </li>
                </ul>
                <img src="http://immovable.romura.space/img/news_mock/news_blog_2.png" width='100%' style=" margin-top: 10px; margin-bottom: 20px;" alt="View icon" />
            </div>
            <div>

            </div>
        </span>

        <div>
            <h2 style=" margin-bottom: 0px; margin-top:10px;">
                Финансовый мир очнулся: органический трафик оправдал надежды граждан
            </h2>
            <p>
                Внезапно, интерактивные прототипы, вне зависимости от их уровня, должны быть указаны как претенденты
                на роль ключевых факторов. Прежде всего, сплочённость команды профессионалов говорит о возможностях
                поэтапного и последовательного развития общества.
            </p>
        </div>

        <article
        style="     margin: 20px 0px;
        background-color: rgba(0, 114, 219, 0.1);
        border: 1px solid #0072DB;
        border-radius: 20px;
        padding: 20px;"
        >
            <h2 style=" margin-bottom: 0px; margin-top:0px;">
                Убеждённость некоторых оппонентов даёт нам право принимать самостоятельные решения
            </h2>
            <p>
                С учётом сложившейся международной обстановки, консультация с широким активом способствует
                подготовке и реализации как самодостаточных, так и внешне зависимых концептуальных решений. Высокий
                уровень вовлечения представителей целевой аудитории является четким доказательством простого факта:
                перспективное планирование способствует подготовке и реализации распределения внутренних резервов и
                ресурсов.
            </p>
        </article>

        <div>
            <p>
                Не следует, однако, забывать, что высокое качество позиционных исследований является качественно
                новой ступенью переосмысления внешнеэкономических политик. Приятно, граждане, наблюдать, как
                стремящиеся вытеснить традиционное производство, нанотехнологии и по сей день остаются уделом
                либералов, которые жаждут быть ограничены исключительно образом мышления.
            </p>
        </div>
        
        <div 
        style="
            width:90%;
            margin:0 auto;
            display:flex;
        "
        >
            <p 
            style="
            font-size: 17px;
            font-style: italic;
            font-weight: bold;
            line-height: 22px; 
            margin-top:10px;
            margin-bottom:30px;
            ">
                И нет сомнений, что активно развивающиеся страны третьего мира лишь добавляют фракционных
                разногласий и ассоциативно распределены по отраслям. А ещё интерактивные прототипы и по сей день
                остаются уделом либералов, которые жаждут быть своевременно верифицированы.
            </p>
        </div>
    </main>
</div>`
};

import styled from 'styled-components/native';
import NewsCardSimilar from '../NewsCardSimilar/NewsCardSimilar';
const MainBlock = styled.ScrollView`
width: 100%;
background-color: white;
padding: 0px 4%;
`;
// Styles
const GoBack = styled.TouchableOpacity`
display: flex;
align-items: center;
flex-direction: row;
margin-top: 15px;
`;

export default function NewsCard({ linkToPage }) {
    const navigation = useNavigation();
    const route = useRoute();
    const { itemId } = route.params;

    const scrollViewRef = useRef(null)
    const scrollTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true })
        }
    }
    if (itemId) {
        scrollTop()
    }
    const { width } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.body}>

            <MainBlock ref={scrollViewRef} horizontal={false}>
                <GoBack
                    onPress={() => navigation.goBack()}>
                    <ArrowLeft />
                    <Text style={styles.goBack}>Вернуться назад</Text>
                </GoBack>
                <RenderHtml contentWidth={width} source={source} enableCSSInlineProcessing={true} />
                <NewsCardSimilar linkToPage={linkToPage} />
            </MainBlock>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        flex: 9,
        fontFamily: F.regular,
    },
    goBack: {
        marginLeft: 10,
        color: C.mainBlack,
        fontSize: 13,
        fontFamily: F.light
    },
})