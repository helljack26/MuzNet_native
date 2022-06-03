import React from 'react';
import { StatusBar } from 'react-native';

import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import C from '@/res/colors'
import F from '@/res/fonts'

import { S } from '@/res/strings'

import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'

import GoBack from '@/components/Buttons/GoBack/GoBack'
import MaskInput from 'react-native-mask-input';

import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    ShowPassIcon,
    ShowPassActiveIcon,
    ErrorIcon,
} = IMAGES;
// Styles
import { style } from '../style'
const {
    Container,
    ContentTitle,
    Header,
    FormBlock,
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,
    ButtonSubmit,
    ButtonSubmitText,
    ShowPasswordIconButton,
    Link,
    LinkText,
    ErrorMessage,
} = style;
import { M } from '@/res/mixin'
const {
    FormInputContainerPhone,
} = M;
const LoginScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, resetField,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { userPhoneNumber: '', password: '' }
        });

    const isKeyboardOpen = isKeyboardShown()

    const [phone, setPhone] = useState('');

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputPhoneLabel, setInputPhoneLabel] = useState(false);

    const [inputFocus2, setInputFocus2] = useState(C.lightGray);
    const [inputPasswordLabel, setInputPasswordLabel] = useState(false);

    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(() => {
        if (dirtyFields.userPhoneNumber === undefined) {
            setInputPhoneLabel(false)
        }
        if (dirtyFields.userPhoneNumber === true) {
            setInputPhoneLabel(true)
        }
        if (dirtyFields.password === undefined) {
            setInputPasswordLabel(false)
        }
        if (dirtyFields.password === true) {
            setInputPasswordLabel(true)
        }
    }, [dirtyFields.userPhoneNumber, dirtyFields.password]);

    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('userPhoneNumber');
        setPhone('');

        resetField('password');
        return
    };

    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />

            <Container>
                {/* Header */}
                <Header>
                    <GoBack />

                    <ContentTitle>
                        Log in
                    </ContentTitle>
                </Header>

                {/* Form */}
                <FormBlock >
                    {/* Phone number */}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            minLength: 17
                        }}
                        render={({ field: { onChange, onBlur } }) => (
                            <FormInputBlock
                                style={{ marginBottom: errors.userPhoneNumber ? 32 : 13 }}
                            >
                                <FormInputContainerPhone>

                                    <MaskInput
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus1(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus1(C.lightGray)
                                        }}
                                        keyboardType='phone-pad'
                                        maxLength={17}
                                        style={{
                                            width: '100%',
                                            flex: 1,
                                            height: 48,
                                            paddingLeft: 16,
                                            borderWidth: 1,
                                            borderRadius: 6,
                                            borderColor: inputFocus1,
                                            fontSize: 17,
                                            fontFamily: F.regular,
                                            color: C.black,
                                            paddingTop: inputPhoneLabel === true ? 17 : 0,
                                            borderColor: errors.userPhoneNumber ? C.red : inputFocus1,
                                            borderWidth: errors.userPhoneNumber ? 2 : 1,
                                            color: errors.userPhoneNumber ? C.red : C.black,
                                        }}
                                        value={phone}
                                        onChangeText={(masked, unmasked) => {
                                            onChange(masked)
                                            setPhone(masked);
                                        }}
                                        placeholder={'Enter your phone number'}
                                        mask={S.phoneMaskPattern}
                                    />
                                    {errors.userPhoneNumber && <ShowPasswordIconButton>
                                        <ErrorIcon width={20} height={20} />
                                    </ShowPasswordIconButton>
                                    }
                                </FormInputContainerPhone>
                                <FormInputLabel isError={errors.userPhoneNumber} inputLabel={inputPhoneLabel}>Phone number</FormInputLabel>

                                {errors.userPhoneNumber?.type === 'required' && <ErrorMessage>{S.inputRequired}</ErrorMessage>}
                                {errors.userPhoneNumber?.type === 'minLength' && <ErrorMessage>{S.phoneNumberNotValid}</ErrorMessage>}

                            </FormInputBlock>
                        )}
                        name="userPhoneNumber"
                    />

                    {/* Password */}
                    <Controller
                        control={control}
                        rules={{
                            required: S.passwordNotValid,
                            minLength: 8,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputContainer>
                                    <FormInput
                                        isPassword={true}
                                        inputLabel={inputPasswordLabel}
                                        secureTextEntry={!passwordShown ? true : false}
                                        selectionColor={C.lightGray}
                                        placeholder={'Enter your password'}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => setInputFocus2(C.black)}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus2(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: errors.password ? C.red : inputFocus2,
                                            borderWidth: errors.password ? 2 : 1,
                                            color: errors.password ? C.red : C.black,
                                        }}
                                    />
                                    <ShowPasswordIconButton onPress={() => setPasswordShown(!passwordShown)}       >
                                        {!passwordShown ?
                                            <ShowPassIcon width={18} height={18} />
                                            :
                                            <ShowPassActiveIcon width={18} height={18} />
                                        }
                                    </ShowPasswordIconButton>
                                </FormInputContainer>
                                <FormInputLabel isError={errors.password} inputLabel={inputPasswordLabel}>Password</FormInputLabel>

                                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                                {errors.password?.type === 'minLength' && <ErrorMessage>{S.passwordMinimum}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="password"
                    />
                    <Link
                        onPress={() => navigation.navigate('LoginStack', { screen: 'ForgetPasswordScreen' })}
                        style={{
                            marginTop: errors.password === undefined ? -12 : 5,
                        }}
                    >
                        <LinkText>
                            Forgot password?
                        </LinkText>
                    </Link>
                </FormBlock>


                <ButtonSubmit
                    isKeyboardOpen={isKeyboardOpen}
                    onPress={handleSubmit(onSubmit)
                    }
                >
                    <ButtonSubmitText>Log in</ButtonSubmitText>
                </ButtonSubmit>

            </Container>
        </>

    )
}

export default LoginScreen;