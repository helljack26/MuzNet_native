import React from 'react';
import { StatusBar } from 'react-native';

import { useState, useEffect } from 'react';
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
    ButtonSubmitText,
    ButtonSubmitTextDisable,
    ShowPasswordIconButton,
    Link,
    LinkText,
    ErrorMessage,
} = style;

const LoginScreen = () => {
    const navigation = useNavigation();
    const { control, handleSubmit, watch, setError, clearErrors, resetField,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { userEmail: '', password: '' }
        });

    const isKeyboardOpen = isKeyboardShown()

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputEmailLabel, setInputEmailLabel] = useState(false);

    const [inputFocus2, setInputFocus2] = useState(C.lightGray);
    const [inputPasswordLabel, setInputPasswordLabel] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(() => {
        if (dirtyFields.userEmail === undefined) {
            setInputEmailLabel(false)
        }
        if (dirtyFields.userEmail === true) {
            setInputEmailLabel(true)
        }
        if (dirtyFields.password === undefined) {
            setInputPasswordLabel(false)
        }
        if (dirtyFields.password === true) {
            setInputPasswordLabel(true)
        }
    }, [dirtyFields.userEmail, dirtyFields.password]);

    // Is both valid
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const isValid = isValidEmail == true && isValidPassword === true

    // Email live validation
    const emailWatch = watch("userEmail");
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function validateEmail(value) {
        return EMAIL_REGEXP.test(value);
    }
    useEffect(() => {
        if (validateEmail(emailWatch)) {
            clearErrors('userEmail');
            setIsValidEmail(true)
        } else if (!validateEmail(emailWatch) && emailWatch.length > 0) {
            setError('userEmail', { type: `pattern`, message: S.emailNotValid });
            setIsValidEmail(false)
        }
    }, [emailWatch]);

    // Password live validation
    const passwordWatch = watch("password");
    useEffect(() => {
        const isEnoughPassword = passwordWatch.length

        if (isEnoughPassword <= 7 && isEnoughPassword > 0) {
            setIsValidPassword(false)
            setError('password', { type: 'minLength', message: 'Minimum 8 characters' });
        }
        if (isEnoughPassword >= 8) {
            clearErrors('password');
            setIsValidPassword(true)
        }
    }, [passwordWatch]);

    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('userEmail');
        resetField('password');
        setIsValidEmail(false)
        setIsValidPassword(false)
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
                    <GoBackButton

                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <GoBackIcon width={12} height={20} />

                    </GoBackButton>
                    <ContentTitle>
                        Log in
                    </ContentTitle>
                </Header>

                {/* Form */}
                <FormBlock >

                    {/* Email or Name */}
                    <Controller
                        control={control}
                        rules={{
                            required: S.emailNotValid,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock
                                style={{
                                    marginBottom: errors.userEmail ? 28 : 13,
                                }}
                            >
                                <FormInputContainer>
                                    <FormInput
                                        inputLabel={inputEmailLabel}
                                        selectionColor={C.lightGray}
                                        placeholder={'Enter your email'}
                                        cursorColor={C.black}
                                        onFocus={() => { setInputFocus1(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus1(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: errors.userEmail ? C.red : inputFocus1,
                                            borderWidth: errors.userEmail ? 2 : 1,
                                            color: errors.userEmail ? C.red : C.black,
                                        }}
                                    />
                                    {errors.userEmail && <ShowPasswordIconButton>
                                        <ErrorIcon width={20} height={20} />
                                    </ShowPasswordIconButton>
                                    }

                                </FormInputContainer>

                                <FormInputLabel isError={errors.userEmail} inputLabel={inputEmailLabel}>Your email</FormInputLabel>
                                {errors.userEmail && <ErrorMessage>{errors.userEmail.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="userEmail"
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
                                        cursorColor={C.black}
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
                            Forget password?
                        </LinkText>
                    </Link>
                </FormBlock>

                {isValid === true ?
                    <ButtonSubmit
                        isKeyboardOpen={isKeyboardOpen}
                        onPress={handleSubmit(onSubmit)}>
                        <ButtonSubmitText>Log in</ButtonSubmitText>
                    </ButtonSubmit>
                    :
                    <ButtonSubmitDisable isKeyboardOpen={isKeyboardOpen}>
                        <ButtonSubmitTextDisable>Log in</ButtonSubmitTextDisable>
                    </ButtonSubmitDisable>

                }
            </Container>
        </>

    )
}

export default LoginScreen;