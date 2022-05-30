import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';

class PopupDataStore {
    popupData

    constructor() {
        makeAutoObservable(this, {
            popupData: observable,

            setPopupData: action.bound,
        })
    }

    setPopupData(data) {
        // console.log("🚀 ~ file: popupStore.js ~ line 29 ~ PopupDataStore ~ setPopupData ~ data", data)
        return this.popupData = data;
    }

}

const PopupDataStoreStore = new PopupDataStore();

export const PopupDataStoreStoreContext = React.createContext(PopupDataStoreStore);
export const usePopupDataStore = () => React.useContext(PopupDataStoreStoreContext)


