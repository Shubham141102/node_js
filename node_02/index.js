// how to create asynchronous files 


const fs = require("fs");

// creating a new file
fs.writeFileSync("hello.txt","hemllo")
// the above file created is synchronous 

// now we will try to create to synchronous file but we need to understand that asynchrnous always needs a function for callback
fs.writeFile("read.txt","hello",
(err)=>{
    console.log("file is created")
    console.log(err)
});

fs.appendFile("read.txt","hellom",
(err)=>{
    console.log("extra data added")
    console.log(err)
})