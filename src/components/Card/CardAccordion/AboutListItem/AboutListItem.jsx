// Styles
import { style } from './style'
import { useNavigation } from '@react-navigation/native';

const {
    AboutBlockUlLi,
    AboutBlockLiTitle,
    AboutBlockLiLink,
    AboutBlockLiLinkText,
    AboutBlockLiText,
} = style;

const convertObjectKeyToTitle = (titleKey) => {
    const squareMeter = 'м²'
    const meter = 'м'
    const plotPrefix = ' cоток'
    let title, prefix
    switch (titleKey) {
        case 'propertyType':
            title = 'Тип недвижимости:'
            break
        case 'propertyArea':
            title = 'Общая площадь:'
            prefix = squareMeter
            break
        case 'distanceToSea':
            title = 'Расстояние до моря:'
            prefix = meter
            break
        case 'propertyDecorate':
            title = 'Отделка:'
            break
        case 'apartmentComplex':
            title = 'ЖК:'
            break
        case 'apartmentChess':
            title = 'Место на шахматке:'
            break
        case 'deadlineDate':
            title = 'Срок сдачи:'
            break
        // House
        case 'plotArea':
            title = 'Размер участка:'
            prefix = plotPrefix
            break
        case 'dealProcessing':
            title = 'Оформление сделки:'
            break
        case 'plotType':
            title = 'Тип участка: '
            break
        // Rent
        case 'propertyAppointment':
            title = 'Назначение:'
            break
        case 'rentType':
            title = 'Тип аренды:'
            break
        // Complex contacts
        case 'complexPhoneNumber':
            title = 'Телефон:'
            break
        case 'complexEmail':
            title = 'Email:'
            break
        case 'complexLocation':
            title = 'Адрес:'
            break
        // Complex details
        case 'complexDeveloper':
            title = 'Застройщик:'
            break
        case 'complexClass':
            title = 'Класс дома:'
            break
        case 'complexMaterial':
            title = 'Материал здания:'
            break
        case 'complexParking':
            title = 'Паркинг:'
            break
        case 'complexTerritoryType':
            title = 'Территория:'
            break
        case 'complexCeilHight':
            title = 'Потолки:'
            break
        case 'complexGas':
            title = 'Газ:'
            break
        case 'complexHeat':
            title = 'Отопление:'
            break
        case 'complexElectric':
            title = 'Электричество:'
            break
        case 'complexSewerage':
            title = 'Канализация:'
            break
        case 'complexWaterSupply':
            title = 'Водоснабжение:'
            break
        case 'yearWhenAppeared':
            title = 'Год сдачи:'
            prefix = 'год'
            break
        case 'floorNumber':
            title = 'Этаж:'
            break
        case 'apartmentRoomNumber':
            title = 'Количество комнат:'
            break
        case 'fullFloorNumber':
            title = 'Этажность:'
            break
        case 'propertyRoomNumber':
            title = 'Количество комнат:'
            break
        case 'commerceAppointment':
            title = 'Назначение:'
            break

        default:
            title = 'Заголовок'
    }
    return ({ title, prefix })
}


const AboutListItem = (props) => {
    const navigation = useNavigation();

    const { titleKey, value, propertyComplexId, complexPath } = props
    const { title, prefix } = convertObjectKeyToTitle(titleKey)

    // Li component
    if (titleKey === undefined) {
        return
    } else if (value.complexName !== undefined) {
        return (
            <AboutBlockUlLi>
                <AboutBlockLiTitle>
                    {title} &nbsp;
                </AboutBlockLiTitle>
                <AboutBlockLiLink
                    onPress={() => {
                        navigation.navigate(`${complexPath}`, {
                            itemId: value.complexId
                        });
                    }} >
                    <AboutBlockLiLinkText>
                        {value.complexName}
                    </AboutBlockLiLinkText>
                </AboutBlockLiLink>
            </AboutBlockUlLi>
        )
    }
    else if (value.chessId !== undefined) {
        return (
            <AboutBlockUlLi>
                <AboutBlockLiTitle>
                    {title} &nbsp;
                </AboutBlockLiTitle>

                <AboutBlockLiLink
                    onPress={() => {
                        navigation.navigate(`${complexPath}`, {
                            complexId: propertyComplexId,
                            planId: value.planId,
                            сhessId: value.chessId,
                        });
                    }}
                // href={`${urlPrefix}complex/${propertyComplexId}/${value.planId}#${value.chessId}`}
                >
                    <AboutBlockLiLinkText>
                        {value.value}
                    </AboutBlockLiLinkText>
                </AboutBlockLiLink>
            </AboutBlockUlLi >
        )
    } else if (titleKey === 'propertyDecorate') {
        const isDecorate = value ? 'С отделкой' : 'Без отделки'
        return (
            <AboutBlockUlLi>
                <AboutBlockLiTitle>
                    {title} &nbsp;
                </AboutBlockLiTitle>

                <AboutBlockLiText>
                    {isDecorate}
                </AboutBlockLiText>
            </AboutBlockUlLi >
        )
    }
    else if (titleKey === 'complexGas') {
        const isGas = value ? 'есть' : 'нет'
        return (
            <AboutBlockUlLi>
                <AboutBlockLiTitle>
                    {title} &nbsp;
                </AboutBlockLiTitle>

                <AboutBlockLiText>
                    {isGas}
                </AboutBlockLiText>
            </AboutBlockUlLi >
        )
    }
    else {
        return (
            <AboutBlockUlLi>
                <AboutBlockLiTitle>
                    {title} &nbsp;
                </AboutBlockLiTitle>
                <AboutBlockLiText>
                    {value} {prefix !== undefined && prefix}
                </AboutBlockLiText>
            </AboutBlockUlLi>
        )
    }
}

export default AboutListItem;