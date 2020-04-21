const express= require("express");
const router = express.Router();

const InsurancePolicyController=require("../api/controllers/InsurancePolicy.controllers");
const InsurancePolicysController= new InsurancePolicyController();
const UserController=require("../api/controllers/Users.controllers");
const userController= new UserController();

/************************* InsurancePolicies **********************/
router.get("/InsurancePolicies",InsurancePolicysController.findAll);  
router.get("/InsurancePolicies/:idPolicy",InsurancePolicysController.findById);
router.get("/InsurancePoliciesByUserId/:userId",InsurancePolicysController.findByUserId);
router.post("/InsurancePolicies",InsurancePolicysController.create);
router.delete("/InsurancePolicies/:idPolicy",InsurancePolicysController.delete);
router.put("/InsurancePolicies",InsurancePolicysController.update);
/************************* Users **********************/
router.get("/Users",userController.findAll);  
router.get("/Users/:idUser",userController.findById);
router.post("/Users",userController.create);
router.delete("/Users/:idUser",userController.delete);
router.put("/Users",userController.update);
router.post("/Users/Login",userController.Login);
    
router.get("/",(req,res)=>{
        res.send("Hola, Sean Todxs Bienvenidxs");
});
    
module.exports=router;