var express = require("express");
var app = express();

app.get("/",(req,res)=>{
res.sendFile(__dirname +"/Pages/home.html");
});

app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/Pages/about.html");
});

app.get("/home",(req,res)=>{
    res.sendFile(__dirname + "/Pages/home.html");
});



app.listen(8081,()=>{
    console.log("website run the portal http://localhost:8081/");
});

