const express= require("express");
const router= express.Router();
const userController= require("../../controller/controllerUser");
const empresaController= require("../../controller/controllerEmpresa");

//for user
router.get("/",userController.getLogin);
router.post("/login",userController.verfilog);
router.get("/dash",userController.autorizado,userController.dashboardS);
router.get("/register",userController.autorizado,userController.getRegister);
router.post("/register/add", userController.autorizado,userController.createUser);
router.get("/dash/select/:id", userController.autorizado,userController.selectUser);
router.post("/dash/update/add/:id",userController.autorizado ,userController.updateUser);
router.get("/dash/delete/:id",userController.autorizado ,userController.deleteUser);
router.get("/dash/logout",userController.autorizado,userController.logout);

//for empresa
router.get("/dash/emp",userController.autorizado,empresaController.dashboardEmp);
router.get("/dash/empresa",userController.autorizado,empresaController.createEmpresa);
router.post("/dash/empresa/add",userController.autorizado,empresaController.addEmpresa);
router.get("/dash/emp/select/:id",userController.autorizado,empresaController.selectEmpresa);
router.post("/dash/emp/update/add/:id",userController.autorizado,empresaController.updatEmpresa);
router.get("/dash/emp/delete/:id", userController.autorizado,empresaController.revoquEmpresa);

module.exports= router;