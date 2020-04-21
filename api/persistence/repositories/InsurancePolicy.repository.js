const InsurancePolicySchema = require("../schemas/InsurancePolicy.schema");

class InsurancePolicyRepository{
    async findAll(){
        let InsurancePolicies=await InsurancePolicySchema.find();
        return InsurancePolicies;
    }

    async findById(idInsurancePolicy){
        let insurancePolicy = await InsurancePolicySchema.findOne({_id: idInsurancePolicy});
        return insurancePolicy;
	}
	async findByUserId(userId){
        let InsurancePolicies = await InsurancePolicySchema.find({user: userId});
        return InsurancePolicies;
    }
    async create(insurancePolicy){
        insurancePolicy = new InsurancePolicySchema(insurancePolicy);
        let insurancePolicyGuardado = await insurancePolicy.save();
        return insurancePolicyGuardado;
    }

    async delete (idInsurancePolicy){
        let insurancePolicy= await this.findById(idInsurancePolicy);
        if(insurancePolicy){
            await insurancePolicy.remove();
        }else{
            throw Error(`Poliza ${idInsurancePolicy} no encontrada`);
        }
    }

    async update(insurancePolicyEdited){
        let insurancePolicy = await this.findById(insurancePolicyEdited._id);
        if(insurancePolicy){
			insurancePolicy.AccountHolder.firstName=insurancePolicyEdited.AccountHolder.firstName;
            insurancePolicy.AccountHolder.lastName=insurancePolicyEdited.AccountHolder.lastName;
			
			insurancePolicy.Beneficiaries.Name=insurancePolicyEdited.Beneficiaries.Name;
			insurancePolicy.Beneficiaries.Address=insurancePolicyEdited.Beneficiaries.Address;
			insurancePolicy.Beneficiaries.PhoneNumber=insurancePolicyEdited.Beneficiaries.PhoneNumber;
			insurancePolicy.Beneficiaries.AmoutToPay=insurancePolicy.Beneficiaries.AmoutToPay;

			insurancePolicy.Properties.Name=insurancePolicyEdited.Properties.Name;
			insurancePolicy.Properties.Description=insurancePolicyEdited.Properties.Description;
			insurancePolicy.Properties.Value=insurancePolicyEdited.Properties.Value;
			
			insurancePolicy.Validity=insurancePolicyEdited.Validity;
			insurancePolicy.AmoutSum=insurancePolicyEdited.AmoutSum;
			insurancePolicy.AmoutPay=insurancePolicyEdited.AmoutPay;
			insurancePolicy.PaymentFrecuency=insurancePolicyEdited.PaymentFrecuency;

			insurancePolicy.Risks.Name=insurancePolicyEdited.Risks.Name;
			insurancePolicy.Risks.Description=insurancePolicyEdited.Risks.Description;
			
            return await insurancePolicy.save();
        }else{
            throw Error(`Producto ${clienteEditado._id} no encontrado`);
        }
    }
}

module.exports = InsurancePolicyRepository;