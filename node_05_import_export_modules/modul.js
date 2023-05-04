const add = (a,b) => {
    return a+b;
};
const sub = (a,b) => {
    return a-b;
};


// this is for the single return function 
// module.exports = add;

// when we have to return multiple functions: method 01
module.exports.add = add;
module.exports.sub = sub;


// method 2 to export multiple modules
// module.exports = {add , sub}
