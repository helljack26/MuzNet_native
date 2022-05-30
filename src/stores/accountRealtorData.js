import { ApartmentComplexMockApi } from '@/api/mock/ApartmentComplexMockApi'
import { ApartmentMockApi } from '@/api/mock/ApartmentMockApi'
// import api from 'api/index'

export const accountRealtorData = (userId) => {
    const personalData = {
        userPersonalData: {
            userId: 1,
            userImage: require("../../assets/icon/user_photo.png"),
            userName: 'Ирина',
            userSurName: 'Ларионова',
            userPatronymic: 'Булочкина',
            userEmail: 'irina@gmail.com',
            userPhoneNumber: '+38(000)0000000',
            userAgency: 'Дома в Сочи каждому',
            userPosition: 'Руководитель агенства',
            userCodeWord: 'булочка',
            userPassword: 'бесплатнаяквартира',
        },
        userObject: {
            userActiveObject: [
                ApartmentComplexMockApi[0], ApartmentMockApi[0]
            ],
            userArchiveObject: [
                ApartmentMockApi[2], ApartmentMockApi[0]
            ]

        },
        userEmployees: [
            {
                userId: 2,
                userImage: require("../../assets/icon/user_photo.png"),
                userName: 'Катерина',
                userSurName: 'Баритонова',
                userPatronymic: 'Булочкина',
                userPosition: 'Риелтор',
                userEmail: 'katerina@gmail.com',
                userPhoneNumber: '+38(000)0000000',
            },
            {
                userId: 3,
                userImage: require("../../assets/icon/user_photo.png"),
                userName: 'Василий',
                userSurName: 'Бальмонт',
                userPatronymic: 'Булочкин',
                userPosition: 'Риелтор',
                userEmail: 'vasilii@gmail.com',
                userPhoneNumber: '+38(000)0000000',
            },
            {
                userId: 3,
                userImage: require("../../assets/icon/user_photo.png"),
                userName: 'Василий',
                userSurName: 'Бальмонт',
                userPatronymic: 'Булочкин',
                userPosition: 'Риелтор',
                userEmail: 'vasilii@gmail.com',
                userPhoneNumber: '+38(000)0000000',
            },
        ],
        userSubscription: {
            subscriptionId: 1,
            subscriptionDueDate: 1670961332000,
            subscriptionEmployeesMax: 5,
            subscriptionType: 'Стандартный',
            subscriptionTypes: ['Стандартный', 'Премиум', 'Премиум²']
        }
        ,
        // userMessage
    }
    // const userData = await api.accountRealtorData.getaccountRealtorData(userId)

    return personalData
}