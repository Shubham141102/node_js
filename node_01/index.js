// this is the most imp and required module
const fs = require("fs");
// creating a new file
fs.writeFileSync('read.txt',"write in the text file")
// this helps in creating the file and adding the data in it
// read.txt is the name of the file and the content is passsed inside it

// 02. write file sync works in this way ki pehle this prepares a txt file iftd not preseent and if its presetn then the content is updated

// 03.appending the data in the existing file
fs.appendFileSync('read.txt'," hello");


// 04. reading the data 
const data_Read = fs.readFileSync('read.txt');
console.log(data_Read)
org_data = data_Read.toString()

console.log(org_data)