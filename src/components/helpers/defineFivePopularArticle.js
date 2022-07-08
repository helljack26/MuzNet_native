export const defineFivePopularArticle = (faqData) => {
    const articleScope = []
    faqData.forEach((item) => {
        item.topicsArticles.forEach((article) => {
            articleScope.push(article);
        })
    })
    const sortPopular = articleScope.sort((a, b) => a.articleViews < b.articleViews ? 1 : -1);
    return sortPopular.slice(0, 5)
}


