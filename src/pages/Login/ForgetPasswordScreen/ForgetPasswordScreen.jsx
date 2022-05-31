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
    FormText,
    FormInputLabel,
    FormInput,
    ButtonSubmit,
    ButtonSubmitDisable,
    ButtonSubmitText,
    ButtonSubmitTextDisable,
    ErrorMessage,
} = style;

const ForgetPasswordScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, watch, setError, clearErrors, resetField,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { resetEmail: '' }
        });

    const isKeyboardOpen = isKeyboardShown()

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputEmailLabel, setInputEmailLabel] = useState(false);

    useEffect(() => {
        if (dirtyFields.resetEmail === undefined) {
            setInputEmailLabel(false)
        }
        if (dirtyFields.resetEmail === true) {
            setInputEmailLabel(true)
        }
    }, [dirtyFields.resetEmail]);

    // Is both valid
    const [isValidResetEmail, setIsValidResetEmail] = useState(false);

    // Email live validation
    const emailWatch = watch("resetEmail");
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    function validateEmail(value) {
        return EMAIL_REGEXP.test(value);
    }
    useEffect(() => {
        if (validateEmail(emailWatch)) {
            clearErrors('resetEmail');
            setIsValidResetEmail(true)
        } else if (!validateEmail(emailWatch) && emailWatch.length > 0) {
            setError('resetEmail', { type: `pattern`, message: S.emailNotValid });
            setIsValidResetEmail(false)
        }
    }, [emailWatch]);

    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('resetEmail');
        setIsValidResetEmail(false)
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
                        Reset Password
                    </ContentTitle>
                </Header>

                {/* Form */}
                <FormBlock >
                    <FormText>
                        Please, enter your email address and you
                        will receive a link to create a new password
                    </FormText>

                    {/* Email or Name */}
                    <Controller
                        control={control}
                        rules={{
                            required: S.emailNotValid,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock
                                style={{
                                    // borderColor: `${errors.resetEmail ? C.red : inputFocus1}`,
                                    marginBottom: errors.resetEmail ? 28 : 13,
                                }}
                            >
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
                                        borderColor: errors.resetEmail ? C.red : inputFocus1,
                                        borderWidth: errors.password ? 2 : 1,
                                        color: errors.password ? C.red : C.black,
                                    }}
                                />
                                <FormInputLabel inputLabel={inputEmailLabel}>Your email</FormInputLabel>
                                {errors.resetEmail && <ErrorMessage>{errors.resetEmail.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="resetEmail"
                    />
                </FormBlock>

                {isValidResetEmail === true ?
                    <ButtonSubmit
                        isKeyboardOpen={isKeyboardOpen}
                        onPress={() => {
                            navigation.navigate('LoginStack', { screen: 'ResetPasswordScreen' })
                            handleSubmit(onSubmit)
                        }}
                    >
                        <ButtonSubmitText>Send A Link</ButtonSubmitText>
                    </ButtonSubmit>
                    :
                    <ButtonSubmitDisable

                        isKeyboardOpen={isKeyboardOpen}
                    >
                        <ButtonSubmitTextDisable>Send A Link</ButtonSubmitTextDisable>
                    </ButtonSubmitDisable>

                }
            </Container>
        </>

    )
}

export default ForgetPasswordScreen;