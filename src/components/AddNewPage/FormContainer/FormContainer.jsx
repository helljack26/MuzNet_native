import React from "react";
import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";

import addNewItemSelectForm from '@/stores/addNewItemSelectForm';

import DropSelect from './DropSelect';

import { ADDNEWITEMHASHLINK } from '@/res/addNewItemHashLink';
import S from '@/res/strings'
import C from '@/res/colors'

// Images
// import IMAGES from '@/res/images'
// Styles
import { style } from './style'
// Styles
const {
      Form,
      FormRowDetailsContainer,
      FormRowName,
      FormRowPrice,
      BorderLine,
      FormRowPriceBlock,
      FormThirdBlockApartment,
      FormThirdBlockComplex,
      FormThirdBlockComplexRow,
      FormInputContainer,
      FormInputIcon,
      FormInputBlock,
      FormInputLabel,
      FormInput,
      FormTextArea,
      FormInputTextBlock,
      // FormRowApartmentDetails,
      // CheckboxBlock,
      // Checkbox,
      // CheckboxImg,
      // CheckboxBlockText,
      ButtonSubmit,
      ButtonSubmitText,
      ErrorMessage,
      DropCurrencyValueBlock,
      DropApartmentTypeBlock,
      FormRowAdress,
      FormRowDetailsApartment,
      FormRowDetailsComplex,
      FormRowDetailsHouse,
      FormRowDetailsPlot,
      FormRowDetailsCommerce,
} = style;

