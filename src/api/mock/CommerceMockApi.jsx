export const CommerceFiltersMock = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Назначение",
        item: ['Гараж', 'Офис', 'Склад']
    },
    {
        header: "Квадратура",
        item: [50, 75, 100],
        itemAfter: 'м²'
    },
    {
        header: "Цена за метр",
        item: [500, 1000, 2000]
    }
];

export const CommerceMockApi =
    [
        {
            id: 43433257,
            adTitle: "Офис 45 м²",
            category: 'commerce',
            currencyType: '₴',
            isRent: true,
            adPrice: 400000,
            adCity: 'Сочи',
            adStreet: 'ул. Советская',
            adDistrict: 'Ивановский',
            adHouseNumber: "10б",
            imagePath: [require('../../../assets/commerce_mock/commerce_3.png'), require('../../../assets/commerce_mock/commerce_2.png'),],
            favoriteNumber: 654,
            viewNumber: 246,
            percentageText: 'Процент на ипотеку',
            adDescription: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: {
                propertyType: 'коммерция',
                propertyArea: 45,
                commerceAppointment: 'офис',
                propertyDecorate: false,
                deadlineDate: 'сдан',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },
        {
            id: 434323433257,
            adTitle: "Гараж в кооперативе",
            category: 'commerce',
            currencyType: '₴',
            isRent: true,
            adPrice: 1700000,
            adCity: 'Сочи',
            adStreet: 'ул. Советская',
            adDistrict: 'Ивановский',
            adHouseNumber: "10б",
            imagePath: [require('../../../assets/commerce_mock/commerce_1.png'), require('../../../assets/commerce_mock/commerce_3.png'),],
            favoriteNumber: 15,
            viewNumber: 21,
            percentageText: 'Процент на ипотеку',
            adDescription: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: {
                propertyType: 'коммерция',
                propertyArea: 45,
                commerceAppointment: 'гараж',
                propertyDecorate: true,
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },
        {
            id: 4332334232,
            adTitle: "Этаж в офисном центре",
            category: 'commerce',
            currencyType: '₴',
            isRent: false,
            adPrice: 400000,
            adCity: 'Сочи',
            adStreet: 'ул. Советская',
            adDistrict: 'Ивановский',
            adHouseNumber: "10б",
            imagePath: [require('../../../assets/commerce_mock/commerce_4.png'), require('../../../assets/commerce_mock/commerce_2.png'),],
            favoriteNumber: 145,
            viewNumber: 123,
            percentageText: 'Процент на ипотеку',
            adDescription: 'Помещение находится на первом этаже многоквартирного жилого дома; правильной формы, два входа в помещение, со стороны фасада - панорамное остекление. Новый ремонт. Cделаны выводы ГВС, ХВС и канализации; имеется оборудованный санузел, установлено яркое освещение. Электроснабжение 10 кВт. Новый ремонт. В помещении располагался продуктовый магазин, имеется некоторое торговое оборудование.',
            objectDetails: {
                propertyType: 'коммерция',
                propertyArea: 132,
                commerceAppointment: 'офис',
                propertyDecorate: true,
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
    ]