import React from 'react';
// Images
import IMAGES from '@/res/images'
const {
    GoBackIcon,
} = IMAGES;
// Styles
import { style } from './style'
const {
    Header,
    HeaderClose,
    HeaderTitle,
} = style;

const AccountsTabHeader = ({ tabName, setOpenTabs, onPress }) => {


    const isNotification = tabName === 'Notification Settings' ? 'Notification' : tabName


    return (
        <Header >
            <HeaderClose
                onPress={() => {
                    onPress(false)
                    setTimeout(() => {
                        setOpenTabs({
                            tabName: isNotification,
                            isOpen: false
                        })
                    }, 600);
                }}
            >
                <GoBackIcon width={12} height={21} />
            </HeaderClose>

            <HeaderTitle>
                {tabName}
            </HeaderTitle>
        </Header>
    )
}

export default AccountsTabHeader;

