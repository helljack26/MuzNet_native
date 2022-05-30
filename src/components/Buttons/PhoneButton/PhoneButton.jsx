import React, { useState } from 'react';
import { Linking } from "react-native";

// Styles
import styled from 'styled-components/native';
import C from '@/res/colors'
import F from '@/res/fonts'

const PhoneBtn = styled.TouchableOpacity`
border-radius: 8px;
width: 49%;
display: flex;
align-items: center;
justify-content: center;
padding: 15px 0px;
background-color: ${C.mainBlue};
`
const PhoneButtonText = styled.Text`
font-size: 14px;
font-family: ${F.medium};
color: white;
`
const Contact = styled.View`
margin-top: 5px;
width: 49%;
display: flex;
flex-direction: column;
align-items: center;

`
const ContactNumber = styled.Text`
font-size: 17px;
font-family: ${F.medium};
color: ${C.mainBlue};
`

const PhoneButton = ({ contactNumbers }) => {
    const [isOpen, setType] = useState(false);

    return (contactNumbers !== undefined &&
        <>
            {isOpen === false && <PhoneBtn onPress={() => setType(true)}>
                <PhoneButtonText>
                    Позвонить
                </PhoneButtonText>
            </PhoneBtn>
            }
            {isOpen === true &&
                <Contact>
                    {contactNumbers.map((number, id) => {
                        const isLast = id === contactNumbers.length - 1 ? 0 : 15;
                        return <ContactNumber
                            style={{
                                marginBottom: isLast
                            }}
                            key={id}
                            onPress={() => Linking.openURL(`tel:${number}`)}
                        >
                            {number}
                        </ContactNumber>
                    })
                    }
                </Contact>
            }
        </>
    )
}

export default PhoneButton;

