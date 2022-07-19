// enables proper formatting of dates in thoughts and reactions

const addDateSuffix = date => {
    let dateString = date.toString();

    // focus on last character of date string
    const lastCharacter = dateString.charAt(dateString.length - 1);

    if (lastCharacter === '1' && dateStr !== '11') {
        dateString = `${dateString}st`;
    } else if (lastCharacter === '2' && dateStr !== '12') {
        dateString = `${dateString}nd`;
    } else if (lastCharacter === '3' && dateStr !== '13') {
        dateString = `${dateString}rd`;
    } else {
        dateString = `${dateString}th`;
    }

    return dateString;
};

// function to format and accept timestamp
module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
) => {
    let month;

    //accepts standard and abbreviated months
    if (monthLength === 'short') {
        month = {
            0: 'Jan',
            1: 'Feb',
            2: 'Mar',
            3: 'Apr',
            4: 'May',
            5: 'Jun',
            6: 'Jul',
            7: 'Aug',
            8: 'Sep',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec'
        };
    } else {
        month = {
            0: 'January',
            1: 'February',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'August',
            8: 'September',
            9: 'October',
            10: 'November',
            11: 'December'
        };
    }

    const dateObject = new Date(timestamp);
    const formattedMonth = month[dateObject.getMonth()];

    let dayOfMonth;

    if (dateSuffix) {
        dayOfMonth = addDateSuffix(dateObject.getDate());
    } else {
        dayOfMonth = dateObject.getDate();
    }

    const year = dateObject.getFullYear();

    let hour;
    // checks for 24-hour time
    if (dateObject.getHours > 12) {
        hour = Math.floor(dateObject.getHours() / 2);
    } else {
        hour = dateObject.getHours();
    }
    if (hour === 0) {
        hour = 12;
    }

    const minutes = dateObject.getMinutes();

    // sets am or pm
    let amOrPm;

    if (dateObject.getHours() >= 12) {
        amOrPm = 'pm';
    } else {
        amOrPm = 'am';
    }

    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${amOrPm}`;

    return formattedTimeStamp;
};