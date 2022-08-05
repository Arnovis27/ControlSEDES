const express= require("express");
const router= express.Router();
const userController= require("../../controller/controllerUser");

router.get("/",userController.getLogin);
router.post("/login",userController.verfilog);
router.get("/dash",userController.dashboardS);
router.get("/register",userController.getRegister);
router.post("/register/add", userController.createUser);
router.get("/dash/select/:id", userController.selectUser);
router.post("/dash/update/add/:id", userController.updateUser);
router.get("/dash/delete/:id", userController.deleteUser);

module.exports= router;