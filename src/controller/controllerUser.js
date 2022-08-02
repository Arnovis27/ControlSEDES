const userSchema= require("../model/users");

const getLogin= (req,res)=>{
    res.render("Login.ejs");
};

const getRegister= (req,res)=>{
    res.render("Register.ejs");
};

module.exports={
    getLogin,
    getRegister
}