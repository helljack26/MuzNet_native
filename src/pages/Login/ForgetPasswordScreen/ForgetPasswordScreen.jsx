import React from 'react';
import { StatusBar } from 'react-native';

import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import C from '@/res/colors'
import S from '@/res/strings'

import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import GoBack from '@/components/Buttons/GoBack/GoBack'

import {
    useNavigation
    // , useRoute
} from '@react-navigation/native';

// Images
import IMAGES from '@/res/images'
const {
    ErrorIcon,

} = IMAGES;
// Styles
import { style } from '../style'
const {
    Container,
    ContentTitle,
    Header,
    FormInputContainer,
    FormBlock,
    FormInputBlock,
    FormText,
    FormInputLabel,
    FormInput,
    ShowPasswordIconButton,
    ButtonSubmit,
    ButtonSubmitText,
    ErrorMessage,
} = style;

const ForgetPasswordScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, resetField, formState: { dirtyFields, errors } } = useForm({
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

    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('resetEmail');
        navigation.navigate('LoginStack', { screen: 'ResetPasswordScreen' })
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
                            pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock
                                style={{
                                    marginBottom: errors.resetEmail ? 28 : 13,
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
                                            borderColor: errors.resetEmail ? C.red : inputFocus1,
                                            borderWidth: errors.resetEmail ? 2 : 1,
                                            color: errors.resetEmail ? C.red : C.black,
                                        }}
                                    />
                                    {errors.resetEmail && <ShowPasswordIconButton>
                                        <ErrorIcon width={20} height={20} />
                                    </ShowPasswordIconButton>
                                    }

                                </FormInputContainer>

                                <FormInputLabel isError={errors.resetEmail} inputLabel={inputEmailLabel}>Your email</FormInputLabel>

                                {errors.resetEmail?.type === 'minLength' && <ErrorMessage>{S.emailNotValid}</ErrorMessage>}
                                {errors.resetEmail?.type === 'pattern' && <ErrorMessage>{S.emailNotValid}</ErrorMessage>}
                                {errors.resetEmail && <ErrorMessage>{errors.resetEmail.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="resetEmail"
                    />
                </FormBlock>

                <ButtonSubmit
                    isKeyboardOpen={isKeyboardOpen}
                    onPress={handleSubmit(onSubmit)}
                >
                    <ButtonSubmitText>Send A Link</ButtonSubmitText>
                </ButtonSubmit>


            </Container>
        </>

    )
}

export default ForgetPasswordScreen;