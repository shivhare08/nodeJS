const fs = require('fs');
// console.log(fs)

//fs has the power to read or execute the .txt files..and we use the fs's function (readFile)
//then ..we gibe the path and utf-8 is the formate to represent the data in readable method

//async method
fs.readFile(__dirname+"/teacher.txt",'utf-8',(error,data)=>{
    console.log(data);
})
console.log('hlo bhai')