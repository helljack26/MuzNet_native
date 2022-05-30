import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import C from '@/res/colors'
import { Image, Linking } from 'react-native';

// Images
import IMAGES from '@/res/images'
const {
    AddEmployeeIcon,
    CrossIcon,
    CrossWhiteIcon
} = IMAGES;

// Styles
import { style } from './style'
const {
    Container,
    ContainerBlock,
    ContainerHeader,
    ContainerHeaderBlock,
    HeaderText,
    HeaderSubText,
    Drop,
    DropContainer,
    FormInputBlock,
    FormInputLabel,
    FormInput,
    ButtonSubmit,
    ButtonSubmitText,
    LinkToAddNewObject,
    EmployeeItem,
    EmployeeItemBlock,
    EmployeeImage,
    EmployeeInfoName,
    EmployeeText,
    EmployeeInfoPosition,
    EmployeeInfoBlock,
    EmployeeInfoContainer,
    Button,
    ButtonContainedAbsolute,
    ButtonContainer,
    ErrorMessage,

} = style;

const EmployeesData = ({ userEmployees, tabTitle }) => {
    const { control, handleSubmit, resetField, formState: { errors } } = useForm({
        defaultValues: {
            newEmployeeNumber: '',
        }
    });

    const onSubmit = (data) => {
        console.log("🚀 ~ file: EmployeesData.jsx ~ line 44 ~ onSubmit ~ data", data)

        // Clear input value
        resetField('newEmployeeNumber');
        toggling(false)
        return
    };

    const [inputFocus5, setInputFocus5] = useState(C.borderGray);
    const [isOpen, setIsOpen] = useState(false);
    const toggling = (state) => setIsOpen(state);

    const employeesCount = userEmployees !== undefined && userEmployees.length
    // Message for input error
    const requiredMessage = 'Не может остаться пустым'
    return (
        <Container>
            <ContainerHeader>
                <ContainerHeaderBlock>

                    <HeaderText >
                        {tabTitle}
                    </HeaderText>
                    <HeaderSubText>
                        {employeesCount} сотрудника
                    </HeaderSubText>
                </ContainerHeaderBlock>

                <Drop>
                    <LinkToAddNewObject onPress={() => toggling(!isOpen)}>
                        {isOpen ? <CrossWhiteIcon width={12} height={12} /> : <AddEmployeeIcon width={18} height={18} />}
                    </LinkToAddNewObject>

                    {isOpen && (
                        <DropContainer
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 1 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 5
                            }}
                        >
                            {/*New Employee Phone Number */}
                            <Controller
                                control={control}
                                rules={{ required: true, }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                        <FormInputLabel>
                                            Номер телефона нового сотрудника  &nbsp;&nbsp;
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
                                                borderColor: `${errors.newEmployeeNumber ? 'red' : inputFocus5}`,
                                            }}
                                        />
                                        {errors.newEmployeeNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                    </FormInputBlock>
                                )}
                                name="newEmployeeNumber"
                            />

                            <ButtonSubmit
                                onPress={handleSubmit(onSubmit)}
                                style={{
                                    marginTop: errors.newEmployeeNumber ? 22 : 12,
                                }}
                            >
                                <ButtonSubmitText>
                                    Добавить
                                </ButtonSubmitText>
                            </ButtonSubmit>
                        </DropContainer>
                    )}
                </Drop>
            </ContainerHeader>

            <ContainerBlock>
                {userEmployees.map((item, id) => {
                    const {
                        //  userId,
                        userImage, userName, userSurName, userPosition, userEmail, userPhoneNumber } = item;
                    return (
                        <EmployeeItem key={id}>
                            <EmployeeItemBlock>
                                <EmployeeImage>
                                    <Image source={userImage} style={{ width: 122, height: 122 }} resizeMode='stretch' />
                                </EmployeeImage>
                                <EmployeeInfoContainer>

                                    <EmployeeInfoBlock>
                                        <EmployeeInfoName>
                                            {userName} {userSurName}
                                        </EmployeeInfoName>

                                        <EmployeeInfoPosition>
                                            {userPosition}
                                        </EmployeeInfoPosition>
                                    </EmployeeInfoBlock>

                                    <EmployeeText
                                        onPress={() => Linking.openURL(`tel:${userPhoneNumber}`)}>
                                        {userPhoneNumber}
                                    </EmployeeText>

                                    <EmployeeText
                                        onPress={() => Linking.openURL(`mailto:${userEmail}`)}>

                                        {userEmail}
                                    </EmployeeText>
                                </EmployeeInfoContainer>

                            </EmployeeItemBlock>

                            <ButtonContainer>
                                <ButtonContainedAbsolute>

                                    <Button>
                                        <CrossIcon width={15} height={15} />
                                    </Button>
                                </ButtonContainedAbsolute>

                            </ButtonContainer>
                        </EmployeeItem>

                    )
                })}
            </ContainerBlock>
        </Container >
    )
}
export default EmployeesData;