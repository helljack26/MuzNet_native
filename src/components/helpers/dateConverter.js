export const dateConverter = (date) => {

    const splitedDate = `${date}`.split('-')
    console.log("🚀 ~ file: dateConverter.js ~ line 71 ~ dateConverter ~ date", splitedDate)

    const day = splitedDate[1]
    const year = splitedDate[0]
    const monthWord = splitedDate[2]

    let monthFullName
    let monthNumber

    switch (monthWord) {
        case '01' || '01':
            monthFullName = 'January'
            break;
        case '02':
            monthFullName = 'February'
            break;
        case '03':
            monthFullName = 'March'
            break;
        case '04':
            monthFullName = 'April'
            break;
        case '05':
            monthFullName = 'May'
            break;
        case '06':
            monthFullName = 'June'
            break;
        case '07':
            monthFullName = 'July'
            break;
        case '08':
            monthFullName = 'August'
            break;
        case '09':
            monthFullName = 'September'
            break;
        case '10':
            monthFullName = 'October'
            break;
        case '11':
            monthFullName = 'November'
            break;
        case '12':
            monthFullName = 'December'
            break;

        default:
            break;
    }
    const correctDate = `${day}/${monthNumber}/${year}`

    return { correctDate, monthFullName, year }
}






