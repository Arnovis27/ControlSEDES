const mongoose= require("mongoose");

const userSchema= mongoose.Schema({
    nombres:{
        type: String
    },
    apellidos:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    telefono:{
        type: Number
    },
    empresa:{
        type: String
    },
    autoridad:{
        type: String
    }
});

module.exports= mongoose.model("Users",userSchema);