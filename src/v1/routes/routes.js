const express= require("express");
const router= express.Router();
const userController= require("../../controller/controllerUser");

router.get("/",userController.getLogin);
router.post("/login",userController.verfilog);
router.get("/dash",userController.dashboardS);
router.get("/register",userController.getRegister);
router.post("/register/add", userController.createUser);

module.exports= router;