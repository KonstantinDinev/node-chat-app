var moment = require('moment');


// var date = moment();
// date.add(100, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))

// setInterval(() => {
// 	console.log('\033[2J');
// 	console.log(moment().format('LTS'));
// }, 1000);