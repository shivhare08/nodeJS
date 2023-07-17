const http = require('http')
// console.log(http);


const server = http.createServer(function(req,res){
    res.write('welcome to node Js bhai')
    res.write('hii buddyddd')
    res.end()
}).listen(3000,()=>{
    console.log("server is running localhost : 3000")  
})