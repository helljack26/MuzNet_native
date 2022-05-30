export const sizeStringCombine = (props) => {
    const { propertyArea, apartmentRoomNumber, plotArea } = props
    const arr = []
    apartmentRoomNumber !== undefined && arr.push(`${apartmentRoomNumber} комнат`)
    propertyArea !== undefined && arr.push(`${propertyArea} м²`)
    plotArea !== undefined && arr.push(`${plotArea} соток`)

    const arrWithDoted = []
    const dot = ' • '

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        arrWithDoted.push(element)
        arrWithDoted.push(dot)
    }
    if (arrWithDoted[arrWithDoted.length - 1] === dot) arrWithDoted.pop()
    const joinedSize = arrWithDoted.join('')

    return joinedSize
}



