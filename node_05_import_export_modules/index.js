// creating ypour own modules
// importing and exporting theem

// each indiviual file in the nodejs is module
// so importing the module named modul is done as follows


// method 1=>
// const operator = require("./modul")
// operaator is a object and the properties are add and sub that we are going to import
// hence we have to call int he following ways:
// console.log(operator.add(5,5))
// console.log(operator.sub(10,5))




// method 2 => to import the modules
const {add , sub} = require("./modul")
console.log(add(5,5));
console.log(sub(10,5));


