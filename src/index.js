const express= require("express");
const app= express();
const PORT= process.env.PORT || 3000;
const logger= require("morgan");

app.use(logger("dev"));

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>");
});

app.listen(PORT,(req,res)=>{
    console.log("Server Run in Port ",PORT);
});