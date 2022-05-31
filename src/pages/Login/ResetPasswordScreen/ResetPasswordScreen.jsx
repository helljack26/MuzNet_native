import React from 'react';
import { StatusBar } from 'react-native';

import { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from "react-hook-form";
import C from '@/res/colors'
import S from '@/res/strings'

import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import {
    useNavigation
    // , useRoute
} from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    ShowPassIcon,
    ShowPassActiveIcon,
    ErrorIcon,
} = IMAGES;
// Styles
import { style } from '../style'
const {
    Container,
    GoBackButton,
    ContentTitle,
    Header,
    FormBlock,
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,
    ButtonSubmit,
    ButtonSubmitDisable,
    ShowPasswordIconButton,
    ButtonSubmitText,
    ButtonSubmitTextDisable,
    ErrorMessage,
} = style;

const ResetPasswordScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, watch, setError, clearErrors, resetField,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { password: '', passwordRepeat: '' }
        });

    const isKeyboardOpen = isKeyboardShown()

    const [inputFocus, setInputFocus] = useState(C.lightGray);
    const [inputPasswordLabel, setInputPasswordLabel] = useState(false);

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputPasswordRepeatLabel, setInputPasswordRepeatLabel] = useState(false);


    useEffect(() => {
        if (dirtyFields.password === undefined) {
            setInputPasswordLabel(false)
        }
        if (dirtyFields.password === true) {
            setInputPasswordLabel(true)
        }
        if (dirtyFields.passwordRepeat === undefined) {
            setInputPasswordRepeatLabel(false)
        }
        if (dirtyFields.passwordRepeat === true) {
            setInputPasswordRepeatLabel(true)
        }
    }, [dirtyFields.password, dirtyFields.passwordRepeat]);

    const [isValidPassword, setIsValidPassword] = useState('');
    const [isValidPasswordRepeat, setIsValidPasswordRepeat] = useState('');

    const isValid = isValidPassword === isValidPasswordRepeat


    // Password live validation
    const passwordWatch = watch("password");
    useEffect(() => {
        const isEnoughPassword = passwordWatch.length

        if (isEnoughPassword < 8 && isEnoughPassword > 0) {
            setError('password', { type: 'minLength', message: 'Minimum 8 characters' });
        }
        if (isEnoughPassword >= 8) {
            clearErrors('password');
            setIsValidPassword(passwordWatch)
        }
    }, [passwordWatch]);

    // Password repeat live validation
    const passwordRepeatWatch = watch("passwordRepeat");
    useEffect(() => {
        const isEnoughPasswordRepeat = passwordRepeatWatch.length

        setIsValidPasswordRepeat(passwordRepeatWatch)

        if (isEnoughPasswordRepeat < 8 && isEnoughPasswordRepeat > 0) {
            setError('passwordRepeat', { type: 'minLength', message: 'Minimum 8 characters' });
        } else if (passwordWatch !== passwordRepeatWatch) {
            setError('passwordRepeat', { type: 'value', message: "Passwords don't match" });
        }
        if (isEnoughPasswordRepeat >= 8 && passwordWatch === passwordRepeatWatch) {
            clearErrors('passwordRepeat');
        }

    }, [passwordRepeatWatch, passwordWatch]);

    // Submit
    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('password');
        resetField('passwordRepeat');
        setIsValidPassword('')
        setIsValidPasswordRepeat('')
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
                    <GoBackButton onPress={() => { navigation.goBack() }}>
                        <GoBackIcon width={12} height={20} />
                    </GoBackButton>
                    <ContentTitle>
                        Reset Password
                    </ContentTitle>
                </Header>

                {/* Form */}
                <FormBlock >

                    {/* New Password */}
                    <Controller
                        control={control}
                        rules={{
                            required: S.passwordNotValid,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock
                                style={{
                                    marginBottom: errors.password ? 28 : 13,
                                }}
                            >
                                <FormInputContainer>
                                    <FormInput
                                        isPassword={true}
                                        inputLabel={inputPasswordLabel}
                                        secureTextEntry={false}
                                        selectionColor={C.lightGray}
                                        placeholder={'Enter your password'}
                                        cursorColor={C.black}
                                        onFocus={() => setInputFocus(C.black)}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: errors.password ? C.red : inputFocus,
                                            borderWidth: errors.password ? 2 : 1,
                                            color: errors.password ? C.red : C.black,
                                        }}
                                    />

                                </FormInputContainer>
                                <FormInputLabel isError={errors.password} inputLabel={inputPasswordLabel}>Password</FormInputLabel>

                                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="password"
                    />

                    {/* Repeat Password */}
                    <Controller
                        control={control}
                        rules={{
                            required: S.passwordNotValid,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputContainer>
                                    <FormInput
                                        isPassword={true}
                                        inputLabel={inputPasswordRepeatLabel}
                                        secureTextEntry={false}
                                        selectionColor={C.lightGray}
                                        placeholder={'Repeat password'}
                                        cursorColor={C.black}
                                        onFocus={() => setInputFocus1(C.black)}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus1(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: errors.passwordRepeat ? C.red : inputFocus1,
                                            borderWidth: errors.passwordRepeat ? 2 : 1,
                                            color: errors.passwordRepeat ? C.red : C.black,
                                        }}
                                    />
                                    {/* <ShowPasswordIconButton onPress={() => setPasswordShown(!passwordShown)}       >
                                        {!passwordShown ?
                                            <ShowPassIcon width={18} height={18} />
                                            :
                                            <ShowPassActiveIcon width={18} height={18} />
                                        }
                                    </ShowPasswordIconButton> */}
                                </FormInputContainer>
                                <FormInputLabel isError={errors.passwordRepeat} inputLabel={inputPasswordRepeatLabel}>Repeat password</FormInputLabel>

                                {errors.passwordRepeat && <ErrorMessage>{errors.passwordRepeat.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="passwordRepeat"
                    />
                </FormBlock>


                {isValid === true ?
                    <ButtonSubmit
                        isKeyboardOpen={isKeyboardOpen}
                        onPress={handleSubmit(onSubmit)}>
                        <ButtonSubmitText>Save New Password</ButtonSubmitText>
                    </ButtonSubmit>
                    :
                    <ButtonSubmitDisable
                        isKeyboardOpen={isKeyboardOpen}
                    >
                        <ButtonSubmitTextDisable>Save New Password</ButtonSubmitTextDisable>
                    </ButtonSubmitDisable>

                }
            </Container>
        </>

    )
}

export default ResetPasswordScreen;