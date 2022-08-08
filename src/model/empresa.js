const mongoose= require("mongoose");

const empresaSchema= mongoose.Schema({
    admin:{
        type: String
    },
    nit:{
        type: Number
    },
    nombre:{
        type: String
    },
    ncomercial:{
        type: String
    },
    telefono:{
        type: Number
    },
    direccion:{
        type: String
    },
    correo:{
        type: String
    },
    web:{
        type: String
    }
});

module.exports= mongoose.model("Empresa",empresaSchema);