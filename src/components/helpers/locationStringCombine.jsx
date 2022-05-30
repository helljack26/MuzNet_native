export const locationStringCombine = (props) => {
    const { adCity, adDistrict, adStreet, adHouseNumber } = props
    const city = adCity !== undefined && 'г. ' + adCity + ','
    const district = adDistrict !== undefined && adDistrict + " район,"
    const street = adStreet !== undefined && adStreet
    const homeNumber = adHouseNumber !== undefined && adHouseNumber

    const locationString = `${city} ${district} ${street} ${homeNumber}`

    return locationString
}



