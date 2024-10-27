let startDate = new Date()
//let startDate = new Date('04-11-2002');
//let startDate = new Date('11-04-2002');
console.log(startDate);
//let startDate = new Date('January 1,2020')
// setInterval(function(){
//     let date = new Date();
//     console.log(date)
// },1000);


//for date in millis
let dateInMillis = Date.now();
console.log(dateInMillis);

// Dealing with timezones.
console.log(startDate.getHours()); // gets local time
//but new Date(), the date displayed will be in GMT/UTC.

//getYear returns num of years from 1900 to current
console.log(startDate.getYear());

//getFullYear returns correct year number
console.log(startDate.getFullYear());

//getMonth returns month num starting from 0
console.log(startDate.getMonth());

//getHours returns hours in 24 hour format
console.log(startDate.getHours());

//To get in UTC use function as .getUTCHours(), .getUTCDate()

//to get diff between utc and your zone
console.log(startDate.getTimezoneOffset())

//change the date, minute,hour as required.
let today = new Date();
today.setDate(31);
console.log(today);