// import api from 'api/index'

const addNewItemSelectForm = () => {
    // const form = await api.contacts.setContactsForms(data)

    const valueForSelect = {
        currencyTypes: {
            dollarSymbol: '$',
            grivnaSymbol: '₴',
            euroSymbol: '€',
        },
        apartmentRoomNumber: [1, 2, 3, 4, 5],
        propertyTypeForApartment: ['Апартаменты', 'Гостьова', 'Студия', 'Смарт', 'Лофт', 'Пентхаус', 'Таунхаус',],
        decorateApartment: ['C отделкой', 'Без отделки'],
        rentTypes: ['Долгосрочная', 'Посуточная'],
        commerceAppointments: ['Офис', 'Гараж', 'Склад'],
        complexNames: ['Ак Архитектор', 'Жк Жасмин', 'Жк Домино'],
        complexClasses: ['Бизнес', 'Эконом', 'Жилой'],
        placesOnChess: ['1a', '2a', '3a', '4a'],
        deadLineTypes: ['Сдан'],

    }

    return valueForSelect
}

export default addNewItemSelectForm;


