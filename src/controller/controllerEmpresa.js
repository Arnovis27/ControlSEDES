const empresaSchema= require("../model/empresa");
const userSchema= require("../model/users");

const dashboardEmp= (req,res)=>{
    empresaSchema.find({},(error,data)=>{
        if(error) throw error;
        res.render("HomeEmp.ejs",{
            title: "DATA",
            tasks: data
        });
    })
};

const createEmpresa= (req,res)=>{
    userSchema.find({},(error,data)=>{
        if(error) throw error;
        res.render("CreateEmpresa.ejs",{
            title: "DATA",
            tasks: data
        });
    })
};

const addEmpresa= (req,res)=>{
    var body= req.body;
    var empresa= empresaSchema(body);
    empresa.save().then(()=>{
        console.log("Empresa creada");
        res.redirect("/api/v1/dash/emp");
    }).catch((error)=>{
        console.error(error);
        res.redirect("/api/v1/empresa");
    });
};

const revoquEmpresa= (req,res)=>{
    var id= req.params.id;
    empresaSchema.remove({_id: id},(err,data)=>{
        if (err) throw data;
        console.log("Empresa Eliminada");
        res.redirect("/api/v1/dash/emp");
    });
};

const selectEmpresa= (req,res)=>{
    var id= req.params.id;
    userSchema.find({},(error,data2)=>{
        empresaSchema.findById(id,(error,data)=>{
            res.render("UpdatEmpresa.ejs",{
                title:"Update",
                tasks: data,
                tasks2: data2
            });
        });
    });
};

const updatEmpresa= (req,res)=>{
    var id= req.params.id;
    const {admin, nit, nombre, ncomercial,telefono, direccion, correo, web}= req.body;
    empresaSchema.findByIdAndUpdate(id,{admin, nit, nombre, ncomercial,telefono, direccion, correo, web}).then(()=>{
        res.redirect("/api/v1/dash/emp");
    }).catch((error)=>console.error(error));
};


module.exports= {
    dashboardEmp,
    createEmpresa,
    addEmpresa,
    revoquEmpresa,
    selectEmpresa,
    updatEmpresa
}