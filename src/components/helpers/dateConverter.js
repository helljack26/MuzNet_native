export const dateConverter = (date) => {
    console.log("🚀 ~ file: dateConverter.js ~ line 69 ~ dateConverter ~ date", date[1])

    const splitedDate = `${date}`.split(' ')

    const day = splitedDate[2]
    const year = splitedDate[3]
    const monthWord = splitedDate[1]

    let monthFullName
    let monthNumber
    console.log(splitedDate)
    switch (monthWord) {
        case 'Jan':
            monthFullName = 'January'
            monthNumber = '01'
            break;
        case 'Feb':
            monthFullName = 'February'
            monthNumber = '02'
            break;
        case 'Mar':
            monthFullName = 'March'
            monthNumber = '03'
            break;
        case 'Apr':
            monthFullName = 'April'
            monthNumber = '04'
            break;
        case 'May':
            monthFullName = 'May'
            monthNumber = '05'
            break;
        case 'Jun':
            monthFullName = 'June'
            monthNumber = '06'
            break;
        case 'Jul':
            monthFullName = 'July'
            monthNumber = '07'
            break;
        case 'Aug':
            monthFullName = 'August'
            monthNumber = '08'
            break;
        case 'Sep':
            monthFullName = 'September'
            monthNumber = '09'
            break;
        case 'Oct':
            monthFullName = 'October'
            monthNumber = '10'
            break;
        case 'Nov':
            monthFullName = 'November'
            monthNumber = '11'
            break;
        case 'Dec':
            monthFullName = 'December'
            monthNumber = '12'
            break;

        default:
            break;
    }
    const correctDate = `${day}/${monthNumber}/${year}`

    return { correctDate, monthFullName, year }
}




