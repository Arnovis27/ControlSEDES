const userSchema= require("../model/users");

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
    res.render("Register.ejs");
};

const createUser= (req,res)=>{
    var body= req.body;
    var user= userSchema(body);

    user.save().then(()=>{
        console.log("Empleado Creado");
        res.redirect("/api/v1/");
    }).catch((error)=>{
        console.error(error)
        res.redirect("/api/v1/register")
    });
};

module.exports={
    getLogin,
    getRegister,
    createUser,
    verfilog,
    dashboardS
}