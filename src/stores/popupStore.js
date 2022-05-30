import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';

class PopupStore {
    popupVisibleStore
    popupClientLeft
    parentContainerWidth
    parentContainerHeight

    constructor() {
        makeAutoObservable(this, {
            popupVisibleStore: observable,
            popupClientLeft: observable,
            parentContainerWidth: observable,
            parentContainerHeight: observable,

            setPopupVisible: action.bound,
            setPopupClientLeft: action.bound,
            setParentContainerWidth: action.bound,
            setParentContainerHeight: action.bound,
        })
    }

    setPopupVisible(boolean) {
        return this.popupVisibleStore = boolean;
    }
    setPopupClientLeft(clientLeft) {
        // console.log("🚀 ~ file: popupStore.js ~ line 29 ~ PopupStore ~ setPopupClientLeft ~ clientLeft", clientLeft)
        return this.popupClientLeft = clientLeft;
    }
    setParentContainerWidth(width) {
        // console.log("🚀 ~ file: popupStore.js ~ line 37 ~ PopupStore ~ setParentContainerWidth ~ width", width)
        return this.parentContainerWidth = width;
    }
    setParentContainerHeight(height) {
        // console.log("🚀 ~ file: popupStore.js ~ line 41 ~ PopupStore ~ setParentContainerHeight ~ height", height)
        return this.parentContainerHeight = height;
    }

}

const PopupStoreStore = new PopupStore();

export const PopupStoreStoreContext = React.createContext(PopupStoreStore);
export const usePopupStore = () => React.useContext(PopupStoreStoreContext)


