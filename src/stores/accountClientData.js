
import { ApartmentComplexMockApi } from '@/api/mock/ApartmentComplexMockApi'
import { ApartmentMockApi } from '@/api/mock/ApartmentMockApi'

// import api from 'api/index'

export const accountClientData = (userId) => {
    const personalData = {
        userPersonalData: {
            userId: 1,
            userImage: require("../../assets/icon/client_photo.png"),
            userName: 'Иван',
            userSurName: 'Иванов',
            userPatronymic: 'Иванович',
            userEmail: 'ivan@gmail.com',
            userPhoneNumber: '+38(000)0000000',
            userPosition: 'Частное лицо',
            userCodeWord: 'ивановичи',
            userPassword: 'квартира',
        },
        userObject: {
            userActiveObject: [
                ApartmentComplexMockApi[0], ApartmentMockApi[0]
            ],
            userArchiveObject: [
                ApartmentMockApi[2], ApartmentMockApi[0]
            ]

        },
        // userMessage
    }
    // const userData = await api.accountRealtorData.getaccountRealtorData(userId)

    return personalData
}