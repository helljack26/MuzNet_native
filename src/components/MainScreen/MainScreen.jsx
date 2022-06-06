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

} = IMAGES;
// Styles
import { style } from './style'
const {
    Content,
    ContentTitle,
    // Form
    FormBlock,
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,
    ShowPasswordIconButton,
    ErrorMessage,
} = style;

const MainScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, resetField,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { search: '' }
        });

    const isKeyboardOpen = isKeyboardShown()
    const { windowHeight, windowWidth } = getWindowDimension()

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputEmailLabel, setInputEmailLabel] = useState(false);

    return (
        <Content>
            <ContentTitle>
                Welcome
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

            </FormBlock>

        </Content>

    )
}

export default MainScreen;