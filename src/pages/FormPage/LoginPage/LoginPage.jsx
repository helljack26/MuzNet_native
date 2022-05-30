import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
import {
    useNavigation
    // , useRoute 
} from '@react-navigation/native';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    ShowPasswordIcon,
    ShowPasswordBlueIcon
} = IMAGES;
// Styles
import { style } from './style'
const {
    Container,
    HeaderText,
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
    FooterBlock,
    FooterText,
    ErrorMessage,
} = style;

const LoginPage = () => {
    const navigation = useNavigation();
    // const route = useRoute();

    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: { userValue: '', password: '' }
    });

    const [passwordShown, setPasswordShown] = useState(false);
    const [inputFocus1, setInputFocus1] = useState(C.borderGray);
    const [inputFocus2, setInputFocus2] = useState(C.borderGray);

    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value
        resetField('userValue');
        resetField('password');
        return
    };

    return (
        <>
            <Container>
                <HeaderText>
                    Вход в личный кабинет
                </HeaderText>

                {/* Form */}
                <FormBlock >

                    {/* Email or Name */}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputLabel>
                                    E-mail или номер телефона &nbsp;&nbsp;
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
                                        borderColor: `${errors.userValue ? 'red' : inputFocus1}`
                                    }}
                                />
                                {errors.userValue && <ErrorMessage>Не валидный email</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="userValue"
                    />

                    {/* Password */}
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputLabel>
                                    Пароль &nbsp;&nbsp;
                                </FormInputLabel>
                                <FormInputContainer>
                                    <FormInput
                                        secureTextEntry={!passwordShown ? true : false}
                                        selectionColor={C.mainBlue}
                                        cursorColor={C.mainBlue}
                                        onFocus={() => setInputFocus2(C.mainBlue)}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus2(C.borderGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{ borderColor: `${errors.password ? 'red' : inputFocus2}` }}
                                    />
                                    <ShowPasswordIconButton onPress={() => setPasswordShown(!passwordShown)}       >
                                        {!passwordShown ?
                                            <ShowPasswordIcon width={20} height={20} />
                                            :
                                            <ShowPasswordBlueIcon width={20} height={20} />
                                        }
                                    </ShowPasswordIconButton>
                                </FormInputContainer>

                                {errors.password && <ErrorMessage>Проверьте правильность пароля</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="password"
                    />

                    <Link
                        onPress={() => navigation.navigate('ForgetPasswordPage')}
                        style={{
                            marginTop: errors.password === undefined ? -12 : 5,
                        }}
                    >
                        <LinkText>
                            Забыли пароль?
                        </LinkText>
                    </Link>
                    <ButtonSubmit onPress={handleSubmit(onSubmit)}>
                        <ButtonSubmitText>
                            Войти
                        </ButtonSubmitText>
                    </ButtonSubmit>

                    <FooterBlock>
                        <FooterText>
                            Еще нет аккаунта?
                        </FooterText>

                        <Link onPress={() => navigation.navigate('RegistrationPage')}>
                            <LinkText>
                                Зарегистрируйтесь
                            </LinkText>
                        </Link>
                    </FooterBlock>
                </FormBlock>
            </Container>
        </>
    )
}

export default LoginPage;