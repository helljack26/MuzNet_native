const dateConverter = (date) => {
    const splitedDate = date.split(' ')
    const day = splitedDate[2]
    const year = splitedDate[3]
    const monthWord = splitedDate[1]

    let monthNumber

    switch (monthWord) {
        case 'Jan':
            monthNumber = '01'
            break;
        case 'Feb':
            monthNumber = '02'
            break;
        case 'Mar':
            monthNumber = '03'
            break;
        case 'Apr':
            monthNumber = '04'
            break;
        case 'May':
            monthNumber = '05'
            break;
        case 'Jun':
            monthNumber = '06'
            break;
        case 'Jul':
            monthNumber = '07'
            break;
        case 'Aug':
            monthNumber = '08'
            break;
        case 'Sep':
            monthNumber = '09'
            break;
        case 'Oct':
            monthNumber = '10'
            break;
        case 'Nov':
            monthNumber = '11'
            break;
        case 'Dec':
            monthNumber = '12'
            break;

        default:
            break;
    }
    const correctDate = `${day}/${monthNumber}/${year}`

    return correctDate
}

export default dateConverter;

