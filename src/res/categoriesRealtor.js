import React from 'react';
import IMAGES from './images'

const { CategoriesApartment, CategoriesHouse, CategoriesPlot, CategoriesCommerce, CategoriesRent } = IMAGES;
const CATEGORIESREALTOR = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Квартиры",
        path: "ApartmentsPageRealtor",
        icon: <CategoriesApartment />,
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Дома",
        path: "HousesPageRealtor",
        icon: <CategoriesHouse />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Участки",
        path: "PlotsPageRealtor",
        icon: <CategoriesPlot />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Коммерция",
        path: "CommercePageRealtor",
        icon: <CategoriesCommerce />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Аренда",
        path: "RentPageRealtor",
        icon: <CategoriesRent />,
    },
];
export default CATEGORIESREALTOR