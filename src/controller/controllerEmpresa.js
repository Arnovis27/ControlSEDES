const empresaSchema= require("../model/empresa");

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
    res.render("CreateEmpresa.ejs");
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


module.exports= {
    dashboardEmp,
    createEmpresa,
    addEmpresa,
    revoquEmpresa
}