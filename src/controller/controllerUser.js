const userSchema= require("../model/users");

const getLogin= (req,res)=>{
    res.send("<h1>Hello World</h1>")
};

module.exports={
    getLogin
}