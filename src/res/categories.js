import React from 'react';
import IMAGES from './images'

const { CategoriesApartment, CategoriesHouse, CategoriesPlot, CategoriesCommerce, CategoriesRent } = IMAGES;

const CATEGORIES = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Квартиры",
        path: "ApartmentsPage",
        icon: <CategoriesApartment />,
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Дома",
        path: "HousesPage",
        icon: <CategoriesHouse />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Участки",
        path: "PlotsPage",
        icon: <CategoriesPlot />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d73",
        title: "Коммерция",
        path: "CommercePage",
        icon: <CategoriesCommerce />,
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d74",
        title: "Аренда",
        path: "RentPage",
        icon: <CategoriesRent />,
    },
];
export default CATEGORIES