import React from 'react';
import {
    PermissionsAndroid,
    Platformn
} from "react-native";
import { makeAutoObservable, action, runInAction, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class ChatAttachment {
    attachedFile = {
        cameraPhoto: {},
        photo: {},
        video: {},
        file: {},
    }

    isOpenChatAttachment = false

    constructor() {
        makeAutoObservable(this, {
            attachedFile: observable,
            isOpenChatAttachment: observable,

            setOpenChatAttachment: action.bound,
            setCameraImage: action.bound,
            setCameraRoll: action.bound,
            resetState: action.bound,
            setAttachedFile: action.bound,
        })
    }

    setOpenChatAttachment(boolean) {
        this.isOpenChatAttachment = boolean
    }
    setCameraImage(source) {
        this.attachedFile.cameraPhoto = source
        console.log("🚀 ~ file: ChatAttachmentStore.js ~ line 37 ~ ChatAttachment ~ setCameraImage ~  this.attachedFile", this.attachedFile)
    }

    resetState() {

    }

    setAttachedFile(file) {
        console.log("🚀 ~ file: ChatAttachmentStore.js ~ line 35 ~ ChatAttachmentStore ~ setAttachedFile ~ offer", offer)
    }
    setCameraRoll() {

    }
}

const ChatAttachmentStore = new ChatAttachment();

export const ChatAttachmentStoreContext = React.createContext(ChatAttachmentStore);
export const useChatAttachmentStore = () => React.useContext(ChatAttachmentStoreContext)


