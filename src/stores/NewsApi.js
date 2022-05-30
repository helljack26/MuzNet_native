import React from 'react';
import { makeAutoObservable, action, observable } from 'mobx';
import { apiMocks } from '@/api/mock/apiMocks'

class NewsApi {
    news = []
    similarNews = []

    constructor() {
        makeAutoObservable(this, {
            news: observable,
            similarNews: observable,
            setNews: action.bound,
            getSimilarNews: action.bound,
        })
    }
    setNews() {
        this.news = []
        return this.news = apiMocks.NewsMockApi
    }
    getSimilarNews() {
        this.similarNews = []
        const similar = []
        for (let i = 0; i < 3; i++) {
            similar.push(apiMocks.NewsMockApi[i])
        }
        return this.similarNews = similar

    }

}

const newsApiStore = new NewsApi();

export const NewsApiStoreStoreContext = React.createContext(newsApiStore);
export const useNewsApiStore = () => React.useContext(NewsApiStoreStoreContext)


