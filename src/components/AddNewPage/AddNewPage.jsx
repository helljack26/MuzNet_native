import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ADDNEWITEMHASHLINK } from '@/res/addNewItemHashLink';

import FormContainer from './FormContainer/FormContainer';

// Styles
import { style } from './style'
const {
    Container,
    ContainerBlock,
    HeaderText,
    Header,
    HeaderNavbar,
    HeaderNavbarLink,
    HeaderNavbarLinkText,
    HeaderBlock,
    HeaderBlockRadio,
    HeaderBlockRadioLabel,
    RadioBorder,
    RadioRound,
    RadioText,
} = style;

const AddNewPage = () => {
    const scrollViewRef = useRef(null)
    const scrollTop = () => {
        if (scrollViewRef.current) scrollViewRef.current.scrollTo({ y: 0, animated: false })
    }

    const navigation = useNavigation();
    const initialCategoty = ADDNEWITEMHASHLINK[0].hash
    const [categoryForSubmit, setCategoryForSubmit] = useState(initialCategoty);
    const [tab, setTab] = useState(initialCategoty);

    const [isRentTab, setRentTab] = useState(false);
    const [isReset, setReset] = useState();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            scrollTop()
            setTab(initialCategoty)
            setCategoryForSubmit(initialCategoty)
            setRentTab(false)
        });
        return unsubscribe;
    }, [navigation]);

    //Radio button handler, onPress set correct hash 
    const rentTabHandler = (bool) => {
        setRentTab(bool)
        setCategoryForSubmit(tab)
    }
    const combine = (hash) => {
        setRentTab(false)
        setReset(true)
        setTab(hash)
        setCategoryForSubmit(hash)
    }
    return (
        <Container ref={scrollViewRef}>
            <Header>
                <HeaderText>
                    Разместить объявление
                </HeaderText>
                <HeaderBlock>

                    <HeaderNavbar>
                        {ADDNEWITEMHASHLINK.map((item, id) => {
                            const isLast = ADDNEWITEMHASHLINK.length - 1 === id
                            const { title, hash, rentHash } = item;
                            const isRentHash = rentHash !== undefined && rentHash
                            const isActive = tab === hash || tab === isRentHash
                            return (
                                <HeaderNavbarLink
                                    onPress={() => combine(hash)}
                                    isActive={isActive}
                                    key={id}
                                    style={{ borderBottomWidth: isLast ? 0 : 1 }}
                                >
                                    <HeaderNavbarLinkText
                                        isActive={isActive}
                                    >
                                        {title}
                                    </HeaderNavbarLinkText>
                                </HeaderNavbarLink>
                            )
                        })}

                    </HeaderNavbar>
                    {/*Not for complex */}
                    {tab !== ADDNEWITEMHASHLINK[1].hash ? <HeaderBlockRadio>
                        <HeaderBlockRadioLabel
                            isRentTab={isRentTab}
                            onPress={() => rentTabHandler(false)}>
                            <RadioBorder><RadioRound isRentTab={isRentTab}></RadioRound></RadioBorder>

                            <RadioText>
                                Продажа
                            </RadioText>
                        </HeaderBlockRadioLabel>

                        <HeaderBlockRadioLabel
                            isRentTab={!isRentTab}
                            onPress={() => rentTabHandler(true)}>
                            <RadioBorder><RadioRound isRentTab={!isRentTab}></RadioRound></RadioBorder>

                            <RadioText>
                                Аренда
                            </RadioText>
                        </HeaderBlockRadioLabel>
                    </HeaderBlockRadio> : null
                    }
                </HeaderBlock>
            </Header>

            <ContainerBlock>

                <FormContainer isRentTab={isRentTab} categoryForSubmit={categoryForSubmit} isReset={isReset} />

            </ContainerBlock>

        </Container>

    )
}

export default AddNewPage;