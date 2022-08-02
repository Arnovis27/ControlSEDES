const express= require("express");
const router= express.Router();
const userController= require("../../controller/controllerUser");

router.get("/",userController.getLogin);
router.get("/register",userController.getRegister);

module.exports= router;