const InsurancePolicyRepository = require("../persistence/repositories/InsurancePolicy.repository");
const InsurancePolicyRepo= new InsurancePolicyRepository();

class InsurancePolicyInsuranceController{

    async findAll(req,res){
        try{
            let InsurancePolicies=await InsurancePolicyRepo.findAll();
            res.status(200).json(InsurancePolicies);
        }
        catch (error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async findById(req,res){
		let idInsurancePolicy= req.params.idPolicy;
        let InsurancePolicy = await InsurancePolicyRepo.findById(idInsurancePolicy);
 
        if(InsurancePolicy)
            res.send(InsurancePolicy);
        else
            res.status(404).send(`Poliza ${idInsurancePolicy} no encontrada`);
	}
	async findByUserId(req,res){
		let userId= req.params.userId;
        let InsurancePolicies = await InsurancePolicyRepo.findByUserId(userId);
        if(InsurancePolicies)
			res.status(200).json(InsurancePolicies);
        else
            res.status(404).send(`Polizas del usuario ${userId} no encontradas`);
    }
    async create(req,res){
        try{
			let InsurancePolicy=req.body;
			if(InsurancePolicy._id || InsurancePolicy._id===""){
				delete InsurancePolicy._id;
			}
			let InsurancePolicyGuardado =await InsurancePolicyRepo.create(InsurancePolicy);
				res.send(InsurancePolicyGuardado);
			}
        catch (error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async update(req,res){
        let insurancePolicy=req.body;
        try{
            let insurancePolicyGuardado=await InsurancePolicyRepo.update(insurancePolicy)
            res.status(200).json(insurancePolicyGuardado);
        }catch(error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async delete(req,res){
        try{
            let idInsurancePolicy= req.params.idPolicy;
            await InsurancePolicyRepo.delete(idInsurancePolicy);
            res.status(200).json(`Poliza ${idInsurancePolicy} eliminada`);
        }
    	catch(error){
            console.error(error);
            res.status(500).json(error.message);
        }
    }
}
module.exports = InsurancePolicyInsuranceController;