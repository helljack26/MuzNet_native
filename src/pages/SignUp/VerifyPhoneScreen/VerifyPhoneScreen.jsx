import React from 'react';
import { StatusBar, Keyboard } from 'react-native';

import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from "react-hook-form";
import C from '@/res/colors'
import { S } from '@/res/strings'

import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import GoBack from '@/components/Buttons/GoBack/GoBack'
import ModalWindow from '@/components/ModalWindow'

import {
    useNavigation
    , useRoute
} from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    ErrorIcon,

} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    ContentTitle,
    Header,
    FormInputContainer,
    FormBlock,
    NumberInputsBlock,
    FormInputBlock,
    FormText,
    FormInput,
    ContainerText,
    ContentBlock,
    ContainerLink,
    ContainerLinkText,
} = style;

const VerifyPhoneScreen = () => {
    const navigation = useNavigation();
    const verifingCode = '0000'
    const route = useRoute();
    const userPhoneNumber = route !== undefined && route.params.phoneNumber

    const { control, handleSubmit, resetField, watch, formState: { dirtyFields, errors } } = useForm({
        defaultValues: {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
        }
    });
    // If wrong
    const [isModalOpen, setModalOpen] = useState(false);

    const num1Ref = useRef();
    const num2Ref = useRef();
    const num3Ref = useRef();
    const num4Ref = useRef();

    const num1Watch = watch('num1');
    const num2Watch = watch('num2');
    const num3Watch = watch('num3');
    const num4Watch = watch('num4');

    const concatInputCode = `${num1Watch}${num2Watch}${num3Watch}${num4Watch}`
    console.log("🚀 ~ file: VerifyPhoneScreen.jsx ~ line 70 ~ VerifyPhoneScreen ~ concatInputCode", concatInputCode)

    useEffect(() => {
        if (num1Watch.length === 1 && num2Watch.length === 0) {
            num2Ref.current.focus()
        }
        if (num2Watch.length === 1 && num3Watch.length === 0) {
            num3Ref.current.focus()
        }
        if (num3Watch.length === 1 && num4Watch.length === 0) {
            num4Ref.current.focus()
        }

        console.log("🚀 ~ file: VerifyPhoneScreen.jsx ~ line 84 ~ useEffect ~ oncatInputCode.length ", concatInputCode.length)
        if (num4Watch.length === 1 && concatInputCode.length === 4) {
            if (Number(concatInputCode) === Number(verifingCode)) {
                navigation.navigate('SignUpStack', { screen: 'AddProfileInfo' })
            } else {
                Keyboard.dismiss()
                setModalOpen(true)
            }
        }
    }, [num1Watch.length, num2Watch.length, num3Watch.length, num4Watch.length]);

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputFocus2, setInputFocus2] = useState(C.lightGray);
    const [inputFocus3, setInputFocus3] = useState(C.lightGray);
    const [inputFocus4, setInputFocus4] = useState(C.lightGray);

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />
            <Container>
                <ModalWindow
                    type={true}
                    title={'Wrong code'}
                    advice={'Check the code and try again'}
                    isOpen={isModalOpen}
                    setOpen={setModalOpen}
                />
                {/* Header */}
                <Header>
                    <GoBack />

                    <ContentTitle>
                        Verify your phone
                    </ContentTitle>
                </Header>

                {/* Form */}
                <FormBlock >
                    <FormText>
                        Please enter the verification code we sent to {userPhoneNumber}
                    </FormText>

                    <NumberInputsBlock>
                        {/* Num 1 */}
                        <Controller
                            control={control}

                            render={({ field: { onChange, onBlur, value } }) => (

                                <FormInputContainer>
                                    <FormInput
                                        maxLength={1}
                                        ref={num1Ref}
                                        keyboardType='number-pad'
                                        selectionColor={C.lightGray}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus1(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus1(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: inputFocus1,
                                            borderWidth: 1,
                                            color: inputFocus1 === C.black ? C.black : C.sBlack,
                                        }}
                                    />

                                </FormInputContainer>


                            )}
                            name="num1"
                        />
                        {/* Num 2 */}
                        <Controller
                            control={control}

                            render={({ field: { onChange, onBlur, value } }) => (

                                <FormInputContainer>
                                    <FormInput
                                        maxLength={1}
                                        ref={num2Ref}

                                        keyboardType='number-pad'
                                        selectionColor={C.lightGray}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus2(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus2(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: inputFocus2,
                                            borderWidth: 1,
                                            color: inputFocus2 === C.black ? C.black : C.sBlack,
                                        }}
                                    />

                                </FormInputContainer>

                            )}
                            name="num2"
                        />
                        {/* Num 3 */}
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputContainer>
                                    <FormInput
                                        maxLength={1}
                                        ref={num3Ref}
                                        keyboardType='number-pad'
                                        selectionColor={C.lightGray}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus3(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus3(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: inputFocus3,
                                            borderWidth: 1,
                                            color: inputFocus3 === C.black ? C.black : C.sBlack,
                                        }}
                                    />

                                </FormInputContainer>

                            )}
                            name="num3"
                        />
                        {/* Num 4 */}
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputContainer>
                                    <FormInput
                                        ref={num4Ref}
                                        maxLength={1}
                                        keyboardType='number-pad'
                                        selectionColor={C.lightGray}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus4(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus4(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: inputFocus4,
                                            borderWidth: 1,
                                            color: inputFocus4 === C.black ? C.black : C.sBlack,
                                        }}
                                    />

                                </FormInputContainer>

                            )}
                            name="num4"
                        />
                    </NumberInputsBlock>
                </FormBlock>

                <ContentBlock>


                    <ContainerText>
                        Didn’t recieve the code?
                    </ContainerText>
                    <ContainerLink
                    // onPress={() => {

                    // }}
                    >
                        <ContainerLinkText>
                            Request again
                        </ContainerLinkText>
                    </ContainerLink>
                    <ContainerText>
                        Correct code 0000
                    </ContainerText>
                </ContentBlock>

            </Container>
        </>

    )
}

export default VerifyPhoneScreen;