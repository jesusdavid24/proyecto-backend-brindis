const mongose = require('mongoose');
const Schema = mongose.Schema;
 const BenefactorSchema = new Schema({
	 Name:{type:String,required:true},
	 Address:{type:String, required:true},
	 PhoneNumber:{type:String, required:true},
	 AmoutToPay:{type:Number, required:true, min:0.1}
 });
 module.exports = mongose.model("Benefactor",BenefactorSchema);