const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const InsuracePolicySchema = new Schema({
	AccountHolder:{
		firstName:String,
		lastName:String
	},
	Beneficiaries:[{
		Name:{type:String,required:true},
		Address:{type:String, required:true},
		PhoneNumber:{type:String, required:true},
		AmoutToPay:{type:Number, required:true, min:0.1}
	}],
	Properties:[{
		Name: {type:String, required: true},
		Description: {type:String, required:true},
		Value:{type:Number, required:true, min: 0.1}
	}],
	Validity:{type:String, required: true},
	AmoutSum:{type:Number,required:true, min:.1},
	AmoutPay:{type:Number, required:true, min:.1},
	PaymentFrecuency:{type:String,required:true},
	Risks:[{
		Name:{type:String, required: true},
		Description:{type:String, required:true}
	}],
	user:{type:String}
});
module.exports = mongoose.model("InsuracePolicy",InsuracePolicySchema,"InsuracePolicy");