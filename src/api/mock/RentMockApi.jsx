import { CommerceMockApi } from './CommerceMockApi'
export const RentFiltersMock = [
    {
        header: "Район",
        item: ['Голосеево', 'Оболонь', 'Троещина']
    },
    {
        header: "Тип объекта",
        item: ['Квартира', 'Офис', 'Склад', 'Гараж']
    },
    {
        header: "Тип аренды",
        item: ['Долгосрочная', 'Посуточно'],
    },
    {
        header: "Квадратура",
        item: [500, 1000, 2000],
        itemAfter: 'м²'
    }
];

export const RentMockApi =
    [
        CommerceMockApi[2], CommerceMockApi[0]
    ]