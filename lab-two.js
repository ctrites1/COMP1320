/*

This function returns the day of the week (e.g. "Wednesday") 
for a specified date (e.g. October 31, 2019).
It must make use of another function you write whose signature is:
\`function isLeapYear(year)` ****(see: http://en.wikipedia.org/wiki/Leap_year)
which returns true (e.g. for 1996, 2000, 2012, etc) or false 
(e.g. for 1900, 2011, etc) depending on whether a year is a leap year or not.
*/


function isLeapYear(year) {
    // Leap year if year is a a multiple of 4 or a multiple of 400 but not 100
    if ((0 == year % 4) || ((year % 100 != 0) && (year % 400 == 0))) {
    // {
        return true;
    }   else {
        return false;
    } 
}

// Step 1: Only look at the last two digits of the year

function lastTwoDigits(year) {
    const strYear = year.toString();
    
    return parseInt((strYear.slice(2, 4)));
}
// determine how many 12s fit in it
// Step 2:  Look at the remainder of this division
// console.log((lastTwoDigits(1965)) % 12)

// Step 3:  How many 4s fit into that remainder:
// console.log(Math.round(((lastTwoDigits(1965)) % 12) / 4))

// function for getting the first two digits of the year
function firstTwoDigits(year) {
    const strYear = year.toString();
    
    return parseInt((strYear.slice(0, 2)));
}


function getDayOfTheWeek(year,month,day) {
    let yearCode = ((Math.floor(((lastTwoDigits(year)) % 12) / 4)) + 
        Math.floor((lastTwoDigits(year)) / 12) + 
        Math.floor((lastTwoDigits(year)) % 12)) ;

    let dayCode = day;
    let monthCode = undefined;

    if ((month == "April") || (month == "July")) {
        let monthCode = 0;
    } else if ((month == "January") || (month == "October")) {
        monthCode = 1;
    } else if (month == "May") {
        monthCode = 2;
    } else if (month == "August") {
        monthCode = 3;
    } else if ((month == "February") || (month == "March") || (month == "November")) {
        monthCode = 4;
    } else if (month == "June") {
        monthCode = 5;
    } else if ((month == "September") || (month == "December")) {
        monthCode = 6;
    }

// codeSum adds the calculated yearCode, dayCode, and monthCode    
    let codeSum = (yearCode + dayCode + monthCode);
    let modifiedCodeSum = 0

    if (((month == "January") || (month == "February")) && (isLeapYear(year) == true)) {
        let modifiedCodeSum = (codeSum - 1);
    } else if (firstTwoDigits(year) == 16) {
        modifiedCodeSum = (codeSum + 6);
    } else if (firstTwoDigits(year) == 17) {
        modifiedCodeSum = (codeSum + 4);
    } else if (firstTwoDigits(year) == 18) {
        modifiedCodeSum = (codeSum + 2);
    } else if (firstTwoDigits(year) == 20) {
        modifiedCodeSum = (codeSum + 6);
    } else if (firstTwoDigits(year) == 21) {
        modifiedCodeSum = (codeSum + 4);
    } else {
        modifiedCodeSum = codeSum
    }

    let dayoftheweekCode = (modifiedCodeSum % 7);
    let DayOfTheWeek = undefined ;
    
    if (dayoftheweekCode == 1) {
        DayOfTheWeek = "Sunday";
    } else if (dayoftheweekCode == 2) {
        DayOfTheWeek = "Monday";
    } else if (dayoftheweekCode == 3) {
        DayOfTheWeek = "Tuesday";
    } else if (dayoftheweekCode == 4) {
        DayOfTheWeek = "Wednesday";
    } else if (dayoftheweekCode == 5) {
        DayOfTheWeek = "Thursday";
    } else if (dayoftheweekCode == 6) {
        DayOfTheWeek = "Friday";
    } else if (dayoftheweekCode == 0) {
        DayOfTheWeek = "Saturday";
    }
    return(DayOfTheWeek);

}

// Test Code
//console.log(getDayOfTheWeek(1999,"December",26))

// Function Number 3 let's go boyz
// prints out the date and day of the week using loops, for each day in 2023

/* 
365 days in a non-leap year, 366 days in a leap year
28 days in February if non-leap year, 29 days in a year if leap year
*/

function daysInAYear(year) {
    if (isLeapYear(year) == true) {
        return 366;
    } else {
        return 365;
    }
}

const months31Days = ["January", "March", "May", "July", "August","October", "December"];
const months30Days =  ["April", "June", "September", "November"] 
const monthFeb = ["February"]


function daysInAMonth(month, year) {
    if ((isLeapYear(year) == true) && (monthFeb.includes(month))) {
        return 29;
    } else if ((isLeapYear(year) == false) && (monthFeb.includes(month))) {
        return 28;
    } else if (months30Days.includes(month)) {
        return 30;
    } else if (months31Days.includes(month)) {
        return 31;
    }
}

function getMonthNumber(month) {
    if (month == "January") {
        return 1;
    } else if (month == "February") {
        return 2;
    } else if (month == "March") {
        return 3;
    } else if (month == "April") {
        return 4;
    } else if (month == "May") {
        return 5;
    } else if (month == "June") {
        return 6;
    } else if (month == "July") {
        return 7;
    } else if (month == "August") {
        return 8;
    } else if (month == "September") {
        return 9;
    } else if (month == "October") {
        return 10;
    } else if (month == "November") {
        return 11;
    } else if (month == "December") {
        return 12;
    }

}

function singleMonthLoop(month, year) {
    let c = 1 ;
    let output = '';
    for (let c = 1; c <= daysInAMonth(month, year); c++) {
        console.log(getMonthNumber(month) + "-" + c + "-" + year + " is a " + getDayOfTheWeek(year,month,c) + ".");
    }
    return;

}

const monthList = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];

function makeCalendar(theYear) {
    
    for (let eachMonth of monthList) {
        singleMonthLoop(eachMonth, theYear)
    }
}

// Test Code
// makeCalendar(1999)

// end year at (12-31-yyyy) and/or after 365 days

module.exports = {makeCalendar, getDayOfTheWeek}