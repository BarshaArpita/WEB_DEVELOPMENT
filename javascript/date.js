// Task-1
// Make your own custom full birthdate in javascript and find out the date, month and year :-
// let myCustomDate = new Date("06-11-2002");
// console.log(myCustomDate);//2002-06-10T18:30:00.000Z
// console.log(myCustomDate.getDate());//11
// console.log(myCustomDate.getMonth()+1);//6
// console.log(myCustomDate.getFullYear());//2002

// Task-2
// Create your own local date and time:-
// let date = new Date();
// console.log(date);
// console.log(date.toLocaleString());

// Task-3
// How can you find out what day of the week as given (25th October 5050):-
let myCustomDate = new Date(5050,10,26);
let dayOfWeek = myCustomDate.getDay(); // 0-Sunday, 1-Monday, 2-Tuesday
// console.log(dayOfWeek); 

//Task-4
// calculate the difference between two dates (21th Aug 1998) and (13th Aug 2024):-
// let date1 = new Date(1998,8,21); // YYYY-MM-DD
// let date2 = new Date(2024,8,13);
// let result = (date2 - date1)/(1000 * 3600 * 24);
// console.log(result/360); // 9489 Days //26

//Task-5
//Add 10days to the current date:-
let date = new Date();
console.log(date.getDate()+10);

