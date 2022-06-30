import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Animated, ScrollView, Keyboard, View, Pressable, KeyboardAvoidingView, Image, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import * as ImagePicker from 'expo-image-picker';
// Components
import AccountsTabHeader from '../AccountsTabHeader'
import BottomConfirmPopup from '@/components/BottomConfirmPopup'

// Helpers
import MaskInput from 'react-native-mask-input';
import { getWindowDimension } from '@/components/helpers/getWindowDimension'
import { useAnimateOfferPreview } from './useAnimateOfferPreview';
import { isKeyboardShown } from '@/components/helpers/isKeyboardShown'
import { addDotForNumber } from '@/components/helpers/addDotForNumber'
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    LockGrayIcon,
    EditIcon,
    ErrorIcon,
} = IMAGES;
// Variables
import C from '@/res/colors'
import F from '@/res/fonts'
import { S } from '@/res/strings'
// Styles
import { style } from './style'
const {
    FilterContainer,
    FormScrollView,
    UserAvatarBlock,
    UserAvatarContainer,
    UserAvatar,
    UserAvatarReplaceButton,
    // Form
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,
    FormTextInput,
    FormInputPricePerHourBlock,
    FormInputPricePerHourText,
    CheckboxBlock,
    CheckboxBlockTitle,

    LogOutButton,
    LogOutButtonText,
    ContentBlock,
    ContentBlockRow,
    ButtonSubmit,
    ButtonSubmitText,
} = style;
// Mixins
import { M } from '@/res/mixin'
const {
    ErrorMessage,
    ShowPasswordIconButton,
    FormInputContainerPhone,
} = M;
// Store
import { observer } from 'mobx-react-lite';
import { makeAutoObservable, action, runInAction, observable, set, get } from 'mobx';

import { useAccountApiStore } from '@/stores/AccountApi';

