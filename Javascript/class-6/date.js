//Date in Javascript :
//Will work in date and time

//current date and time ?
const currentDateTime= new Date();
// console.log(currentTime);//2024-09-16T14:31:37.868Z

//How to find date
// 1. getfullyear()
const year = currentDateTime.getFullYear();
// console.log(year);//2024

// 2. getMonth()
const month =currentDateTime.getMonth();
// console.log(month);//8

// 3. getDate()
const date =currentDateTime.getDate();
// console.log(date);//16

// How to find time
// 1. getHours() 
const hours = currentDateTime.getHours();
// console.log(hours);//20

// 2. getMinutes()
const minutes = currentDateTime.getMinutes();
// console.log(minutes);//23

// 3. getSeconds()
const seconds = currentDateTime.getSeconds();
// console.log(seconds);//21

//How to find day in a Week 
// 0 = Sunday,1 = Monday, 2 = Tuesday , 3 = wednesday , 4 = Thursday , 5 = Friday , 6 = saturday
const day = currentDateTime.getDay();
// console.log(day); //1

//Specific date
// ISO Format: (YYYY-MM-DDTHH:mm:ss:sssz)is the most common method used in the browser .
// Months are starting from "0" index .
const myDate = new Date("2002,6,11");
// console.log(myDate); //2002-06-10T18:30:00.000Z
// console.log("2002-06-10T18:30:00.000Z");

//Custom date
//const myBday = new Date("MM/DD/YYYY")
//const myBday = new Date("06/11/2002")
myBday = new Date("06-11-2002");
console.log(myBday);//2002-06-10T18:30:00.000Z
console.log(myBday.getDate()); //11

//Long date
const LongDate = new Date("June 11,2002");
console.log(LongDate); //2002-06-10T18:30:00.000Z
console.log(LongDate.toString()); //Tue Jun 11 2002 00:00:00 GMT+0530 (India Standard Time)
console.log(LongDate.toDateString()); //Tue Jun 11 2002
console.log(LongDate.toLocaleTimeString()); // 12:00:00 am

//Manipulate current date
// 1. add days
const addDays = currentDateTime.setDate(18);
console.log(addDays); //1726641935604
// 2. add month
const addMonth = currentDateTime.setMonth(10);
console.log(addMonth); //1731912424611
// 3. add year
const addYear = currentDateTime.setFullYear(2025);
console.log(addYear); //1763448508626

//Alternate method for adding days
const addDaysAlternate = new Date(currentDateTime.getTime()+17*24*60);
console.log(addDaysAlternate); //2025-11-18T06:51:30.965Z
console.log(addDaysAlternate.getDate()); //18
console.log(addDaysAlternate.getFullYear()); //2025
console.log(addDaysAlternate.getMonth()); //10

//or
let futureDay = new Date();
console.log(futureDay.getDay()); // 2- Tuesday
futureDay.setDate(futureDay.getDay()+5);
console.log(futureDay);
console.log(futureDay.getDay()); // 6- Saturday

//Find my current age
const myAge = new Date().getFullYear() - myBday.getFullYear();
console.log(myAge); // 22

//Difference
const curr = new Date("2024-09-17");
const bday = new Date("2002-06-11");
console.log(curr-bday); //702777600000
const age = Math.floor((curr-bday) / (1000 * 60 * 60 * 24));
console.log(age); // 8134





























