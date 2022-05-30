import React from "react";
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import C from '@/res/colors'

// import axios from 'axios';
// Images
import IMAGES from '@/res/images'
const {
    RenameIcon,
    ShowPasswordIcon,
    ShowPasswordBlueIcon,

} = IMAGES;
// Styles
import { style } from './style'
// Styles
const {
    Container,
    HeaderText,
    // Image container
    UserMainData,
    UserMainDataCol,
    UserAvatarBlock,
    UserAvatar,
    UserAvatarReplaceButton,
    UserMainDataName,
    UserMainDataPosition,
    Form,
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,
    ShowPasswordIconButton,
    ErrorMessage,
    ButtonSubmit,
    ButtonSubmitDisabled,
    ButtonSubmitText,
} = style;

const PersonalData = ({ userPersonalData }) => {
    const {
        // userId,
        userImage,
        userName,
        userSurName,
        userPatronymic,
        userEmail,
        userPhoneNumber,
        userAgency,
        userPosition,
        userCodeWord,
        userPassword,
    } = userPersonalData;

    const { control, handleSubmit, resetField, formState: { errors, isDirty } } = useForm({
        defaultValues: {
            userName: userName,
            userSurName: userSurName,
            userPatronymic: userPatronymic,
            userEmail: userEmail,
            userPhoneNumber: userPhoneNumber,
            userAgency: userAgency,
            userPosition: userPosition,
            userCodeWord: userCodeWord,
            userPassword: userPassword
        }
    });

    //Submit button state shown 
    const [isShowSubmitButton, setShowSubmitButton] = useState(false);
    // Password shown state
    const [codeWordShown, setCodeWordShown] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    // Outline blue if focus
    const [inputFocus1, setInputFocus1] = useState(C.borderGray);
    const [inputFocus2, setInputFocus2] = useState(C.borderGray);
    const [inputFocus3, setInputFocus3] = useState(C.borderGray);
    const [inputFocus4, setInputFocus4] = useState(C.borderGray);
    const [inputFocus5, setInputFocus5] = useState(C.borderGray);
    const [inputFocus6, setInputFocus6] = useState(C.borderGray);
    const [inputFocus7, setInputFocus7] = useState(C.borderGray);
    const [inputFocus8, setInputFocus8] = useState(C.borderGray);
    const [inputFocus9, setInputFocus9] = useState(C.borderGray);

    // Submit button shown useEffect
    useEffect(() => {
        // Check if input was change and show submit button
        if (isDirty) {
            setShowSubmitButton(true)
        } else {
            setShowSubmitButton(false)
        }
    }, [isDirty]);

    //New user image handler 
    const [newAvatar, setNewAvatar] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setNewAvatar(result.uri);
            setShowSubmitButton(true)
        }
    };

    const onSubmit = (data) => {
        if (newAvatar !== undefined) data.uploadAvatar = (newAvatar)
        console.log('кайф', data)
        resetField()
        setShowSubmitButton(false)
        return
    };

    // Message for input error
    const requiredMessage = 'Не может остаться пустым'
    return (
        <Container >
            <UserMainData>

                <UserAvatarBlock>
                    <UserAvatar>
                        {/* Avatar from server */}
                        {newAvatar === null && <Image source={userImage} style={{ width: 122, height: 122 }} resizeMode='stretch' />}
                        {/* Avatar upload from user */}
                        {newAvatar !== null && <Image source={{ uri: newAvatar }} style={{ width: 122, height: 122 }} resizeMode='stretch' />}
                    </UserAvatar>

                    <UserAvatarReplaceButton onPress={pickImage}>
                        <RenameIcon width={18} height={18} />
                    </UserAvatarReplaceButton>

                </UserAvatarBlock>

                <UserMainDataCol>
                    <UserMainDataName>
                        {userName} {userSurName} {userPatronymic}
                    </UserMainDataName>
                    <UserMainDataPosition>
                        {userPosition}
                    </UserMainDataPosition>
                </UserMainDataCol>

            </UserMainData>

            {/* Form */}
            <Form >

                <HeaderText>
                    Личные данные
                </HeaderText>

                {/* Name */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Имя &nbsp;&nbsp;
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
                                    borderColor: `${errors.userName ? 'red' : inputFocus1}`
                                }}
                            />
                            {errors.userName && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userName"
                />

                {/* SurName */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Фамилия &nbsp;&nbsp;
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
                                style={{
                                    borderColor: `${errors.userSurName ? 'red' : inputFocus2}`
                                }}
                            />
                            {errors.userSurName && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userSurName"
                />

                {/* Patronymic */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Отчество &nbsp;&nbsp;
                            </FormInputLabel>
                            <FormInput
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus3(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus3(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.userPatronymic ? 'red' : inputFocus3}`
                                }}
                            />
                            {errors.userPatronymic && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userPatronymic"
                />

                {/* Email */}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                        value: /\S+@\S+\.\S+/
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                E-mail &nbsp;&nbsp;
                            </FormInputLabel>
                            <FormInput
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus4(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus4(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.userEmail ? 'red' : inputFocus4}`
                                }}
                            />
                            {errors.userEmail && <ErrorMessage>Не валидный email</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userEmail"
                />

                {/* Phone Number */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Номер телефона &nbsp;&nbsp;
                            </FormInputLabel>
                            <FormInput
                                keyboardType='numeric'
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus5(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus5(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.userPhoneNumber ? 'red' : inputFocus5}`
                                }}
                            />
                            {errors.userPhoneNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userPhoneNumber"
                />

                {/* Agency */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Агенство &nbsp;&nbsp;
                            </FormInputLabel>
                            <FormInput
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus6(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus6(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.userAgency ? 'red' : inputFocus6}`
                                }}
                            />
                            {errors.userAgency && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userAgency"
                />

                {/* Position */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <FormInputBlock>
                            <FormInputLabel>
                                Должность &nbsp;&nbsp;
                            </FormInputLabel>
                            <FormInput
                                selectionColor={C.mainBlue}
                                cursorColor={C.mainBlue}
                                onFocus={() => setInputFocus7(C.mainBlue)}
                                onBlur={() => {
                                    onBlur
                                    setInputFocus7(C.borderGray)
                                }}
                                onChangeText={onChange}
                                value={value}
                                style={{
                                    borderColor: `${errors.userPosition ? 'red' : inputFocus7}`
                                }}
                            />
                            {errors.userPosition && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userPosition"
                />

                <HeaderText>
                    Конфиденциальность
                </HeaderText>

                {/* Code word */}
                <Controller
                    control={control}
                    rules={{ required: true, }}
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
                                    onFocus={() => setInputFocus8(C.mainBlue)}
                                    onBlur={() => {
                                        onBlur
                                        setInputFocus8(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.userCodeWord ? 'red' : inputFocus8}` }}
                                />
                                <ShowPasswordIconButton
                                    onPress={() => setCodeWordShown(!codeWordShown)}
                                >
                                    {!codeWordShown ?
                                        <ShowPasswordIcon width={20} height={20} />
                                        :
                                        <ShowPasswordBlueIcon width={20} height={20} />
                                    }
                                </ShowPasswordIconButton>
                            </FormInputContainer>

                            {errors.userCodeWord && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userCodeWord"
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
                                    onFocus={() => setInputFocus9(C.mainBlue)}
                                    onBlur={() => {
                                        onBlur
                                        setInputFocus9(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.userPassword ? 'red' : inputFocus9}` }}
                                />
                                <ShowPasswordIconButton
                                    type='button'
                                    onPress={() => setPasswordShown(!passwordShown)}
                                >
                                    {!passwordShown ?
                                        <ShowPasswordIcon width={20} height={20} />
                                        :
                                        <ShowPasswordBlueIcon width={20} height={20} />
                                    }
                                </ShowPasswordIconButton>
                            </FormInputContainer>

                            {errors.userPassword && <ErrorMessage>Проверьте правильность пароля</ErrorMessage>}
                        </FormInputBlock>
                    )}
                    name="userPassword"
                />

                {/* Submit */}
                {isShowSubmitButton ? <ButtonSubmit onPress={handleSubmit(onSubmit)} >
                    <ButtonSubmitText>
                        Сохранить изменения
                    </ButtonSubmitText>
                </ButtonSubmit>
                    :
                    <ButtonSubmitDisabled >
                        <ButtonSubmitText>
                            Сохранить изменения
                        </ButtonSubmitText>
                    </ButtonSubmitDisabled>}
            </Form>
        </Container>
    )
}
export default PersonalData;