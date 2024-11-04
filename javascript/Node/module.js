let os = require('os');
//console.log(os);
console.log(os.homedir());

const data = require('./people');    //this is how we can use data of anothert file
console.log(data);

const {people , age} = require('./people')
console.log(people,age);