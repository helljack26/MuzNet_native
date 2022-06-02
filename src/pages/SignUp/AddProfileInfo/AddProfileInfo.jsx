import React from 'react';
import { Image, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { useForm, Controller } from "react-hook-form";

import { useState, useEffect } from 'react';

// Components
import SelectProfileType from './SelectProfileType'
import SelectMusicianType from './SelectMusicianType'
import SelectWithSearch from './SelectWithSearch'
import DropSelect from '@/components/DropSelect'

// Variables
import C from '@/res/colors'
import { S } from '@/res/strings'

import { isKeyboardShown } from '@/components/helpers/isKeyboardShown';
import { useNavigation } from '@react-navigation/native';

// Mixins
import { M } from '@/res/mixin'
const {
    ErrorMessage,
    ShowPasswordIconButton,
    DisableBtn,
    BlackBtnTextDisable,
} = M;

// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
    RoundGreenCheckIcon,
    ShowPassActiveIcon,
    ErrorIcon,
    UploadPhotoIcon,
    EditIcon
} = IMAGES;

// Styles
import { style } from './style'

const {
    Container,
    Header,
    StepBackButton,
    TabNumberIndication,
    TabNumberText,
    ProgressBar,
    ProgressBarLine,
    ContainerTitle,
    ContainerDescription,
    // Form
    Content,
    FormInputBlock,
    FormInputContainer,
    FormInputLabel,
    FormInput,

    // Submit
    ButtonSubmitBlock,
    // ButtonSubmitBlockSkip,
    // ButtonSubmitBlockSkipText,
    ButtonSubmit,
    ButtonSubmitText,
    ContentBlock,

    // Main Info
    UserMainInfoContainer,
    UserAvatarBlock,
    UserAvatarContainer,
    UserAvatar,
    UserAvatarReplaceButton,
    UserAvatarButton,
    UserAvatarButtonText,

    ContentBlockRow,
    ContainerText,
    ContainerLink,
    ContainerLinkText,
} = style;

const SignUpContentContractor = [
    {
        tabNumber: 1,
        fullNumber: 4,
        title: 'Welcome to MuzNet!',
        text: 'Please, pick a username',
        progressWidth: 15
    },
    {
        tabNumber: 2,
        fullNumber: 4,
        title: 'Welcome to MuzNet!',
        text: 'Select profile type according to your needs',
        progressWidth: 32
    },
    {
        tabNumber: 3,
        fullNumber: 4,
        title: 'Welcome to MuzNet!',
        text: 'Select profile position',
        progressWidth: 60
    },
    {
        tabNumber: 4,
        fullNumber: 4,
        title: 'Welcome to MuzNet!',
        text: 'Lets add profile information',
        progressWidth: 100
    },
]
const SignUpContentMusician = [
    {
        tabNumber: 1,
        fullNumber: 6,
        title: 'Welcome to MuzNet!',
        text: 'Please, pick a username',
        progressWidth: 15
    },
    {
        tabNumber: 2,
        fullNumber: 6,
        title: 'Welcome to MuzNet!',
        text: 'Select profile type according to your needs',
        progressWidth: 32
    },
    {
        tabNumber: 3,
        fullNumber: 6,
        title: 'Welcome to MuzNet!',
        text: 'Select profile type according to your needs',
        progressWidth: 50
    },
    {
        tabNumber: 4,
        fullNumber: 6,
        title: 'Welcome to MuzNet!',
        text: 'Please choose your musical instrument',
        progressWidth: 65
    },
    {
        tabNumber: 5,
        fullNumber: 6,
        title: 'Welcome to MuzNet!',
        text: 'Please choose your music genres',
        progressWidth: 85
    },
    {
        tabNumber: 6,
        fullNumber: 6,
        title: 'Welcome to MuzNet!',
        text: 'Lets add profile information',
        progressWidth: 100
    },
]
const SignUpContentBand = [
    {
        tabNumber: 1,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Please, pick a username',
        progressWidth: 14
    },
    {
        tabNumber: 2,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Select profile type according to your needs',
        progressWidth: 28
    },
    {
        tabNumber: 3,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Select profile type according to your needs',
        progressWidth: 42
    },
    {
        tabNumber: 4,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Please, choose group members',
        progressWidth: 56
    },
    {
        tabNumber: 5,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Please choose your musical instrument',
        progressWidth: 70
    },
    {
        tabNumber: 6,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Please choose your music genres',
        progressWidth: 84
    },
    {
        tabNumber: 7,
        fullNumber: 7,
        title: 'Welcome to MuzNet!',
        text: 'Lets add profile information',
        progressWidth: 100
    },
]


