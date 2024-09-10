// 1 գրել ծրագիր որը կստեղծի սերվեր և կախված url-ի փոփոխությունից կլիենտին հետ կուղարկենք հետևյալ էջերը
// / <= Home page
// /profile <= user profile 
// /login <= logini ej 
// /products <= product ej
// mcaca url neri grelu depqum grel error 

// sayte sarqel pahpanelov rest API - i gaxapare

const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        fs.readFile("./index.html", "utf-8", (err,data)=>{
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(data)
            res.end()
        })
    }else if(req.url === "/profile"){
        fs.readFile("./users.json", "utf-8", (err,data)=>{
            res.writeHead(200, {"Content-Type" : "application/json"})
            res.write(data)
            res.end()
        })
    }else if(req.url === "/login"){
        fs.readFile("./login.html", "utf-8", (err,data)=>{
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(data)
            res.end()
        })
    }else if(req.url === "/products"){
        fs.readFile("./products.html", "utf-8", (err,data)=>{
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.write(data)
            res.end()
        })
    }else{
        fs.readFile("./error.html", "utf-8", (err,data)=>{
            res.writeHead(404, {"Content-Type" : "text/html"})
            res.write(data)
            res.end()
        })
    }
})

server.listen(3003)