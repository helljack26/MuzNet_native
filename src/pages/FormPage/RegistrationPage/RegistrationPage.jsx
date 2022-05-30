import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import C from '@/res/colors'

// Images
import IMAGES from '@/res/images'
const {
    CheckedIcon,
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
    LinkTextDisable,
    AgreementBlock,
    CheckboxBlock,
    Checkbox,
    AgreementText,
    FooterBlock,
    FooterText,
    ErrorMessage,
} = style;

const RegistrationPage = () => {
    const navigation = useNavigation();

    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: { userValue: '', password: '', codeWord: '', agreementCheckbox: '' }
    });

    const [passwordShown, setPasswordShown] = useState(false);
    const [codeWordShown, setCodeWordShown] = useState(false);

    const [inputFocus1, setInputFocus1] = useState(C.borderGray);
    const [inputFocus2, setInputFocus2] = useState(C.borderGray);
    const [inputFocus3, setInputFocus3] = useState(C.borderGray);

    const [checkboxBorder, setCheckboxBorder] = useState(C.borderGray);
    const [checkboxState, setCheckboxState] = useState();

    const onSubmit = (data) => {
        // Clear input value
        resetField('userValue');
        resetField('password');
        resetField('codeWord');
        setCheckboxState(false)
        console.log(data);
        navigation.navigate(
            'LoginPage',
            // TODO тут может быть текст успешной регистрации
            // {
            //     params: {
            //         afterRegistration: [`Пользователь ${userValue} успешно зарегистрирован`,`Проверьте почту и `],
            //     }
            // }
        )
        return
    };

    return (
        <>
            <Container>
                <HeaderText>
                    Регистрация
                </HeaderText>

                {/* Form */}
                <FormBlock >
                    {/* Email or number */}
                    <Controller
                        control={control}
                        rules={{
                            required: 'Обязательное поле',
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
                                {errors.userValue && <ErrorMessage>Обязательное поле</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="userValue"
                    />

                    {/* Password */}
                    <Controller
                        control={control}
                        rules={{
                            required: 'Обязательное поле',
                            // value: '^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$'
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
                                    <ShowPasswordIconButton
                                        onPress={() => setPasswordShown(!passwordShown)}
                                    >
                                        {!passwordShown ?
                                            <ShowPasswordIcon width={20} height={20} />
                                            :
                                            <ShowPasswordBlueIcon width={20} height={20} />
                                        }
                                    </ShowPasswordIconButton>
                                </FormInputContainer>

                                {errors.password && <ErrorMessage>Обязательное поле</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="password"
                    />

                    {/* Code word */}
                    <Controller
                        control={control}
                        rules={{
                            required: 'Обязательное поле',
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputLabel>
                                    Кодовое слово &nbsp;&nbsp;
                                </FormInputLabel>
                                <FormInputContainer>
                                    <FormInput
                                        secureTextEntry={!codeWordShown ? true : false}
                                        selectionColor={C.mainBlue}
                                        cursorColor={C.mainBlue}
                                        onFocus={() => setInputFocus3(C.mainBlue)}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus3(C.borderGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{ borderColor: `${errors.codeWord ? 'red' : inputFocus3}` }}
                                    />
                                    <ShowPasswordIconButton
                                        type='button'
                                        onPress={() => setCodeWordShown(!codeWordShown)}
                                    >
                                        {!codeWordShown ?
                                            <ShowPasswordIcon width={20} height={20} />
                                            :
                                            <ShowPasswordBlueIcon width={20} height={20} />
                                        }
                                    </ShowPasswordIconButton>
                                </FormInputContainer>

                                {errors.codeWord && <ErrorMessage>Обязательное поле</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="codeWord"
                    />

                    {/* Agreement checkbox */}
                    <AgreementBlock>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange } }) => (
                                <CheckboxBlock
                                    onPress={() => {
                                        setCheckboxBorder(C.borderGray)
                                        setCheckboxState(checkboxState ? false : true)
                                        onChange(true)
                                        checkboxState === true && onChange('')
                                    }
                                    }
                                    style={{
                                        borderColor: errors.agreementCheckbox ? 'red' : checkboxBorder,
                                    }}
                                >
                                    <Checkbox
                                        style={{
                                            opacity: 0,
                                            width: 0,
                                            height: 0,
                                        }}
                                    />
                                    {checkboxState ? <CheckedIcon width={20} height={20} /> : null}

                                </CheckboxBlock>
                            )}
                            name="agreementCheckbox"
                        />

                        <AgreementText>
                            <Link
                                // TODO тут должна быть ссылка на соглашение 
                                onPress={() => navigation.navigate('RulePage')}>
                                <LinkText>
                                    <LinkTextDisable
                                        pointerEvents="none"
                                        style={{
                                            elevation: 2,
                                            zIndex: 5
                                        }}
                                    >Я соглашаюсь с </LinkTextDisable>
                                    правилами использования сервиса
                                    <LinkTextDisable>, </LinkTextDisable>
                                </LinkText>
                            </Link>
                            а также с передачей
                            и обработкой моих данных сервисом. Я подтверждаю своё совершеннолетие и
                            ответственность за размещение объявления
                        </AgreementText>
                    </AgreementBlock>

                    <ButtonSubmit onPress={handleSubmit(onSubmit)}>
                        <ButtonSubmitText>
                            Зарегистрироваться
                        </ButtonSubmitText>
                    </ButtonSubmit>

                    <FooterBlock>
                        <FooterText>
                            Уже есть аккаунт?
                        </FooterText>

                        <Link onPress={() => navigation.navigate('LoginPage')}>
                            <LinkText>
                                Войдите в личный кабинет
                            </LinkText>
                        </Link>
                    </FooterBlock>
                </FormBlock>
            </Container>
        </>
    )
}

export default RegistrationPage;