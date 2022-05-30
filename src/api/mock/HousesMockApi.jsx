export const HousesFiltersMock = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Цена",
        item: ['от 100', 'от 200', 'от 300']
    },
    {
        header: "Площадь дома",
        item: ['50м²', '75м²', '100м²']
    },
    {
        header: "Площадь участка",
        item: ['8 соток', '10 соток', '15 соток']
    }
];

export const HousesMockApi =
    [
        {
            id: 4357769,
            adTitle: "Дом 280 м² на участке 7,5 сот. пер. Рахманинова",
            category: 'houses',
            isRent: false,
            currencyType: '₴',
            discountPrice: 27699000,
            adPrice: 27700000,
            adCity: 'Сочи',
            adStreet: 'ул. Советская',
            adDistrict: 'Ивановский',
            adHouseNumber: "10",
            imagePath: [require('../../../assets/houses/house_small_1.png'), require('../../../assets/houses/house_small_2.png')],
            favoriteNumber: 10,
            viewNumber: 260,
            percentageText: 'Процент на ипотеку',
            adDescription: 'В продаже дом в центре города, все коммуникации центральные, всё в собственности. Дом полностью готов к проживанию, на территории бассейн с подогревом, баня, гараж. Планировка ( четыре спальни, и три сан узла) К дому асфальтировный подъед, развитая инфраструктура, море в шаговой доступности. ',
            objectDetails: {
                fullFloorNumber: 2,
                propertyRoomNumber: 3,
                propertyArea: 280,
                plotArea: 7.5,
                propertyType: 'дом',
                distanceToSea: 240,
                propertyDecorate: true,
                dealProcessing: '-',
                deadlineDate: 'сдан',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: false
        },
        {
            id: 435775469,
            adTitle: "Дом 30 м² на участке 3 сот.",
            category: 'houses',
            isRent: false,
            currencyType: '₴',
            adPrice: 7000000,
            adCity: 'Сочи',
            adStreet: 'ул. Советская',
            adDistrict: 'Ивановский',
            adHouseNumber: "10б",
            imagePath: [require('../../../assets/houses/house_small_2.png'), require('../../../assets/houses/house_small_1.png')],
            favoriteNumber: 10,
            viewNumber: 2620,
            percentageText: 'Процент на ипотеку',
            adDescription: 'В продаже дом в центре города, все коммуникации центральные, всё в собственности.\n\n Дом полностью готов к проживанию, на территории бассейн с подогревом, баня, гараж. Планировка ( четыре спальни, и три сан узла) К дому асфальтировный подъед, развитая инфраструктура, море в шаговой доступности. ',
            objectDetails: {
                fullFloorNumber: 2,
                propertyRoomNumber: 3,
                propertyArea: 30,
                plotArea: 3,
                propertyType: 'дом',
                distanceToSea: 240,
                propertyDecorate: false,
                dealProcessing: '-',
                deadlineDate: 'сдан',
            },
            agentId: 1,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        }, {
            id: 43577876,
            adTitle: "Дом 280 м² на участке 7,5 сот.",
            category: 'houses',
            isRent: false,
            currencyType: '₴',
            adPrice: 227699000,
            adCity: 'Сочи',
            adStreet: 'ул. Советская',
            adDistrict: 'Ивановский',
            adHouseNumber: "10б",
            imagePath: [require('../../../assets/houses/house_small_3.png'), require('../../../assets/houses/house_small_1.png')],
            favoriteNumber: 5,
            viewNumber: 2650,
            percentageText: 'Процент на ипотеку',
            adDescription: 'В продаже дом в центре города, все коммуникации центральные, всё в собственности.\n\n Дом полностью готов к проживанию, на территории бассейн с подогревом, баня, гараж. Планировка ( четыре спальни, и три сан узла) К дому асфальтировный подъед, развитая инфраструктура, море в шаговой доступности. ',
            objectDetails: {
                fullFloorNumber: 2,
                propertyRoomNumber: 3,
                propertyArea: 280,
                plotArea: 7.5,
                propertyType: 'дом',
                distanceToSea: 240,
                propertyDecorate: false,
                dealProcessing: '-',
                deadlineDate: 'сдан',
            },
            agentId: 4,
            coords: [{
                lat: 654654,
                lon: 856156,
            }],
            inFavorite: true
        },

    ]





