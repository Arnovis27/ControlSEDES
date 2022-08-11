const express= require("express");
const router= express.Router();
const userController= require("../../controller/controllerUser");
const empresaController= require("../../controller/controllerEmpresa");

//for user
router.get("/",userController.getLogin);
router.post("/login",userController.verfilog);
router.get("/dash",userController.dashboardS);
router.get("/register",userController.getRegister);
router.post("/register/add", userController.createUser);
router.get("/dash/select/:id", userController.selectUser);
router.post("/dash/update/add/:id", userController.updateUser);
router.get("/dash/delete/:id", userController.deleteUser);

//for empresa
router.get("/dash/emp",empresaController.dashboardEmp);
router.get("/dash/empresa",empresaController.createEmpresa);
router.post("/dash/empresa/add",empresaController.addEmpresa);
router.get("/dash/emp/select/:id",empresaController.selectEmpresa);
router.post("/dash/emp/update/add/:id",empresaController.updatEmpresa);
router.get("/dash/emp/delete/:id", empresaController.revoquEmpresa);

module.exports= router;