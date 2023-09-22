const { makeCalendar } = require("./lab-two");

makeCalendar(2022)

const { getDayOfTheWeek } = require("./lab-two");

function getDayOfTheWeekForUserDate() {
    // Below: Getting day of the week for user-inputted date
    var readlineSync = require('readline-sync');
    // Wait for user's response.
    var userMonth = readlineSync.question("Hello! Can you give me a month please? ");
    console.log("Thank you! Next question...");

    var userDay = readlineSync.question("Can I have the number of a day please? ");
    console.log("Thank you! Now the last question...");

    var userYear = readlineSync.question("Give me a year! ");
    console.log("Thank you for your information! It definitely won't be used for nefarious purposes!");
    console.log("Your day of the week is: " + (getDayOfTheWeek(userYear, userMonth, userDay)));
}

getDayOfTheWeekForUserDate()

 