const PersonalMusicianInformation = observer(() => {
    const isKeyboardOpen = isKeyboardShown()

    const { windowHeight, windowWidth } = getWindowDimension()

    // Form 
    const { control, handleSubmit, resetField, setError, watch, clearErrors, setValue,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: {
                userNickName: '',
                userName: '',
                userSurName: '',
                userDescription: '',
                userEmail: '',
                userPhoneNumber: '',
                userLocation: '',
                userAddress: '',
            }
        });

    // Store
    const { contractorAccountDataApi, isOpenPersonalInfoTab, setOpenTabs, changeContactorAccountData } = useAccountApiStore();

    const { onPress, width } = useAnimateOfferPreview()

    useEffect(() => {
        if (isOpenPersonalInfoTab === true) {
            onPress(true)
        }
    }, [isOpenPersonalInfoTab]);
    const contractorAccountData = contractorAccountDataApi[0]

    const userAvatar = contractorAccountData.userAvatar

    const userNameFromStore = contractorAccountData.userName
    const userSurNameFromStore = contractorAccountData.userSurName
    const userDescriptionFromStore = contractorAccountData.userDescription
    const userEmailFromStore = contractorAccountData.userEmail
    const userPhoneNumberFromStore = contractorAccountData.userPhoneNumber
    const userLocationFromStore = contractorAccountData.userLocation
    const userAddressFromStore = contractorAccountData.userAddress

    useEffect(() => {
        if (contractorAccountData) {
            setValue("userName", userNameFromStore);
            setValue("userSurName", userSurNameFromStore);
            setValue("userDescription", userDescriptionFromStore);
            setValue("userEmail", userEmailFromStore);
            setValue("userPhoneNumber", userPhoneNumberFromStore);
            setValue("userLocation", userLocationFromStore);
            setValue("userAddress", userAddressFromStore);
        }
    }, [contractorAccountData]);

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
        }
    };

    const userNameWatch = watch('userName')
    const userSurNameWatch = watch('userSurName')
    const userDescriptionWatch = watch('userDescription')
    const userEmailWatch = watch('userEmail')
    const userPhoneNumberWatch = watch('userPhoneNumber')
    const userLocationWatch = watch('userLocation')
    const userAddressWatch = watch('userAddress')
    const userNickNameWatch = watch('userNickName')

    // Full name input
    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const [inputFocus2, setInputFocus2] = useState(C.lightGray);
    const [inputFocus8, setInputFocus8] = useState(C.lightGray);
    const [inputFocus3, setInputFocus3] = useState(C.lightGray);
    const [inputFocus4, setInputFocus4] = useState(C.lightGray);
    const [inputFocus5, setInputFocus5] = useState(C.lightGray);
    const [inputFocus6, setInputFocus6] = useState(C.lightGray);
    const [inputFocus7, setInputFocus7] = useState(C.lightGray);

    // Shift label state
    const [inputNameLabel, setInputNameLabel] = useState(false);
    const [inputSurNameLabel, setInputSurNameLabel] = useState(false);
    const [inputDescriptionLabel, setInputDescriptionLabel] = useState(false);
    const [descriptionHeight, setDescriptionHeight] = useState(48);

    const [inputEmailLabel, setInputEmailLabel] = useState(false);
    const [inputPhoneLabel, setInputPhoneLabel] = useState(false);
    const [inputLocationLabel, setInputLocationLabel] = useState(false);
    const [inputAddressLabel, setInputAddressLabel] = useState(false);

    // Phone number
    const [phone, setPhone] = useState('');
    useEffect(() => {
        if (contractorAccountData) {
            setPhone(userPhoneNumberFromStore)
        }
    }, [contractorAccountData]);


    const [isShowSubmitButton, setShowSubmitButton] = useState(false);
    const [isSomeFieldChange, setSomeFieldChange] = useState(false);
    useEffect(() => {
        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }
        if (isEmpty(errors) && isSomeFieldChange) {
            setShowSubmitButton(true)
        } else {
            setShowSubmitButton(false)
        }
    }, [errors, isSomeFieldChange]);

    useEffect(() => {
        const isChangedUserNameWatch = userNameWatch !== userNameFromStore
        const isChangedUserSurNameWatch = userSurNameWatch !== userSurNameFromStore
        const isChangedUserDescriptionWatch = userDescriptionWatch !== userDescriptionFromStore
        const isChangedUserEmailWatch = userEmailWatch !== userEmailFromStore
        const isChangedUserPhoneNumberWatch = userPhoneNumberWatch !== userPhoneNumberFromStore
        const isChangedUserLocationWatch = userLocationWatch !== userLocationFromStore

        if (isChangedUserNameWatch || isChangedUserSurNameWatch || isChangedUserDescriptionWatch || isChangedUserEmailWatch || isChangedUserPhoneNumberWatch || isChangedUserLocationWatch) {
            setSomeFieldChange(true)
        } else {
            setSomeFieldChange(false)
        }
    }, [
        userNameFromStore,
        userSurNameFromStore,
        userDescriptionFromStore,
        userEmailFromStore,
        userPhoneNumberFromStore,
        userLocationFromStore,
        userNameWatch,
        userSurNameWatch,
        userDescriptionWatch,
        userEmailWatch,
        userPhoneNumberWatch,
        userLocationWatch
    ]);


    // Set shifting input label
    useEffect(() => {
        if (dirtyFields.userName === undefined || !userNameWatch) {
            setInputNameLabel(false)
        }
        if (dirtyFields.userName !== undefined || userNameWatch) {
            setInputNameLabel(true)
        }

        if (dirtyFields.userSurName === undefined || !userSurNameWatch) {
            setInputSurNameLabel(false)
        }
        if (dirtyFields.userSurName !== undefined || userSurNameWatch) {
            setInputSurNameLabel(true)
        }

        if (dirtyFields.userDescription === undefined || !userDescriptionWatch) {
            setInputDescriptionLabel(false)
        }
        if (dirtyFields.userDescription !== undefined || userDescriptionWatch) {
            setInputDescriptionLabel(true)
        }

        if (dirtyFields.userEmail === undefined || !userEmailWatch) {
            setInputEmailLabel(false)
        }
        if (dirtyFields.userEmail !== undefined || userEmailWatch) {
            setInputEmailLabel(true)
        }

        if (dirtyFields.userPhoneNumber === undefined || !userPhoneNumberWatch) {
            setInputPhoneLabel(false)
        }
        if (dirtyFields.userPhoneNumber !== undefined || userPhoneNumberWatch) {
            setInputPhoneLabel(true)
        }

        if (dirtyFields.userLocation === undefined || !userLocationWatch) {
            setInputLocationLabel(false)
        }
        if (dirtyFields.userLocation !== undefined || userLocationWatch) {
            setInputLocationLabel(true)
        }

        // if (dirtyFields.userAddress === undefined || !userAddressWatch) {
        //     setInputAddressLabel(false)
        // }
        // if (dirtyFields.userAddress !== undefined || userAddressWatch) {
        //     setInputAddressLabel(true)
        // }

    }, [
        userNameWatch,
        userSurNameWatch,
        userDescriptionWatch,
        userEmailWatch,
        userPhoneNumberWatch,
        userLocationWatch,
        // userAddressWatch,
        dirtyFields.userName,
        dirtyFields.userSurName,
        dirtyFields.userDescription,
        dirtyFields.userEmail,
        dirtyFields.userLocation,
        dirtyFields.userAddress,
    ]);

    // Submit
    const onSubmit = (data) => {
        const userLocalAvatar = newAvatar !== null ? newAvatar : userAvatar

        runInAction(() => {
            set(contractorAccountDataApi[0], "userAvatar", userLocalAvatar)
            set(contractorAccountDataApi[0], "userName", data.userName)
            set(contractorAccountDataApi[0], "userSurName", data.userSurName)
            set(contractorAccountDataApi[0], "userDescription", data.userDescription)
            set(contractorAccountDataApi[0], "userEmail", data.userEmail)
            set(contractorAccountDataApi[0], "userPhoneNumber", data.userPhoneNumber)
            set(contractorAccountDataApi[0], "userLocation", data.userLocation)
        })
        return
    };
    // Confirm delete account
    const [isOpenConfirmWindow, setOpenConfirmWindow] = useState(false);
    const [isConfirmDelete, setConfirmDelete] = useState(false);
    return (
        <Animated.View style={{
            zIndex: 1000,
            height: windowHeight,
            // width: windowWidth,
            width,
            justifyContent: 'center',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
        }}
        >
            <FilterContainer
                style={{
                    height: windowHeight,
                    width: windowWidth,
                }}
            >

                {/* Header */}
                <AccountsTabHeader tabName={'Хуйня'} setOpenTabs={setOpenTabs} onPress={onPress} />
                {/* Form */}
                <KeyboardAvoidingView
                    keyboardVerticalOffset={20}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <FormScrollView showsVerticalScrollIndicator={false}>

                        {/* Avatar upload from user */}
                        <UserAvatarBlock>
                            <UserAvatarContainer>

                                <UserAvatar>
                                    {newAvatar !== null ?

                                        <Image source={{ uri: newAvatar }} style={{ width: 120, height: 120 }} resizeMode='stretch' />
                                        :
                                        <Image source={userAvatar} style={{ width: 120, height: 120 }} resizeMode='stretch' />
                                    }
                                </UserAvatar>

                                <UserAvatarReplaceButton onPress={pickImage}>
                                    <EditIcon width={16} height={16} />
                                </UserAvatarReplaceButton>
                            </UserAvatarContainer>
                        </UserAvatarBlock>

                        {/* User Name */}
                        <Controller
                            control={control}
                            rules={{
                                required: S.userNameExistError,
                                pattern: S.userNamePattern
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputBlock
                                    style={{
                                        marginBottom: errors.userName?.type === 'required' ? 35 : (errors.userName?.type === 'pattern' ? 60 : 13),
                                    }}
                                >
                                    <FormInputContainer>
                                        <FormInput
                                            inputLabel={inputNameLabel}
                                            selectionColor={C.lightGray}
                                            placeholder={'Enter your name'}
                                            cursorColor={C.inputCursor}
                                            onFocus={() => { setInputFocus2(C.black) }}
                                            onBlur={() => {
                                                onBlur
                                                setInputFocus2(C.lightGray)
                                            }}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                borderColor: errors.userName ? C.red : inputFocus2,
                                                borderWidth: errors.userName ? 2 : 1,
                                                color: errors.userName ? C.red : C.black,
                                            }}
                                        />
                                        {errors.userName && <ShowPasswordIconButton>
                                            <ErrorIcon width={20} height={20} />
                                        </ShowPasswordIconButton>
                                        }

                                    </FormInputContainer>
                                    <FormInputLabel isError={errors.userName} inputLabel={inputNameLabel}>Your name</FormInputLabel>

                                    {errors.userName?.type === 'pattern' && <ErrorMessage >{S.userNameSymbolExclude}</ErrorMessage>}
                                    {errors.userName?.type === 'required' && <ErrorMessage>{S.inputRequired}</ErrorMessage>}

                                </FormInputBlock>
                            )}
                            name="userName"
                        />

                        {/* User Surname  */}
                        <Controller
                            control={control}
                            rules={{
                                required: S.userNameExistError,
                                pattern: S.userNamePattern
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputBlock
                                    style={{
                                        marginBottom: errors.userSurName?.type === 'required' ? 35 : (errors.userSurName?.type === 'pattern' ? 60 : 13),
                                    }}
                                >
                                    <FormInputContainer>
                                        <FormInput
                                            inputLabel={inputSurNameLabel}
                                            selectionColor={C.lightGray}
                                            placeholder={'Enter your surname'}
                                            cursorColor={C.inputCursor}
                                            onFocus={() => { setInputFocus8(C.black) }}
                                            onBlur={() => {
                                                onBlur
                                                setInputFocus8(C.lightGray)
                                            }}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                borderColor: errors.userSurName ? C.red : inputFocus8,
                                                borderWidth: errors.userSurName ? 2 : 1,
                                                color: errors.userSurName ? C.red : C.black,
                                            }}
                                        />
                                        {errors.userSurName && <ShowPasswordIconButton>
                                            <ErrorIcon width={20} height={20} />
                                        </ShowPasswordIconButton>
                                        }

                                    </FormInputContainer>
                                    <FormInputLabel isError={errors.userSurName} inputLabel={inputSurNameLabel}>Your surname</FormInputLabel>

                                    {errors.userSurName?.type === 'pattern' && <ErrorMessage >{S.userNameSymbolExclude}</ErrorMessage>}
                                    {errors.userSurName?.type === 'required' && <ErrorMessage>{S.inputRequired}</ErrorMessage>}

                                </FormInputBlock>
                            )}
                            name="userSurName"
                        />

                        {/* User Description  */}
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputBlock>
                                    <FormInputContainer>
                                        <FormTextInput
                                            inputLabel={inputDescriptionLabel}
                                            selectionColor={C.lightGray}
                                            multiline={true}
                                            numberOfLines={5}
                                            placeholder={'Enter your description'}
                                            cursorColor={C.inputCursor}
                                            onContentSizeChange={e => setDescriptionHeight(e.nativeEvent.contentSize.height)}
                                            onFocus={() => { setInputFocus3(C.black) }}
                                            onBlur={() => {
                                                onBlur
                                                setInputFocus3(C.lightGray)
                                            }}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                borderColor: inputFocus3,
                                                borderWidth: 1,
                                                height: descriptionHeight,
                                                textAlignVertical: 'top',
                                                color: C.black,
                                            }}
                                        />
                                    </FormInputContainer>
                                    <FormInputLabel inputLabel={inputDescriptionLabel}>Your description</FormInputLabel>

                                </FormInputBlock>
                            )}
                            name="userDescription"
                        />

                        {/* Email */}
                        <Controller
                            control={control}
                            rules={{
                                required: S.emailNotValid,
                                pattern: S.emailValidationPattern,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputBlock
                                    style={{
                                        marginBottom: errors.userEmail ? 40 : 13,
                                    }}
                                >
                                    <FormInputContainer>
                                        <FormInput
                                            inputLabel={inputEmailLabel}
                                            selectionColor={C.lightGray}
                                            placeholder={'Enter your email'}
                                            cursorColor={C.inputCursor}
                                            onFocus={() => { setInputFocus4(C.black) }}
                                            onBlur={() => {
                                                onBlur
                                                setInputFocus4(C.lightGray)
                                            }}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                borderColor: errors.userEmail ? C.red : inputFocus4,
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

                        {/* Phone number */}
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                minLength: userPhoneNumberFromStore !== userPhoneNumberWatch ? 17 : 15
                            }}
                            render={({ field: { onChange, onBlur } }) => (
                                <View >
                                    <FormInputBlock
                                        style={{
                                            marginBottom: errors.userPhoneNumber ? 32 : 13
                                        }
                                        }
                                    >
                                        <FormInputContainerPhone>
                                            <MaskInput
                                                cursorColor={C.inputCursor}
                                                onFocus={() => { setInputFocus1(C.black) }}
                                                onBlur={() => {
                                                    onBlur
                                                    setInputFocus1(C.lightGray)
                                                }}
                                                keyboardType='phone-pad'
                                                maxLength={17}
                                                style={{
                                                    width: '100%',
                                                    flex: 1,
                                                    height: 48,
                                                    paddingLeft: 16,
                                                    borderWidth: 1,
                                                    borderLeftWidth: 1,
                                                    borderRadius: 6,
                                                    borderColor: inputFocus1,
                                                    fontSize: 17,
                                                    fontFamily: F.regular,
                                                    color: C.black,
                                                    paddingTop: inputPhoneLabel === true ? 13 : 0,
                                                    borderColor: errors.userPhoneNumber ? C.red : inputFocus1,
                                                    borderWidth: errors.userPhoneNumber ? 2 : 1,
                                                    color: errors.userPhoneNumber ? C.red : C.black,
                                                }}
                                                placeholder={'Enter your phone'}
                                                placeholderTextColor={C.placeholder}
                                                value={phone}
                                                onChangeText={(masked, unmasked) => {
                                                    onChange(masked)
                                                    setPhone(masked);
                                                }}
                                                mask={['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                            />
                                            {errors.userPhoneNumber && <ShowPasswordIconButton>
                                                <ErrorIcon width={20} height={20} />
                                            </ShowPasswordIconButton>
                                            }
                                        </FormInputContainerPhone>
                                        <FormInputLabel
                                            isError={errors.userPhoneNumber} inputLabel={inputPhoneLabel}>Contact phone</FormInputLabel>

                                        {errors.userPhoneNumber?.type === 'required' && <ErrorMessage>{S.inputRequired}</ErrorMessage>}
                                        {errors.userPhoneNumber?.type === 'minLength' && <ErrorMessage>{S.phoneNumberNotValid}</ErrorMessage>}
                                    </FormInputBlock>
                                </View>
                            )}
                            name="userPhoneNumber"
                        />

                        {/* User location  */}
                        <Controller
                            control={control}
                            rules={{
                                required: false,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <FormInputBlock>
                                    <FormInputContainer>
                                        <FormInput
                                            inputLabel={inputLocationLabel}
                                            selectionColor={C.lightGray}
                                            placeholder={'Enter your location'}
                                            cursorColor={C.inputCursor}
                                            onFocus={() => { setInputFocus5(C.black) }}
                                            onBlur={() => {
                                                onBlur
                                                setInputFocus5(C.lightGray)
                                            }}
                                            onChangeText={onChange}
                                            value={value}
                                            style={{
                                                borderColor: inputFocus5,
                                                borderWidth: 1,
                                                color: C.black,
                                            }}
                                        />
                                    </FormInputContainer>
                                    <FormInputLabel inputLabel={inputLocationLabel}>Your location</FormInputLabel>

                                </FormInputBlock>
                            )}
                            name="userLocation"
                        />

                        {/* Delete Account */}
                        <LogOutButton
                            onPress={() => {
                                setOpenConfirmWindow(true)
                            }}
                        >
                            <LogOutButtonText>
                                Delete Account
                            </LogOutButtonText>
                        </LogOutButton>

                    </FormScrollView>

                </KeyboardAvoidingView>

                {/* Footer block */}
                {isShowSubmitButton && <ContentBlock
                    style={{
                        width: windowWidth,
                    }}
                    isKeyboardOpen={isKeyboardOpen}>
                    <ContentBlockRow>

                        <ButtonSubmit
                            activeOpacity={0.2}
                            style={{
                                width: '100%',
                                backgroundColor: C.black,
                            }}

                            onPress={handleSubmit(onSubmit)} >
                            <ButtonSubmitText >
                                Save changes
                            </ButtonSubmitText>
                        </ButtonSubmit>
                    </ContentBlockRow>
                </ContentBlock>
                }

            </FilterContainer>

            {/* Confirm popup */}
            <BottomConfirmPopup
                isOpenBottomPopup={isOpenConfirmWindow}
                setOpenBottomPopup={setOpenConfirmWindow}
                setConfirm={setConfirmDelete}
                confirmBtnText={'Delete Account'}
                popupMainText={'Are you sure you want to delete your account? '}
            />
        </Animated.View >
    )
})

export default PersonalMusicianInformation;

