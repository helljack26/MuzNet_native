import { useRoute } from '@react-navigation/native';

const PageLocation = () => {
    const route = useRoute();

    let title, ads, isRealtor
    switch (route.name) {
        // HomePage
        case 'Объявления User':
            title = 'Объявления'

            break;
        // Apartments
        case 'ApartmentsPage':
            title = 'Квартиры'
            isRealtor = false
            ads = true
            break;
        case 'ApartmentsPageRealtor':
            title = 'Квартиры'
            isRealtor = true
            ads = true
            break;

        // Complex
        case 'ApartmentsComplexPageRealtor':
            title = 'Жк'
            isRealtor = true
            break;
        case 'ApartmentsComplexPlanPageRealtor':
            title = 'Шахматка'
            isRealtor = true
            break;

        // House
        case 'HousesPage':
            title = 'Дома'
            isRealtor = false
            ads = true
            break;
        case 'HousesPageRealtor':
            title = 'Дома'
            isRealtor = true
            ads = true
            break;

        // Plots
        case 'PlotsPage':
            title = 'Участки'
            isRealtor = false
            ads = true
            break;
        case 'PlotsPageRealtor':
            title = 'Участки'
            isRealtor = true
            ads = true
            break;

        // Commerce
        case 'CommercePage':
            title = 'Коммерческие объекты'
            isRealtor = false
            ads = true
            break;
        case 'CommercePageRealtor':
            title = 'Коммерческие объекты'
            isRealtor = true
            ads = true
            break;

        // Rent
        case 'RentPage':
            title = 'Аренда'
            isRealtor = false
            ads = true
            break;
        case 'RentPageRealtor':
            title = 'Аренда'
            isRealtor = true
            ads = true
            break;

        // Catalog card
        case 'CardPage':
            isRealtor = false
            break;
        case 'CardPageRealtor':
            isRealtor = true
            break;

        // Tapbar
        // Favorite
        case 'Избранное User':
            title = 'Избранное'
            break;
        case 'Избранное Realtor':
            title = 'Избранное'
            isRealtor = true
            break;
        // Add
        case 'Создать User':
            title = 'Создать'
            break;
        case 'Создать Realtor':
            title = 'Создать'
            isRealtor = true
            break;
        // Collection
        case 'CollectionsPageRealtor':
            title = 'Подборки'
            isRealtor = true
            break;
        case 'CollectionsCardPageRealtor':
            title = 'Подборки'
            isRealtor = true
            break;
        // Chats
        case 'Чаты User':
            title = 'Чаты'
            break;
        case 'Чаты Realtor':
            title = 'Чаты'
            isRealtor = true
            break;

        // SideMenu
        case 'NewsPageUser':
            title = 'Новости'
            break;
        case 'NewsPageRealtor':
            title = 'Новости'
            isRealtor = true
            break;
        case 'NoveltiesPage':
            title = 'Новинки'
            isRealtor = false
            ads = true
            break;
        case 'NoveltiesPageRealtor':
            isRealtor = true
            ads = true
            title = 'Новинки'
            break;

        case 'ContactsPageRealtor':
            title = 'Контакты'
            isRealtor = true
            break;
        default:
            break;
    }
    return ({ title, ads, isRealtor })
}

export default PageLocation;

