import React from 'react';
import { KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import C from '@/res/colors'
import F from '@/res/fonts'

import { S } from '@/res/strings'
// Helpers
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
// Images
import IMAGES from '@/res/images'
const {
    WarningGrayIcon,
    GoBackIcon,
    ErrorIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    ContentTitle,
    Header,
    HeaderClose,
    FormBlock,
    FormText,
    FormInputBlock,
    FormInputContainer,
    FormInput,
    ButtonSubmit,
    ButtonSubmitText,
    WarningBlock,
    WarningBlockText,
    ErrorMessage,
} = style;

const CardSendMessage = ({ receiverId, receiverName, isMusician, setOpenSendMessage }) => {
    const { windowHeight, windowWidth } = getWindowDimension()

    const { control, handleSubmit, resetField,
        formState: { errors } } = useForm({
            defaultValues: { userMessage: '' }
        });

    const [inputFocus1, setInputFocus1] = useState(C.lightGray);

    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('userMessage');
        Keyboard.dismiss()
        // navigation.navigate('Chat', { screen: 'ForgetPasswordScreen' })
        return
    };

    const titleText = `Contact ${isMusician ? 'Musician' : 'Vendor'}`

    const vendorDescriptionText = 'Introduce yourself and tell us why you are suitable for this performance.'
    const musicianDescriptionText = `Introduce yourself to ${receiverName} and let him know a little about your event.`
    const descriptionText = isMusician ? musicianDescriptionText : vendorDescriptionText

    return (
        <Container
            style={{
                width: windowWidth,
                height: windowHeight,
            }}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                {/* Header */}
                <Header>
                    <HeaderClose onPress={() => { setOpenSendMessage(false) }}  >
                        <GoBackIcon width={9} height={16} />
                    </HeaderClose>

                    <ContentTitle>
                        {titleText}
                    </ContentTitle>
                </Header>

                <FormText>
                    {descriptionText}
                </FormText>

                {/* Form */}
                <FormBlock >
                    {/* User message */}
                    <Controller
                        control={control}
                        rules={{
                            required: S.emailNotValid,
                            minLength: 10
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock
                                style={{
                                    marginBottom: errors.userMessage ? 32 : 13,
                                }}
                            >
                                <FormInputContainer>
                                    <FormInput
                                        selectionColor={C.lightGray}
                                        multiline={true}
                                        numberOfLines={5}
                                        placeholder={'Write your message'}
                                        placeholderTextColor={C.gray}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus1(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus1(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: errors.userMessage ? C.red : inputFocus1,
                                            borderWidth: errors.userMessage ? 2 : 1,
                                            color: errors.userMessage ? C.red : C.black,
                                            textAlignVertical: 'top'
                                        }}
                                    />
                                </FormInputContainer>

                                {errors.userMessage?.type === 'minLength' && <ErrorMessage>Minimal message length 10 characters</ErrorMessage>}
                                {errors.userMessage?.type === 'required' && <ErrorMessage>Required field</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="userMessage"
                    />
                    <WarningBlock>
                        <WarningGrayIcon width={27} height={27} />
                        <WarningBlockText>
                            For your payment and safety never transfer money or communicate outside of the MuzNet app
                        </WarningBlockText>
                    </WarningBlock>
                </FormBlock>

                <ButtonSubmit
                    onPress={handleSubmit(onSubmit)
                    }
                >
                    <ButtonSubmitText>Send A Message</ButtonSubmitText>
                </ButtonSubmit>


            </KeyboardAvoidingView>
        </Container >
    )
}

export default CardSendMessage;