const AddProfileInfo = () => {
    const navigation = useNavigation();
    const isKeyboardOpen = isKeyboardShown()

    // Tab logic
    const [screenNumber, setScreenNumber] = useState(0);
    // const [screenNumberFull, setScreenNumberFull] = useState(4);

    // Flow type
    const [isContractor, setContractorFlow] = useState(true);
    // Check is musician or band flow
    const [isMusician, setMusicianFlow] = useState(true);
    // Set musician or band data
    const [isMusicianData, setMusicianData] = useState(true);
    useEffect(() => {
        if (isMusician === false) {
            setMusicianData(SignUpContentBand)
        } else {
            setMusicianData(SignUpContentMusician)
        }
    }, [isMusician]);

    // Flow data
    const isContractorData = isContractor === true ? SignUpContentContractor : isMusicianData
    // Tab number / Header
    const tabNumber = isContractorData[screenNumber].tabNumber
    const tabFullNumber = isContractorData[screenNumber].fullNumber
    const title = isContractorData[screenNumber].title
    const text = isContractorData[screenNumber].text
    const progressWidth = isContractorData[screenNumber].progressWidth
    // Is disable button
    const [isDisableButton, setIsDisableButton] = useState(false);
    // Form 
    const { control, handleSubmit, resetField, setError, watch, clearErrors,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: {
                userName: '',
                userFullName: '',
                userDescription: '',
                userEmail: '',
                userLocation: '',
                userAddress: '',
            }
        });

    // Tab 1 Name
    const [inputFocus1, setInputFocus1] = useState(C.lightGray);
    const watchUserName = watch("userName");

    const [isNameExist, setIsNameExist] = useState();
    const [isListenNameInput, setIsListenNameInput] = useState(false);

    const usersBase = ['Us', 'User1234']
    const isExist = usersBase.find(item => item === watchUserName);

    useEffect(() => {
        if (watchUserName.length > 1) {
            if (isExist === undefined) {
                clearErrors('userName');
                setIsNameExist(false)
                setInputFocus1(C.green)
                setIsDisableButton(false)
            }
            if (isExist !== undefined) {
                setError('userName', { type: 'value', message: S.userNameExistError });
                setIsNameExist(true)
                setIsDisableButton(true)
            }
        }
        if (watchUserName.length > 0) {
            setIsListenNameInput(true)
        }
        if (watchUserName.length <= 1 && isListenNameInput) {
            setError('userName', { type: 'value', message: 'Minimum 2 characters' });
            setIsNameExist(true)
            setIsDisableButton(true)
        }

    }, [watchUserName, isListenNameInput])

    // Tab 2 Contractor/Musician 
    const [userType, setUserType] = useState();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setScreenNumber(0)
            // setUserType(S.Musician)
        });

        return unsubscribe;
    }, [navigation]);

    const [isOpen, setIsOpen] = useState(false);
    const [positionType, setPositionType] = useState(null);
    const toggling = (state) => setIsOpen(state);
    const onPositionSelect = value => () => { setPositionType(value); setIsOpen(false); };

    // Tab 3 For musician
    const [musicianType, setMusicianType] = useState();

    // Tab Choose musical instrument
    const [chosenInstrument, getChosenInstrument] = useState([]);

    // Tab Choose genres
    const [chosenGenres, getChosenGenres] = useState([]);

    // Tab Last with main user info
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
    // Full name input
    const [inputFocus2, setInputFocus2] = useState(C.lightGray);
    const [inputFocus3, setInputFocus3] = useState(C.lightGray);
    const [inputFocus4, setInputFocus4] = useState(C.lightGray);
    const [inputFocus5, setInputFocus5] = useState(C.lightGray);
    const [inputFocus6, setInputFocus6] = useState(C.lightGray);

    const [inputFullNameLabel, setInputFullNameLabel] = useState(false);
    const [inputDescriptionLabel, setInputDescriptionLabel] = useState(false);
    const [inputEmailLabel, setInputEmailLabel] = useState(false);
    const [inputLocationLabel, setInputLocationLabel] = useState(false);
    const [inputAddressLabel, setInputAddressLabel] = useState(false);
    useEffect(() => {
        if (dirtyFields.userFullName === undefined) {
            setInputFullNameLabel(false)
        }
        if (dirtyFields.userFullName !== undefined) {
            setInputFullNameLabel(true)
        }

        if (dirtyFields.userDescription === undefined) {
            setInputDescriptionLabel(false)
        }
        if (dirtyFields.userDescription !== undefined) {
            setInputDescriptionLabel(true)
        }

        if (dirtyFields.userEmail === undefined) {
            setInputEmailLabel(false)
        }
        if (dirtyFields.userEmail !== undefined) {
            setInputEmailLabel(true)
        }

        if (dirtyFields.userLocation === undefined) {
            setInputLocationLabel(false)
        }
        if (dirtyFields.userLocation !== undefined) {
            setInputLocationLabel(true)
        }

        if (dirtyFields.userAddress === undefined) {
            setInputAddressLabel(false)
        }
        if (dirtyFields.userAddress !== undefined) {
            setInputAddressLabel(true)
        }

    }, [
        dirtyFields.userFullName,
        dirtyFields.userDescription,
        dirtyFields.userEmail,
        dirtyFields.userLocation,
        dirtyFields.userAddress
    ]);
    // Submit
    const onSubmit = (data) => {
        if (newAvatar !== undefined) data.uploadAvatar = (newAvatar)
        if (chosenInstrument !== undefined) data.userMusicalInstrument = (chosenInstrument)
        if (chosenGenres !== undefined) data.userGenres = (chosenGenres)

        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value

        return
    };

    // Check data and set next tab
    const formCheck = () => {
        switch (tabNumber) {
            case 1:
                if (isExist === undefined && watchUserName.length > 1) {
                    setScreenNumber(1)
                    setIsListenNameInput(true)
                }
                if (watchUserName.length < 1) { setError('userName', { type: 'value', message: 'Minimum 2 characters' }); }
                break;
            case 2:
                setScreenNumber(2)
                break;
            case 3:
                setScreenNumber(3)
                break;
            case 4:
                if (musicianType !== S.Band && userType !== S.Contractor) {
                    setScreenNumber(4)
                }
                break;
            case 5:
                if (musicianType !== S.Band && userType !== S.Contractor) {
                    setScreenNumber(5)
                }
                break;
            default:
                break;
        }
        return
    };
    // Is musician and singer choose instrument 
    const isMusicianOrSinger = musicianType === S.Singer || musicianType === S.Musician
    const isInstrumentsSearchSelect = (tabNumber === 4) && isMusicianOrSinger
    const isGenresSearchSelect = (tabNumber === 5) && isMusicianOrSinger


    // Button Disable/Active 
    useEffect(() => {
        if (tabNumber === 1) {
            setIsDisableButton(true)
            // Active button if return from second tab
            if (watchUserName.length > 1) setIsDisableButton(false)
        }
        if (tabNumber === 2) {
            setIsDisableButton(true)
            if (userType !== undefined) setIsDisableButton(false)
        }
        if (tabNumber === 3 && userType === S.Contractor) {
            setIsDisableButton(true)
            if (positionType !== null) setIsDisableButton(false)
        }
        if (tabNumber === 3 && userType === S.Musician) {
            setIsDisableButton(true)
            if (musicianType !== null) setIsDisableButton(false)
        }
        if (isInstrumentsSearchSelect) {
            if (chosenInstrument.length === 0) { setIsDisableButton(true) }
            else { setIsDisableButton(false) }
        }
        if (isGenresSearchSelect) {
            if (chosenGenres.length === 0) {
            }
            else { setIsDisableButton(false) }
        }

    }, [tabNumber, positionType, musicianType, chosenInstrument, chosenGenres])


    const isContractorMainForm = tabNumber === 4 && userType === S.Contractor
    const isMusicianOrSingerMainForm = tabNumber === 6 && isMusicianOrSinger
    const isBandMainForm = tabNumber === 6 && isMusicianOrSinger

    const typeOfForm = isContractorMainForm || isMusicianOrSingerMainForm || isBandMainForm
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
                    {tabNumber > 1 && <StepBackButton
                        onPress={() => {
                            setScreenNumber(screenNumber - 1)
                        }}>

                        <GoBackIcon width={10} height={16} />
                    </StepBackButton>
                    }
                    <TabNumberIndication>
                        <TabNumberText
                            isActive={true}>
                            {tabNumber}
                        </TabNumberText>
                        <TabNumberText> of {tabFullNumber}
                        </TabNumberText>

                    </TabNumberIndication>


                    {/* Pregress bar */}
                    <ProgressBar>
                        <ProgressBarLine progressWidth={progressWidth}>

                        </ProgressBarLine>

                    </ProgressBar>

                    {/* Title */}
                    <ContainerTitle>
                        {title}
                    </ContainerTitle>
                    <ContainerDescription>
                        {text}
                    </ContainerDescription>

                </Header>

                <Content
                    scrollEnabled={!isInstrumentsSearchSelect}
                    nestedScrollEnabled={true}
                    style={{
                        marginBottom: isKeyboardOpen === true ? 100 : 0,
                    }}
                    showsVerticalScrollIndicator={false}
                >
                    {/* =========== Tab 1 =========== */}
                    {tabNumber === 1 && <Controller
                        control={control}
                        rules={{
                            required: S.userNameExistError,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock
                                style={{
                                    marginBottom: errors.userName ? 40 : 13,
                                }}
                            >
                                <FormInputContainer>
                                    <FormInput
                                        selectionColor={C.lightGray}
                                        placeholder={'Username'}
                                        cursorColor={C.inputCursor}
                                        onFocus={() => { setInputFocus1(C.black) }}
                                        onBlur={() => {
                                            onBlur
                                            setInputFocus1(C.lightGray)
                                        }}
                                        onChangeText={onChange}
                                        value={value}
                                        style={{
                                            borderColor: errors.userName ? C.red : inputFocus1,
                                            borderWidth: errors.userName ? 2 : 1,
                                            color: errors.userName ? C.red : C.black,
                                        }}
                                    />
                                    {errors.userName && <ShowPasswordIconButton>
                                        <ErrorIcon width={20} height={20} />
                                    </ShowPasswordIconButton>
                                    }
                                    {isNameExist === false && <ShowPasswordIconButton>
                                        <RoundGreenCheckIcon width={24} height={24} />
                                    </ShowPasswordIconButton>
                                    }

                                </FormInputContainer>

                                {errors.userName && <ErrorMessage>{errors.userName.message}</ErrorMessage>}
                            </FormInputBlock>
                        )}
                        name="userName"
                    />
                    }

                    {/* =========== Tab 2 =========== */}
                    {tabNumber === 2 &&
                        <SelectProfileType
                            userType={userType}
                            setUserType={setUserType}
                            setIsDisableButton={setIsDisableButton}
                            setContractorFlow={setContractorFlow}
                        />
                    }

                    {/* =========== Tab 3 Contractor =========== */}
                    {(tabNumber === 3 && userType === S.Contractor) &&
                        <DropSelect selectedValue={positionType} toggling={toggling} isOpen={isOpen} onSelect={onPositionSelect} />
                    }

                    {/* =========== Tab 3 Musician =========== */}
                    {(tabNumber === 3 && userType === S.Musician) &&
                        <SelectMusicianType
                            musicianType={musicianType}
                            setMusicianType={setMusicianType}
                            setIsDisableButton={setIsDisableButton}
                            setMusicianFlow={setMusicianFlow}
                        />
                    }

                    {/* =========== Tab Choose instrument =========== */}
                    {((isMusicianOrSinger && tabNumber === 4) && userType !== S.Contractor) &&
                        <SelectWithSearch
                            dataForChoose={S.Instruments}
                            alreadyChosenInstrument={chosenInstrument}
                            searchPlaceholder={'Search instruments'}
                            getChosenData={getChosenInstrument}
                        />
                    }

                    {/* =========== Tab Choose Genres =========== */}
                    {(isMusicianOrSinger && tabNumber === 5) &&
                        <SelectWithSearch
                            dataForChoose={S.Genres}
                            searchPlaceholder={'Search music genres'}
                            getChosenData={getChosenGenres}
                        />
                    }

                    {/* =========== Tab 4 Contractor =========== */}
                    {typeOfForm &&
                        <UserMainInfoContainer>
                            {/* User Avatar */}
                            <UserAvatarBlock>
                                {/* Avatar upload from user */}
                                {newAvatar !== null ?
                                    <UserAvatarContainer>

                                        <UserAvatar>
                                            <Image source={{ uri: newAvatar }} style={{ width: 120, height: 120 }} resizeMode='stretch' />
                                        </UserAvatar>

                                        <UserAvatarReplaceButton onPress={pickImage}>
                                            <EditIcon width={16} height={16} />
                                        </UserAvatarReplaceButton>
                                    </UserAvatarContainer>
                                    :
                                    <UserAvatarButton onPress={pickImage}>
                                        <UploadPhotoIcon width={35} height={35} />
                                        <UserAvatarButtonText>
                                            Upload photo
                                        </UserAvatarButtonText>
                                    </UserAvatarButton>
                                }
                            </UserAvatarBlock>

                            {/* User Name  */}
                            <Controller
                                control={control}
                                rules={{
                                    required: S.userNameExistError,
                                    pattern: /^[aA-zZ\s аА-яЯ\s \d]+$/
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock
                                        style={{
                                            marginBottom: errors.userFullName?.type === 'required' ? 35 : (errors.userFullName?.type === 'pattern' ? 60 : 13),
                                        }}
                                    >
                                        <FormInputContainer>
                                            <FormInput
                                                inputLabel={inputFullNameLabel}
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
                                                    borderColor: errors.userFullName ? C.red : inputFocus2,
                                                    borderWidth: errors.userFullName ? 2 : 1,
                                                    color: errors.userFullName ? C.red : C.black,
                                                }}
                                            />
                                            {errors.userFullName && <ShowPasswordIconButton>
                                                <ErrorIcon width={20} height={20} />
                                            </ShowPasswordIconButton>
                                            }

                                        </FormInputContainer>
                                        <FormInputLabel isError={errors.userFullName} inputLabel={inputFullNameLabel}>Name</FormInputLabel>

                                        {errors.userFullName?.type === 'pattern' && <ErrorMessage >{S.userNameSymbolExclude}</ErrorMessage>}
                                        {errors.userFullName?.type === 'required' && <ErrorMessage>{S.inputRequired}</ErrorMessage>}

                                    </FormInputBlock>
                                )}
                                name="userFullName"
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
                                            <FormInput
                                                inputLabel={inputDescriptionLabel}
                                                selectionColor={C.lightGray}
                                                placeholder={'Description (optional)'}
                                                cursorColor={C.inputCursor}
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
                                                    color: C.black,
                                                }}
                                            />
                                        </FormInputContainer>
                                        <FormInputLabel inputLabel={inputDescriptionLabel}>Description</FormInputLabel>

                                    </FormInputBlock>
                                )}
                                name="userDescription"
                            />

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
                                        <FormInputLabel isError={errors.userEmail} inputLabel={inputEmailLabel}>Email</FormInputLabel>

                                        {errors.userEmail?.type === 'minLength' && <ErrorMessage>{S.emailNotValid}</ErrorMessage>}
                                        {errors.userEmail?.type === 'pattern' && <ErrorMessage>{S.emailNotValid}</ErrorMessage>}
                                        {errors.userEmail && <ErrorMessage>{errors.userEmail.message}</ErrorMessage>}
                                    </FormInputBlock>
                                )}
                                name="userEmail"
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
                                                placeholder={'Location'}
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
                                        <FormInputLabel inputLabel={inputLocationLabel}>Location</FormInputLabel>

                                    </FormInputBlock>
                                )}
                                name="userLocation"
                            />

                            {/* User address  */}
                            {userType === S.Contractor && <Controller
                                control={control}
                                rules={{
                                    required: false,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                        <FormInputContainer>
                                            <FormInput
                                                inputLabel={inputAddressLabel}
                                                selectionColor={C.lightGray}
                                                placeholder={'Address'}
                                                cursorColor={C.inputCursor}
                                                onFocus={() => { setInputFocus6(C.black) }}
                                                onBlur={() => {
                                                    onBlur
                                                    setInputFocus6(C.lightGray)
                                                }}
                                                onChangeText={onChange}
                                                value={value}
                                                style={{
                                                    borderColor: inputFocus6,
                                                    borderWidth: 1,
                                                    color: C.black,
                                                }}
                                            />
                                        </FormInputContainer>
                                        <FormInputLabel inputLabel={inputAddressLabel}>Address</FormInputLabel>

                                    </FormInputBlock>
                                )}
                                name="userAddress"
                            />}


                        </UserMainInfoContainer>
                    }

                </Content>

                <ContentBlock isKeyboardOpen={isKeyboardOpen}>
                    {/* Buttom for undefined user2 */}
                    {(tabNumber < 3 && userType === undefined) ?
                        isDisableButton === false ?
                            <ButtonSubmit onPress={formCheck}>
                                <ButtonSubmitText>Next Step</ButtonSubmitText>
                            </ButtonSubmit>
                            :
                            <DisableBtn >
                                <BlackBtnTextDisable>Next Step</BlackBtnTextDisable>
                            </DisableBtn>
                        : null
                    }
                    {/* Buttom for contractor */}
                    {(tabNumber < 4 && userType === S.Contractor) ?
                        isDisableButton === false ?
                            <ButtonSubmit onPress={formCheck}>
                                <ButtonSubmitText>Next Step</ButtonSubmitText>
                            </ButtonSubmit>
                            :
                            <DisableBtn >
                                <BlackBtnTextDisable>Next Step</BlackBtnTextDisable>
                            </DisableBtn>
                        : null
                    }

                    {(userType === S.Musician && (tabNumber > 1 && tabNumber < 6)) ?
                        isDisableButton === false ?
                            <ButtonSubmit onPress={formCheck}>
                                <ButtonSubmitText>Next Step</ButtonSubmitText>
                            </ButtonSubmit>
                            :
                            <DisableBtn >
                                <BlackBtnTextDisable>Next Step</BlackBtnTextDisable>
                            </DisableBtn>
                        : null
                    }


                    {(tabNumber === 4 && userType === S.Contractor) &&
                        <ButtonSubmitBlock>
                            {/* TODO set redirection to main page */}
                            <ButtonSubmit onPress={handleSubmit(onSubmit)}>
                                <ButtonSubmitText>Create an Account</ButtonSubmitText>
                            </ButtonSubmit>
                        </ButtonSubmitBlock>
                    }
                    {(tabNumber === 6 && isMusicianOrSinger) &&
                        <ButtonSubmitBlock>
                            {/* TODO set redirection to main page */}
                            <ButtonSubmit onPress={handleSubmit(onSubmit)}>
                                <ButtonSubmitText>Create an Account</ButtonSubmitText>
                            </ButtonSubmit>
                        </ButtonSubmitBlock>
                    }

                    {/* TODO set skip redirection with sending filled field  */}
                    {/* <ButtonSubmitBlockSkip>

                        <ButtonSubmitBlockSkipText>
                            Skip this step
                        </ButtonSubmitBlockSkipText>
                    </ButtonSubmitBlockSkip> */}
                    {/* <ContentBlockRow>

                        <ContainerText>
                            Already have an account?
                        </ContainerText>
                        <ContainerLink
                            onPress={() => {
                                navigation.navigate('LoginStack',
                                    { screen: 'LoginScreen' }
                                )
                            }}
                        > 
                        onPress={handleSubmit(onSubmit)}
                            <ContainerLinkText>Sign In</ContainerLinkText>
                        </ContainerLink>
                    </ContentBlockRow> */}

                </ContentBlock>
            </Container>
        </>

    )
}

export default AddProfileInfo;