export const prepareObjectKeyValueForListItem = (object) => {
    const keys = Object.keys(object)
    const values = Object.values(object)
    const ArrayWithObjectKeysAndValue = []
    for (let i = 0; i < keys.length; i++) {
        const keyItem = keys[i];
        const valueItem = values[i];
        ArrayWithObjectKeysAndValue.push({
            titleKey: keyItem,
            value: valueItem
        })
    }
    return ArrayWithObjectKeysAndValue
}