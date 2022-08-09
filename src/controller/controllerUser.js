const userSchema= require("../model/users");
const empresaSchema= require("../model/empresa");

//agregando la cuenta admin
const superuser= new userSchema({
    nombres:"Super",
    apellidos: "User",
    email: "admin@gmail.com",
    password: 12345,
    telefono:987654321,
    empresa: "XXXX",
    autoridad: "SuperUser",
});

var consulta;
var usersup= superuser["email"];

//validando que el admin ya exista
userSchema.findOne({email:usersup}).then((data)=>{
    consulta =data;
    if( consulta== null ){
        superuser.save()
        console.log("Admin creado");
    }
});

const getLogin= (req,res)=>{
    res.render("Login.ejs");
};

const verfilog= (req,res)=>{
    const {email, password}= req.body;
    userSchema.findOne({email, password}).then((data)=>{
        if(data!=null){
            res.redirect("/api/v1/dash");
        } else{
            res.redirect("/api/v1/");
        };
    });

};

const dashboardS= (req,res)=>{
    userSchema.find({},(error,data)=>{
        if(error) throw error;
        res.render("HomeSup.ejs",{
            title: "DATA",
            tasks: data
        });
    })
};

const getRegister= (req,res)=>{
    empresaSchema.find({},(error,data)=>{
        if(error) throw error;
        res.render("Register.ejs",{
            title: "DATA",
            tasks: data
        });
    })
};

const createUser= (req,res)=>{
    var body= req.body;
    var user= userSchema(body);

    user.save().then(()=>{
        console.log("Empleado Creado");
        res.redirect("/api/v1/dash");
    }).catch((error)=>{
        console.error(error)
        res.redirect("/api/v1/register")
    });
};

const deleteUser= (req,res)=>{
    var id= req.params.id;
    userSchema.remove({_id:id},(err,data)=>{
        if(err) throw err;
        console.log("Eliminado");
        res.redirect("/api/v1/dash");
    });
};

const selectUser= (req,res)=>{
    var id= req.params.id;
    userSchema.findById(id,(error,data)=>{
        res.render("Update.ejs",{
            title:"Update",
            tasks: data
        });
    });
};

const updateUser= (req,res)=>{
    var id= req.params.id;
    const {nombres, apellidos, email, password,telefono, empresa, autoridad}= req.body;
    userSchema.findByIdAndUpdate(id,{nombres, apellidos, email, password,telefono, empresa, autoridad}).then(()=>{
        res.redirect("/api/v1/dash");
    }).catch((error)=>console.error(error));
};

module.exports={
    getLogin,
    getRegister,
    createUser,
    verfilog,
    dashboardS,
    deleteUser,
    selectUser,
    updateUser
}