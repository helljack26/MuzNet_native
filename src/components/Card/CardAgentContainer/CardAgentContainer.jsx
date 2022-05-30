import React from 'react';
import { Image } from 'react-native';

import { styles } from './style.js'

import IMAGES from '@/res/images'
const { HomeSmallIcon, UserIcon, HandsIcon, LockIcon } = IMAGES;

const {
    Container,
    Container_block,
    User,
    User_info,
    User_info_name,
    User_info_loginTime,
    Btn_block,
    Btn_phone,
    Btn_phone_text,
    Btn_chat,
    Btn_chat_text,
    Rating,
    Rating_number,
    Rating_block,
    Rating_block_title,
    Rating_block_links,
    Rating_block_links_link,
    Rating_block_links_link_text,
    Devider,
    Footer,
    Footer_block,
    Footer_block_text,
    Footer_block_text_value,
    Footer_link,
    Footer_link_text,
} = styles;

const agent = {
    avatarPath: require('../../../../assets/icon/user_photo.png'),
    name: 'Ирина Ларионова Булочкина',
    lastLogin: '15:26',
    since: '3 года 24 месяца',
    phone: '+38050438452',
    id: 1,
    rating: '4,8',
    agency: 'Дома в Киеве каждому',
    object: [],
}

const CardAgentContainer = ({ agentId }) => {
    const { name, lastLogin, since, phone, id, rating, agency, object, avatarPath } = agent;

    return (
        <Container>
            <Container_block>
                {/* User */}
                <User>
                    <Image style={{
                        width: 56, height: 56
                    }} resizeMode='stretch' source={avatarPath} />
                    <User_info>
                        <User_info_name ellipsizeMode="clip">{name}</User_info_name>
                        <User_info_loginTime>Онлайн в {lastLogin}</User_info_loginTime>
                    </User_info>
                </User>
                {/* Button */}
                <Btn_block >
                    <Btn_phone>
                        <Btn_phone_text numberOfLines={1}>
                            Телефон
                        </Btn_phone_text>
                    </Btn_phone>
                    <Btn_chat>
                        <Btn_chat_text>
                            Написать в чат
                        </Btn_chat_text>
                    </Btn_chat>
                </Btn_block>
            </Container_block>
            {/* Rating */}
            <Rating>
                <Rating_number>{rating}</Rating_number>
                <Rating_block>
                    <Rating_block_title>
                        Рейтинг пользователя
                    </Rating_block_title >
                    <Rating_block_links>
                        <Rating_block_links_link >
                            <Rating_block_links_link_text >
                                Оценить
                            </Rating_block_links_link_text>
                        </Rating_block_links_link>

                        <Devider></Devider>
                        <Rating_block_links_link >
                            <Rating_block_links_link_text >
                                Читать отзыв
                            </Rating_block_links_link_text>
                        </Rating_block_links_link>
                    </Rating_block_links>
                </Rating_block>
            </Rating>
            {/* Footer */}
            <Footer>
                <Footer_block>
                    <HomeSmallIcon width='15px' />
                    <Footer_block_text>
                        <Footer_block_text_value>Работает с нашим порталом</Footer_block_text_value>
                        <Footer_block_text_value>{since}</Footer_block_text_value>
                    </Footer_block_text>
                </Footer_block>

                <Footer_block>
                    <UserIcon width='13px' />
                    <Footer_block_text>
                        <Footer_block_text_value>Риелтор в агенстве</Footer_block_text_value>
                        <Footer_block_text_value>{agency}</Footer_block_text_value>
                    </Footer_block_text>
                </Footer_block>

                <Footer_block>
                    <HandsIcon width='14px' />
                    <Footer_block_text>
                        <Footer_block_text_value>В продаже {object.length} объекта</Footer_block_text_value>
                        {/* TODO вставить ссылку */}
                        <Footer_link >
                            <Footer_link_text >
                                Посмотреть
                            </Footer_link_text>
                        </Footer_link>
                    </Footer_block_text>
                </Footer_block>

                <Footer_block>
                    <LockIcon width='14px' />
                    <Footer_block_text>
                        <Footer_block_text_value>Безопасная сделка - Вернём деньги, если товар не подойдёт</Footer_block_text_value>
                        <Footer_link >
                            <Footer_link_text >
                                Как работает услуга?
                            </Footer_link_text>
                        </Footer_link>
                    </Footer_block_text>
                </Footer_block>
            </Footer>

        </Container>
    )
}

export default CardAgentContainer;