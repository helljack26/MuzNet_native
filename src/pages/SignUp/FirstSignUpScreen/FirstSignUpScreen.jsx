import React from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { useState, useEffect } from 'react';

import { useForm, Controller } from "react-hook-form";
// import { useState } from 'react';
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { getWindowDimension } from '@/components/helpers/getWindowDimension'

import C from '@/res/colors'
import { S } from '@/res/strings'

// Images
import IMAGES from '@/res/images'
const {
    PlainLogo,
    ShowPassIcon,
    ShowPassActiveIcon,
    ErrorIcon,
    FacebookIcon,
    GoogleIcon,
    PhoneIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    Content,
    ContentTitle,
    // Form
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
    OrBlock,
    OrBorder,
    OrText,
    // Buttons
    ButtonsBlock,
    Button,
    ButtonIconBlock,
    ButtonText,
    ContentBlock,
    ContentBlockRow,
    ContainerText,
    ContainerLink,
    ContainerLinkText,
    AgreementText,
    AgreementBlock,
} = style;

const WelcomeBackScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, resetField,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { userEmail: '', password: '' }
        });

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

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
    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('userEmail');
        resetField('password');
        return navigation.navigate('VerifyScreen', {
            screenTitle: 'Verify your email',
            screenAdvice: `Please enter the verification code we sent to ${data.userEmail}`,
            whereToSendCode: data.userEmail,
            navigateToStackAfterSubmit: 'SignUpStack',
            navigateToScreenAfterSubmit: 'AddProfileInfo',
        })
    };
    return (
        <>
            <StatusBar
                barStyle={'dark-content'}
                hidden={false}
                backgroundColor="transparent"
                translucent={true}
            />
            {/* Image */}
            <Container
                style={{
                    height: windowHeight,
                }}
            >
                <Content
                    style={{
                        height: windowHeight - 60,
                    }}
                >
                    <PlainLogo width={101} height={35} resizeMode="cover" />

                    <ContentTitle>
                        Join MuzNet!
                    </ContentTitle>

                    {/* Form */}
                    <FormBlock >

                        {/* Email or Name */}
                        <Controller
                            control={control}
                            rules={{
                                required: S.emailNotValid,
                                pattern: S.emailValidationPattern,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputBlock
                                    style={{
                                        marginBottom: errors.userEmail ? 32 : 13,
                                    }}
                                >
                                    <FormInputContainer>
                                        <FormInput
                                            inputLabel={inputEmailLabel}
                                            selectionColor={C.lightGray}
                                            placeholder={'Enter your email'}
                                            cursorColor={C.inputCursor}
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

                                    {errors.userEmail?.type === 'minLength' && <ErrorMessage>{S.emailNotValid}</ErrorMessage>}
                                    {errors.userEmail?.type === 'pattern' && <ErrorMessage>{S.emailNotValid}</ErrorMessage>}
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
                                <FormInputBlock
                                    style={{
                                        marginBottom: errors.password ? 32 : 13,
                                    }}>
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

                    </FormBlock>


                    <ButtonSubmit
                        isKeyboardOpen={isKeyboardOpen}
                        onPress={handleSubmit(onSubmit)
                        }
                    >
                        <ButtonSubmitText>Sign Up</ButtonSubmitText>
                    </ButtonSubmit>

                    <OrBlock>
                        <OrBorder></OrBorder>
                        <OrText>OR</OrText>
                        <OrBorder></OrBorder>
                    </OrBlock>

                    <ButtonsBlock>

                        <Button>
                            <ButtonIconBlock>
                                <GoogleIcon width={20} height={20} />
                            </ButtonIconBlock>
                            <ButtonText>
                                Google
                            </ButtonText>
                        </Button>

                        <Button>
                            <ButtonIconBlock>
                                <FacebookIcon width={10} height={20} />
                            </ButtonIconBlock>

                            <ButtonText>
                                Facebook
                            </ButtonText>
                        </Button>

                        <Button
                            onPress={() => {
                                navigation.navigate('SignUpScreen');
                            }}
                        >
                            <ButtonIconBlock>
                                <PhoneIcon width={20} height={20} />
                            </ButtonIconBlock>

                            <ButtonText>
                                Phone
                            </ButtonText>
                        </Button>
                    </ButtonsBlock>

                    <ContentBlock>
                        <ContentBlockRow>

                            <ContainerText>
                                Already have an account?
                            </ContainerText>
                            <ContainerLink
                                onPress={() => {
                                    navigation.navigate('LoginStack', { screen: 'WelcomeBackScreen' })
                                }}
                            >
                                <ContainerLinkText>
                                    Log In
                                </ContainerLinkText>
                            </ContainerLink>
                        </ContentBlockRow>

                        <AgreementBlock>

                            <AgreementText>
                                By signing up, you agree to our Terms of Service and acknowledge that our Privacy Policy applies to you
                            </AgreementText>
                        </AgreementBlock>
                    </ContentBlock>
                </Content>


            </Container>
        </>

    )
}

export default WelcomeBackScreen;