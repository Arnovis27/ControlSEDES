const express= require("express");
const app= express();
const PORT= process.env.PORT || 3000;
const logger= require("morgan");
const bodyParser= require("body-parser"); //entender peticiones post
const ruta= require("./v1/routes/routes");
const mongoose= require("mongoose");
const path= require("path");
require("dotenv").config();
var session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(cookieParser());
app.use( session( {
    secret: process.env.TOKEN_SECRET,
    resave: true,
    saveUninitialized: true
}));

//rutas
app.use("/api/v1",ruta);

mongoose.connect(process.env.MONGODBURI).then(()=>{
    console.log("Connect to DATABASE");
}).catch((error)=>console.error(error));

app.listen(PORT,(req,res)=>{
    console.log("Server Run in Port ",PORT);
});