const FormContainer = ({ isRentTab, categoryForSubmit }) => {
      const ApartmentTab = ADDNEWITEMHASHLINK[0].hash
      const ComplexTab = ADDNEWITEMHASHLINK[1].hash
      const HouseTab = ADDNEWITEMHASHLINK[2].hash
      const PlotTab = ADDNEWITEMHASHLINK[3].hash
      const CommerceTab = ADDNEWITEMHASHLINK[4].hash

      const valueForSelect = addNewItemSelectForm();
      // Options for select
      const {
            rentTypes,
            currencyTypes,
            propertyTypeForApartment,
            commerceAppointments,
            deadLineTypes,
            decorateApartment,
            complexNames,
            complexClasses,
            placesOnChess,
      } = valueForSelect

      const { control, handleSubmit, reset, formState: { errors } } = useForm({
            defaultValues: {
                  distanceToSea: ''
            }
      });

      // Input on focus outline 
      const [inputFocus1, setInputFocus1] = useState(C.borderGray);
      const [inputFocus2, setInputFocus2] = useState(C.borderGray);
      const [inputFocus3, setInputFocus3] = useState(C.borderGray);
      const [inputFocus4, setInputFocus4] = useState(C.borderGray);
      const [inputFocus5, setInputFocus5] = useState(C.borderGray);
      const [inputFocus6, setInputFocus6] = useState(C.borderGray);
      const [inputFocus7, setInputFocus7] = useState(C.borderGray);
      const [inputFocus8, setInputFocus8] = useState(C.borderGray);
      const [inputFocus9, setInputFocus9] = useState(C.borderGray);
      const [inputFocus10, setInputFocus10] = useState(C.borderGray);
      const [inputFocus11, setInputFocus11] = useState(C.borderGray);
      const [inputFocus12, setInputFocus12] = useState(C.borderGray);
      const [inputFocus13, setInputFocus13] = useState(C.borderGray);
      const [inputFocus14, setInputFocus14] = useState(C.borderGray);
      const [inputFocus15, setInputFocus15] = useState(C.borderGray);
      const [inputFocus16, setInputFocus16] = useState(C.borderGray);
      const [inputFocus17, setInputFocus17] = useState(C.borderGray);
      const [inputFocus18, setInputFocus18] = useState(C.borderGray);
      const [inputFocus19, setInputFocus19] = useState(C.borderGray);
      const [inputFocus20, setInputFocus20] = useState(C.borderGray);
      const [inputFocus21, setInputFocus21] = useState(C.borderGray);
      const [inputFocus22, setInputFocus22] = useState(C.borderGray);
      const [inputFocus23, setInputFocus23] = useState(C.borderGray);
      const [inputFocus24, setInputFocus24] = useState(C.borderGray);
      const [inputFocus25, setInputFocus25] = useState(C.borderGray);
      const [inputFocus26, setInputFocus26] = useState(C.borderGray);
      const [inputFocus27, setInputFocus27] = useState(C.borderGray);

      // Checkbox discount state
      // const [checkboxState, setCheckboxState] = useState(false);

      // Select for currency value
      const [isOpen, setIsOpen] = useState(false);
      const [selectedCurrency, setSelectedCurrency] = useState(Object.values(currencyTypes)[0]);
      const toggling = (state) => setIsOpen(state);
      const onCurrencyClicked = value => () => { setSelectedCurrency(value); setIsOpen(false); }

      // Select for Apartment type
      const [isOpen2, setIsOpen2] = useState(false);
      const [apartmentType, setApartmentType] = useState(null);
      const toggling2 = (state) => setIsOpen2(state);
      const onApartmentTypeSelectClicked = value => () => { setApartmentType(value); setIsOpen2(false); };

      // Select for decorate type
      const [isOpen3, setIsOpen3] = useState(false);
      const [decorateType, setDecorateType] = useState(null);
      const toggling3 = (state) => setIsOpen3(state);
      const onDecorateTypeSelectClicked = value => () => { setDecorateType(value); setIsOpen3(false); };

      // Select for rent duration type
      const [isOpen4, setIsOpen4] = useState(false);
      const [rentType, setRentType] = useState(null);
      const toggling4 = (state) => setIsOpen4(state);
      const onRentTypeSelectClicked = value => () => { setRentType(value); setIsOpen4(false); };

      // Select for Commerce appointment
      const [isOpen5, setIsOpen5] = useState(false);
      const [commerceAppointment, setCommerceAppointment] = useState(null);
      const toggling5 = (state) => setIsOpen5(state);
      const onCommerceAppointmentSelectClicked = value => () => { setCommerceAppointment(value); setIsOpen5(false); };

      // Select for Apartment Complex name
      const [isOpen6, setIsOpen6] = useState(false);
      const [complexName, setComplexName] = useState(null);
      const toggling6 = (state) => setIsOpen6(state);
      const onComplexNameSelectClicked = value => () => { setComplexName(value); setIsOpen6(false); };

      // Select for Apartment chess name
      const [isOpen7, setIsOpen7] = useState(false);
      const [chessName, setChessName] = useState(null);
      const toggling7 = (state) => setIsOpen7(state);
      const onChessNameSelectClicked = value => () => { setChessName(value); setIsOpen7(false); };

      // Select for Apartment deadline dates
      const [isOpen8, setIsOpen8] = useState(false);
      const [deadlineType, setDeadlineType] = useState();

      const [dateInputPlaceHolder, setDateInputPlaceHolder] = useState();

      const toggling8 = (state) => setIsOpen8(state);
      const onDeadlineTypeSelectClicked = (value) => () => {
            if (value === 'Выбрать') setDateInputPlaceHolder(undefined)
            setDeadlineType(value); setIsOpen8(false);
      };
      useEffect(() => {
            if (dateInputPlaceHolder !== undefined) setDeadlineType(dateInputPlaceHolder)
      }, [dateInputPlaceHolder]);

      // Select for Complex class type 
      const [isOpen9, setIsOpen9] = useState(false);
      const [complexClass, setComplexClass] = useState(null);
      const toggling9 = (state) => setIsOpen9(state);
      const onClassTypeSelectClicked = value => () => { setComplexClass(value); setIsOpen9(false); };

      useEffect(() => {
            if (categoryForSubmit) {
                  reset()
                  reset({ distanceToSea: '' })
                  setApartmentType(null)
                  setDecorateType(null)
                  setRentType(null)
                  setCommerceAppointment(null)
                  setComplexName(null)
                  setChessName(null)
                  setDeadlineType(null)
                  setDateInputPlaceHolder(undefined)
                  setComplexClass(null)
                  // setCheckboxState(false)
            }
      }, [categoryForSubmit, reset]);

      // Submit handler
      const onSubmit = (data) => {
            // Get all select value if it exist
            if (categoryForSubmit !== undefined) data.category = categoryForSubmit
            if (isRentTab !== undefined) data.isRent = isRentTab
            if (selectedCurrency !== null) data.currencyType = selectedCurrency
            if (apartmentType !== null) data.propertyType = apartmentType !== 'Выбрать' ? apartmentType : null
            const decorateStringToBool = decorateType !== 'Выбрать' ? (decorateType !== 'Без отделки' ? true : false) : null
            if (decorateType !== null) data.propertyDecorate = decorateStringToBool
            if (rentType !== null) data.rentType = rentType !== 'Выбрать' ? rentType : null
            if (commerceAppointment !== null) data.commerceAppointment = commerceAppointment !== 'Выбрать' ? commerceAppointment : null
            if (complexName !== null) data.complexName = complexName !== 'Выбрать' ? complexName : null
            if (chessName !== null) data.chessName = chessName !== 'Выбрать' ? chessName : null
            if (deadlineType !== null || dateInputPlaceHolder !== undefined) data.deadlineDate = deadlineType !== 'Выбрать' ? deadlineType : null

            // if (data.adDiscountCheckbox !== undefined) data.adDiscountCheckbox = checkboxState
            // if (data.adDiscountCheckbox === 'false') data.adDiscountCheckbox = false
            // if (data.adDiscountCheckbox === 'true') data.adDiscountCheckbox = true

            // Convert to number 
            if (data.adPrice !== undefined) data.adPrice = Number(data.adPrice)
            if (data.discountPrice !== undefined) data.discountPrice = Number(data.discountPrice)
            if (data.floorNumber !== undefined) data.floorNumber = Number(data.floorNumber)
            if (data.propertyRoomNumber !== undefined) data.propertyRoomNumber = Number(data.propertyRoomNumber)
            if (data.propertyArea !== undefined) data.propertyArea = Number(data.propertyArea)
            if (data.yearWhenAppeared !== undefined) data.yearWhenAppeared = Number(data.yearWhenAppeared)
            if (data.distanceToSea !== undefined && data.distanceToSea !== '0') data.distanceToSea = Number(data.distanceToSea)
            if (data.complexCeilHight !== undefined) data.complexCeilHight = Number(data.complexCeilHight)

            console.log('кайф', data)
            // setCheckboxState(false)
            reset()
            return
      };

      // Message for input error
      const requiredMessage = 'Обязательное поле'

      //  House number for all just not for Plot 
      const houseNumberInput = categoryForSubmit !== PlotTab && <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>
                              Номер дома
                        </FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus7(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus7(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.adHouseNumber ? 'red' : inputFocus7}` }}
                              />

                              {errors.adHouseNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="adHouseNumber"
      />

      //  Room number
      const isShowRoomNumber = categoryForSubmit === ApartmentTab || categoryForSubmit === HouseTab
      const roomNumberInput = isShowRoomNumber && <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>
                              Количество комнат
                        </FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus10(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus10(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.propertyRoomNumber ? 'red' : inputFocus10}` }}
                              />

                              {errors.propertyRoomNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="propertyRoomNumber"
      />

      // Property area
      const isShowPropertyArea = categoryForSubmit !== ComplexTab && categoryForSubmit !== PlotTab
      const propertyAreaInput = isShowPropertyArea && <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>
                              Общая площадь
                        </FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    defaultValue=""
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus11(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus11(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.propertyArea ? 'red' : inputFocus11}` }}
                              />
                              <FormInputIcon style={{ marginRight: 5 }} >{S.squareMeterSymbol}</FormInputIcon>
                              {errors.propertyArea && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="propertyArea"
      />

      // Year for Apartment and Complex 
      const isShowYear = categoryForSubmit === ApartmentTab
      const yearInput = isShowYear && <Controller
            control={control}
            rules={{ min: 1900, max: 2020 }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>
                              Год сдачи
                        </FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus12(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus12(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.yearWhenAppeared ? 'red' : inputFocus12}` }}
                              />
                              {errors.yearWhenAppeared && <ErrorMessage>От 1900 до 2022</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="yearWhenAppeared"
      />

      // Distance to sea
      const distanceToSeaInput = <Controller
            control={control}
            // rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>Расстояние до моря</FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    defaultValue=""
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus13(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus13(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.distanceToSea ? 'red' : inputFocus13}` }}
                              />
                              <FormInputIcon style={{ marginRight: 5 }} >{S.meterSymbol}</FormInputIcon>
                              {errors.distanceToSea && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="distanceToSea"
      />

      // Decorate select
      const decorateTypeSelect = <DropApartmentTypeBlock>
            <FormInputLabel>Отделка</FormInputLabel>
            <DropSelect
                  selectOptions={decorateApartment}
                  selectedValue={decorateType}
                  toggling={toggling3}
                  isOpen={isOpen3}
                  onSelect={onDecorateTypeSelectClicked}
            />
      </DropApartmentTypeBlock>

      // Full floor inputs for Complex and houses
      const isShowFullFloorNumber = categoryForSubmit === HouseTab || categoryForSubmit === ComplexTab
      const fullFloorsInput = isShowFullFloorNumber && <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>
                              Этажность дома
                        </FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus14(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus14(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.fullFloorNumber ? 'red' : inputFocus14}` }}
                              />

                              {errors.fullFloorNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="fullFloorNumber"
      />

      // Plot area
      const isShowPlotArea = categoryForSubmit === HouseTab || categoryForSubmit === PlotTab
      const plotAreaInput = isShowPlotArea && <Controller
            control={control}
            // rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
                  <FormInputBlock>
                        <FormInputLabel>
                              Площадь участка
                        </FormInputLabel>
                        <FormInputContainer>
                              <FormInput
                                    defaultValue=""
                                    keyboardType='numeric'
                                    selectionColor={C.mainBlue}
                                    cursorColor={C.mainBlue}
                                    onFocus={() => setInputFocus15(C.mainBlue)}
                                    onBlur={() => {
                                          onBlur
                                          setInputFocus15(C.borderGray)
                                    }}
                                    onChangeText={onChange}
                                    value={value}
                                    style={{ borderColor: `${errors.plotArea ? 'red' : inputFocus15}` }}
                              />
                              <FormInputIcon style={{ marginRight: 5 }} >{S.plotValue}</FormInputIcon>
                              {errors.plotArea && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                        </FormInputContainer>

                  </FormInputBlock>
            )}
            name="plotArea"
      />

      // Complex deadline select 
      const isShowDeadlineType = categoryForSubmit === ApartmentTab || categoryForSubmit === ComplexTab
      const deadlineTypeSelect = isShowDeadlineType && <DropApartmentTypeBlock >
            <FormInputLabel>Срок сдачи</FormInputLabel>
            <DropSelect
                  isDeadlineSelect={true}
                  selectOptions={deadLineTypes}
                  selectedValue={deadlineType}
                  toggling={toggling8}
                  isOpen={isOpen8}
                  onSelect={onDeadlineTypeSelectClicked}
                  dateInputPlaceHolder={dateInputPlaceHolder}
                  setDateInputPlaceHolder={setDateInputPlaceHolder}
            />
      </DropApartmentTypeBlock>

      //  Complex class select 
      const isShowClassType = categoryForSubmit === ComplexTab
      const classTypeSelect = isShowClassType && <DropApartmentTypeBlock >
            <FormInputLabel>Класс дома</FormInputLabel>
            <DropSelect
                  selectOptions={complexClasses}
                  selectedValue={complexClass}
                  toggling={toggling9}
                  isOpen={isOpen9}
                  onSelect={onClassTypeSelectClicked}
            />
      </DropApartmentTypeBlock>

      return (
            <Form >
                  <FormRowName>
                        {/*=============== Rent type select  ===============*/}
                        {isRentTab === true && <DropApartmentTypeBlock>
                              <FormInputLabel>Тип аренды</FormInputLabel>
                              <DropSelect
                                    selectOptions={rentTypes}
                                    selectedValue={rentType}
                                    toggling={toggling4}
                                    isOpen={isOpen4}
                                    onSelect={onRentTypeSelectClicked}
                              />
                        </DropApartmentTypeBlock>}

                        {/*=============== Ad Title ===============*/}
                        <Controller
                              control={control}
                              rules={{ required: true }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                          <FormInputLabel>
                                                Заголовок объявления
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
                                                style={{ borderColor: `${errors.adTitle ? 'red' : inputFocus1}` }}
                                          />
                                          {errors.adTitle && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                    </FormInputBlock>
                              )}
                              name="adTitle"
                        />

                  </FormRowName>

                  {/*=============== Ad Price ===============*/}
                  <FormRowPrice>
                        {/* Price input */}
                        <Controller
                              control={control}
                              rules={{ required: true }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                          <FormInputLabel>
                                                Цена
                                          </FormInputLabel>
                                          <FormInputContainer>
                                                <FormInput
                                                      keyboardType='numeric'
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus2(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus2(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.adPrice ? 'red' : inputFocus2}` }}
                                                />
                                                <FormInputIcon>{!selectedCurrency ? S.dollarSymbol : selectedCurrency}</FormInputIcon>

                                                {errors.adPrice && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputContainer>

                                    </FormInputBlock>
                              )}
                              name="adPrice"
                        />

                        {/* Discount checkbox не добавлять */}
                        {/* <CheckboxBlock >
                        <Checkbox as='input' id="adDiscountCheckbox" type="adDiscountCheckbox" value={false}
                                   {...register("adDiscountCheckbox")}
                                   onClick={() => setCheckboxState(checkboxState === true ? false : true)} />
                             <CheckboxImg
                                   style={{ border: errors.adDiscountCheckbox !== undefined ? '1px solid red' : `1px solid ${C.borderGray}` }}  >
                                   {checkboxState === true ? <img src={IMAGES.CheckedIcon} width='100%' height='100%' alt='Checked icon' /> : null}
                             </CheckboxImg>                  
                             <CheckboxBlockText>Добавить акцию </CheckboxBlockText>
                       <CheckboxBlockTextMobile>Акция</CheckboxBlockTextMobile>
                       </CheckboxBlock> */}

                        <FormRowPriceBlock>
                              {/* Discount price */}
                              <Controller
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock isCurrency={true}>
                                                <FormInputLabel>
                                                      Акционная цена
                                                </FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            keyboardType='numeric'
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus3(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus3(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.discountPrice ? 'red' : inputFocus3}` }}
                                                      />
                                                      <FormInputIcon>{!selectedCurrency ? S.dollarSymbol : selectedCurrency}</FormInputIcon>

                                                      {errors.discountPrice && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>

                                          </FormInputBlock>
                                    )}
                                    name="discountPrice"
                              />

                              {/* Currency select */}
                              <DropCurrencyValueBlock>
                                    <FormInputLabel>Валюта</FormInputLabel>
                                    <DropSelect
                                          isCurrency={true}
                                          selectOptions={Object.values(currencyTypes)}
                                          selectedValue={selectedCurrency}
                                          toggling={toggling}
                                          isOpen={isOpen}
                                          onSelect={onCurrencyClicked}
                                    />
                              </DropCurrencyValueBlock>

                        </FormRowPriceBlock>
                        <BorderLine></BorderLine>

                  </FormRowPrice>

                  {/*=============== Ad adress ===============*/}
                  <FormRowAdress   >
                        {/* City */}
                        <Controller
                              control={control}
                              rules={{ required: true }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                          <FormInputLabel>
                                                Город
                                          </FormInputLabel>
                                          <FormInputContainer>
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
                                                      style={{ borderColor: `${errors.adCity ? 'red' : inputFocus4}`, }}
                                                />

                                                {errors.adCity && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputContainer>

                                    </FormInputBlock>
                              )}
                              name="adCity"
                        />
                        {/* District */}
                        <Controller
                              control={control}
                              rules={{ required: true }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                          <FormInputLabel>
                                                Район
                                          </FormInputLabel>
                                          <FormInputContainer>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus5(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus5(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.adDistrict ? 'red' : inputFocus5}` }}
                                                />

                                                {errors.adDistrict && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputContainer>

                                    </FormInputBlock>
                              )}
                              name="adDistrict"
                        />

                        {/* Street */}
                        <Controller
                              control={control}
                              rules={{ required: true }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                          <FormInputLabel>
                                                Улица
                                          </FormInputLabel>
                                          <FormInputContainer>
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
                                                      style={{ borderColor: `${errors.adStreet ? 'red' : inputFocus6}` }}
                                                />

                                                {errors.adStreet && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputContainer>

                                    </FormInputBlock>
                              )}
                              name="adStreet"
                        />
                  </FormRowAdress>

                  {/*=============== Special details inputs ===============*/}
                  <FormRowDetailsContainer>
                        {/* Apartment */}
                        {categoryForSubmit === ApartmentTab ? <FormRowDetailsApartment>

                              {houseNumberInput}

                              {/* Apartment number */}
                              <Controller
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>
                                                      Номер квартиры
                                                </FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            keyboardType='numeric'
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus8(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus8(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.apartmentNumber ? 'red' : inputFocus8}` }}
                                                      />

                                                      {errors.apartmentNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>

                                          </FormInputBlock>
                                    )}
                                    name="apartmentNumber"
                              />

                              {/* Floor number */}
                              <Controller
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>
                                                      Этаж
                                                </FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            keyboardType='numeric'
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus9(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus9(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.floorNumber ? 'red' : inputFocus9}` }}
                                                      />

                                                      {errors.floorNumber && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>

                                          </FormInputBlock>
                                    )}
                                    name="floorNumber"
                              />

                              {/* Room number */}
                              {roomNumberInput}

                              {/* Property area */}
                              {propertyAreaInput}

                              {/* Year when appeared */}
                              {yearInput}

                              {/* Distance to sea */}
                              {distanceToSeaInput}

                              {/* Appartment type select */}
                              <DropApartmentTypeBlock>
                                    <FormInputLabel >Тип квартиры</FormInputLabel>
                                    <DropSelect
                                          selectOptions={propertyTypeForApartment}
                                          selectedValue={apartmentType}
                                          toggling={toggling2}
                                          isOpen={isOpen2}
                                          onSelect={onApartmentTypeSelectClicked}
                                    />
                              </DropApartmentTypeBlock>

                              {/* Decorate type select */}
                              {decorateTypeSelect}
                              <BorderLine></BorderLine>

                        </FormRowDetailsApartment> : null}

                        {/* Complex */}
                        {categoryForSubmit === ComplexTab && <FormRowDetailsComplex>
                              {houseNumberInput}
                              {fullFloorsInput}
                              {distanceToSeaInput}
                              {deadlineTypeSelect}
                              {classTypeSelect}
                              <BorderLine></BorderLine>
                        </FormRowDetailsComplex>}

                        {/* House */}
                        {categoryForSubmit === HouseTab && <FormRowDetailsHouse>
                              {houseNumberInput}
                              {roomNumberInput}
                              {fullFloorsInput}
                              {propertyAreaInput}
                              {plotAreaInput}
                              {distanceToSeaInput}
                              {decorateTypeSelect}
                              <BorderLine></BorderLine>
                        </FormRowDetailsHouse>}

                        {/* Plot */}
                        {categoryForSubmit === PlotTab && <FormRowDetailsPlot>
                              {plotAreaInput}
                              {distanceToSeaInput}

                              {/*Plot type */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>
                                                      Тип земли
                                                </FormInputLabel>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus16(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus16(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.plotType ? 'red' : inputFocus16}` }}
                                                />
                                                {errors.plotType && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputBlock>
                                    )}
                                    name="plotType"
                              />

                              {/*Plot dealing type */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>
                                                      Тип сделки
                                                </FormInputLabel>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus17(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus17(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.dealProcessing ? 'red' : inputFocus17}` }}
                                                />
                                                {errors.dealProcessing && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputBlock>
                                    )}
                                    name="dealProcessing"
                              />
                              <BorderLine></BorderLine>
                        </FormRowDetailsPlot>}

                        {/* Commerce */}
                        {categoryForSubmit === CommerceTab && <FormRowDetailsCommerce>
                              {houseNumberInput}
                              {propertyAreaInput}
                              {distanceToSeaInput}
                              {decorateTypeSelect}

                              {/* Commerce appointment */}
                              <DropApartmentTypeBlock>
                                    <FormInputLabel>Назначение</FormInputLabel>

                                    <DropSelect
                                          selectOptions={commerceAppointments}
                                          selectedValue={commerceAppointment}
                                          toggling={toggling5}
                                          isOpen={isOpen5}
                                          onSelect={onCommerceAppointmentSelectClicked}
                                    />
                              </DropApartmentTypeBlock>
                              <BorderLine></BorderLine>

                        </FormRowDetailsCommerce>}
                  </FormRowDetailsContainer>

                  {/*=============== Apartmentm third row ===============*/}
                  {categoryForSubmit === ApartmentTab && <FormThirdBlockApartment>
                        {/* Appartment Complex name select */}
                        <DropApartmentTypeBlock>
                              <FormInputLabel>Жилой комплекс</FormInputLabel>

                              <DropSelect
                                    selectOptions={complexNames}
                                    selectedValue={complexName}
                                    toggling={toggling6}
                                    isOpen={isOpen6}
                                    onSelect={onComplexNameSelectClicked}
                              />
                        </DropApartmentTypeBlock>

                        {/* Appartment chess place select */}
                        <DropApartmentTypeBlock>
                              <FormInputLabel>Место на шахматке</FormInputLabel>

                              <DropSelect
                                    selectOptions={placesOnChess}
                                    selectedValue={chessName}
                                    toggling={toggling7}
                                    isOpen={isOpen7}
                                    onSelect={onChessNameSelectClicked}
                              />
                        </DropApartmentTypeBlock>

                        {/* Deadline type select */}
                        {deadlineTypeSelect}

                        <BorderLine></BorderLine>
                  </FormThirdBlockApartment>
                  }

                  {/*=============== Complex third row ===============*/}
                  {categoryForSubmit === ComplexTab && <FormThirdBlockComplex>

                        {/* / Building Developer / Material / Parking  / */}
                        <FormThirdBlockComplexRow>
                              {/* Building Developer */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Застройщик</FormInputLabel>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus17(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus17(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.complexDeveloper ? 'red' : inputFocus17}` }}
                                                />
                                                {errors.complexDeveloper && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputBlock>
                                    )}
                                    name="complexDeveloper"
                              />

                              {/* Complex material */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Материал здания</FormInputLabel>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus18(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus18(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.complexMaterial ? 'red' : inputFocus18}` }}
                                                />
                                                {errors.complexMaterial && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputBlock>
                                    )}
                                    name="complexMaterial"
                              />

                              {/* Complex parking */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Паркинг</FormInputLabel>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus19(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus19(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.complexParking ? 'red' : inputFocus19}` }}
                                                />
                                                {errors.complexParking && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputBlock>
                                    )}
                                    name="complexParking"
                              />

                              {/* Territory Developer */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Територия</FormInputLabel>
                                                <FormInput
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      onFocus={() => setInputFocus20(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus20(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{ borderColor: `${errors.complexTerritoryType ? 'red' : inputFocus20}` }}
                                                />
                                                {errors.complexTerritoryType && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputBlock>
                                    )}
                                    name="complexTerritoryType"
                              />

                              {/* Ceil height */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Потолки</FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            keyboardType='numeric'
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus21(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus21(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.complexCeilHight ? 'red' : inputFocus21}` }}
                                                      />
                                                      <FormInputIcon style={{ marginRight: 5 }} >{S.meterSymbol}</FormInputIcon>
                                                      {errors.complexCeilHight && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>

                                          </FormInputBlock>
                                    )}
                                    name="complexCeilHight"
                              />

                              {/* Complex gas */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Газ</FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus22(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus22(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.complexGas ? 'red' : inputFocus22}` }}
                                                      />
                                                      {errors.complexGas && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>

                                          </FormInputBlock>
                                    )}
                                    name="complexGas"
                              />

                              {/* Complex heat */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Отопление</FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus23(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus23(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.complexHeat ? 'red' : inputFocus23}` }}
                                                      />
                                                      {errors.complexHeat && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>
                                          </FormInputBlock>
                                    )}
                                    name="complexHeat"
                              />

                              {/* Electric */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Електрика</FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus24(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus24(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.complexElectric ? 'red' : inputFocus24}` }}
                                                      />
                                                      {errors.complexElectric && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>
                                          </FormInputBlock>
                                    )}
                                    name="complexElectric"
                              />

                              {/* Severage */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Канализация</FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus25(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus25(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.complexSewerage ? 'red' : inputFocus25}` }}
                                                      />
                                                      {errors.complexSewerage && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>
                                          </FormInputBlock>
                                    )}
                                    name="complexSewerage"
                              />

                              {/* Water supply */}
                              <Controller
                                    control={control}
                                    // rules={{ required: true }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                          <FormInputBlock>
                                                <FormInputLabel>Водоснабжение</FormInputLabel>
                                                <FormInputContainer>
                                                      <FormInput
                                                            selectionColor={C.mainBlue}
                                                            cursorColor={C.mainBlue}
                                                            onFocus={() => setInputFocus26(C.mainBlue)}
                                                            onBlur={() => {
                                                                  onBlur
                                                                  setInputFocus26(C.borderGray)
                                                            }}
                                                            onChangeText={onChange}
                                                            value={value}
                                                            style={{ borderColor: `${errors.complexWaterSupply ? 'red' : inputFocus26}` }}
                                                      />
                                                      {errors.complexWaterSupply && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                                </FormInputContainer>
                                          </FormInputBlock>
                                    )}
                                    name="complexWaterSupply"
                              />
                        </FormThirdBlockComplexRow>

                        <BorderLine></BorderLine>
                  </FormThirdBlockComplex>
                  }

                  {/*=============== Description ===============*/}
                  <FormInputTextBlock>
                        <Controller
                              control={control}
                              rules={{
                                    required: true,
                              }}
                              render={({ field: { onChange, onBlur, value } }) => (
                                    <FormInputBlock>
                                          <FormInputLabel>
                                                Описание
                                                {errors.message && <ErrorMessage>{ }</ErrorMessage>}
                                          </FormInputLabel>
                                          <FormInputContainer>
                                                <FormTextArea
                                                      selectionColor={C.mainBlue}
                                                      cursorColor={C.mainBlue}
                                                      multiline={true}
                                                      numberOfLines={4}
                                                      onFocus={() => setInputFocus27(C.mainBlue)}
                                                      onBlur={() => {
                                                            onBlur
                                                            setInputFocus27(C.borderGray)
                                                      }}
                                                      onChangeText={onChange}
                                                      value={value}
                                                      style={{
                                                            borderColor: `${errors.adDescription ? 'red' : inputFocus27}`,
                                                            textAlignVertical: 'top'
                                                      }}
                                                />
                                                {errors.adDescription && <ErrorMessage>{requiredMessage}</ErrorMessage>}
                                          </FormInputContainer>

                                    </FormInputBlock>
                              )}
                              name="adDescription"
                        />

                  </FormInputTextBlock>
                  <ButtonSubmit onPress={handleSubmit(onSubmit)} >
                        <ButtonSubmitText>
                              Разместить объявление
                        </ButtonSubmitText>
                  </ButtonSubmit>
            </Form >
      )
}

export default FormContainer;

