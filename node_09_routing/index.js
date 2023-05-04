const http = require("http");
const server = http.createServer((req,res)=> {
    console.log(req.url)
    if (req.url =='/')
    {
        res.end('hello')
    }
    else if (req.url = 'about'){
        res.end("kuch nahi")
    }
    
});

server.listen(8000 , '127.0.0.1',() => {
    console.log("port pe chal raha hai")
})