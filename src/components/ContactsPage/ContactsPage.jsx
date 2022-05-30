import React from "react";
import { useEffect, useState } from 'react';
import { Linking } from "react-native";
import { useForm, Controller } from "react-hook-form";
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    PhoneIcon,
    MessageIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    HeaderText,
    ContainerLeftBlock,
    HeaderSubscription,
    PhoneLink,
    MailLink,
    LinkText,
    ContainerRightBlock,
    ButtonSubmit,
    ButtonSubmitText,
    FormTextArea,
    FormInputBlock,
    FormInputLabel,
    FormInput,
    SuccessWindow,
    SuccessWindowText,
    ErrorMessage,
} = style;

const ContactsPage = () => {
    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: { firstName: '', email: '', message: '', }
    });
    const [isSuccess, setSuccess] = useState(false);

    const [inputFocus1, setInputFocus1] = useState(C.borderGray);
    const [inputFocus2, setInputFocus2] = useState(C.borderGray);
    const [inputFocus3, setInputFocus3] = useState(C.borderGray);

    const onSubmit = (data) => {
        console.log("Кайф из формы", data)
        // Clear input value
        resetField('firstName');
        resetField('email');
        resetField('message');
        // Open success window
        setSuccess(true)
    }

    useEffect(() => {
        // Close success window
        if (isSuccess === true) {
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
        }
    }, [isSuccess]);


    return (
        <Container>
            <ContainerLeftBlock>
                <HeaderText>
                    Чем мы можем вам помочь?
                </HeaderText>
                <HeaderSubscription>
                    Позвоните нам или оставьте свой вопрос в форме обратной связи
                </HeaderSubscription>

                {/* Links */}
                <PhoneLink
                    onPress={() => Linking.openURL('tel:+71234567890')}
                >
                    <PhoneIcon width={14} height={15} />
                    <LinkText>
                        +7 (123) 456-78-90
                    </LinkText>
                </PhoneLink>
                <MailLink
                    onPress={() => Linking.openURL('mailto:dom@gmail.com')}
                >
                    <MessageIcon width={14} height={11} />
                    <LinkText>
                        dom@gmail.com
                    </LinkText>
                </MailLink>
            </ContainerLeftBlock>

            {/* Form */}
            <ContainerRightBlock>
                {/* If message send successfully */}
                {isSuccess === true && <SuccessWindow>
                    <SuccessWindowText>
                        Отправлено
                    </SuccessWindowText>
                </SuccessWindow>}

                {/* Name */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Ваше имя
                                {errors.firstName && <ErrorMessage>Обязательное поле*</ErrorMessage>}
                            </FormInputLabel>
                            <FormInput
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus1(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus1(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.firstName ? 'red' : inputFocus1}`
                                }}
                            />
                        </FormInputBlock>
                    )}
                    name="firstName"
                />
                {/* Email */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "E-mail не валидный"
                        }
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                E-mail
                                {errors.email && <ErrorMessage>{errors.email.message || 'Обязательное поле*'}</ErrorMessage>}
                            </FormInputLabel>
                            <FormInput
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus2(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus2(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{ borderColor: `${errors.email ? 'red' : inputFocus2}` }}
                            />
                        </FormInputBlock>
                    )}
                    name="email"
                />

                {/* Message */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Сообщение
                                {errors.message && <ErrorMessage>Обязательное поле*</ErrorMessage>}
                            </FormInputLabel>
                            <FormTextArea
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                multiline={true}
                                numberOfLines={4}
                                onFocus={() => setInputFocus3(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus3(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.message ? 'red' : inputFocus3}`,
                                    textAlignVertical: 'top'
                                }}
                            />
                        </FormInputBlock>
                    )}
                    name="message"
                />
                {/* Submit */}
                <ButtonSubmit
                    onPress={handleSubmit(onSubmit)}
                >
                    <ButtonSubmitText>
                        Отправить сообщение
                    </ButtonSubmitText>
                </ButtonSubmit>

            </ContainerRightBlock>

        </Container>
    )
}

export default ContactsPage;