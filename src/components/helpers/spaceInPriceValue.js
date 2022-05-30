export const spaceInPriceValue = (priceValue) => {
    if (priceValue !== undefined) {
        return priceValue.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }
}