import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';

export default function ScrollToTop() {
    const navigation = useNavigation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigation]);

    return null;
}

