import React from 'react';
import { StatusBar } from 'react-native';

import { useForm, Controller } from "react-hook-form";

import { useState, useEffect } from 'react';
import SelectProfileType from './SelectProfileType'

import C from '@/res/colors'
import S from '@/res/strings'

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
    ButtonSubmit,
    ButtonSubmitText,
    ContentBlock,
    ContentBlockRow,
    ContainerText,
    ContainerLink,
    ContainerLinkText,
} = style;

const SignUpContent = [
    {
        tabNumber: 1,
        title: 'Welcome to MuzNet!',
        text: 'Please, pick a username',
        progressWidth: 10
    },
    {
        tabNumber: 2,
        title: 'Welcome to MuzNet 2!',
        text: 'Select profile type according to your needs',
        progressWidth: 30
    },
    {
        tabNumber: 3,
        title: 'Welcome to MuzNet 3!',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        progressWidth: 60
    },
    {
        tabNumber: 4,
        title: 'Welcome to MuzNet 4!',
        text: 'Lets add profile iformation',
        progressWidth: 100
    },
]


const AddProfileInfo = () => {
    const navigation = useNavigation();
    const isKeyboardOpen = isKeyboardShown()

    // Tab logic
    const [screenNumber, setScreenNumber] = useState(0);
    const [isDisableButton, setIsDisableButton] = useState(false);

    const tabNumber = SignUpContent[screenNumber].tabNumber
    const title = SignUpContent[screenNumber].title
    const text = SignUpContent[screenNumber].text
    const progressWidth = SignUpContent[screenNumber].progressWidth

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setScreenNumber(0)
        });

        return unsubscribe;
    }, [navigation]);


    // Form 
    const { control, handleSubmit, resetField, setError, watch, clearErrors,
        formState: { dirtyFields, errors } } = useForm({
            defaultValues: { userName: '' }
        });

    // Tab 1
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

    // Tab 2
    const [userType, setUserType] = useState();
    useEffect(() => {
        if (tabNumber === 1) {
            setIsDisableButton(true)
            // Active button if return from second tab
            if (watchUserName.length > 1) {
                setIsDisableButton(false)
            }
        }
        if (tabNumber === 2) {
            setIsDisableButton(true)
            if (userType !== undefined) {
                setIsDisableButton(false)

            }
        }

    }, [tabNumber])

    // Submit
    const onSubmit = (data) => {
        console.log("🚀 ~ file: LoginPage.jsx ~ line 49 ~ onSubmit ~ data", data)
        // Clear input value

        return
    };
    // Check
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

                break;

            default:
                break;
        }

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
                        <TabNumberText> of 4
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

                <Content>
                    {/* =========== Tab 1 =========== */}
                    {tabNumber === 1 && <Controller
                        control={control}
                        rules={{
                            required: S.userNameExistError,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <FormInputBlock>
                                <FormInputContainer>
                                    <FormInput
                                        selectionColor={C.lightGray}
                                        placeholder={'Username'}
                                        cursorColor={C.black}
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
                    {tabNumber === 2 && <SelectProfileType userType={userType} setUserType={setUserType} setIsDisableButton={setIsDisableButton} />}

                </Content>

                <ContentBlock isKeyboardOpen={isKeyboardOpen}>
                    {isDisableButton === false ?
                        <ButtonSubmit onPress={formCheck}>
                            <ButtonSubmitText>Next Step</ButtonSubmitText>
                        </ButtonSubmit>
                        :
                        <DisableBtn >
                            <BlackBtnTextDisable>Next Step</BlackBtnTextDisable>
                        </DisableBtn>
                    }

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