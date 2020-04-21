const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PropertySchema = new Schema({
	Name: {type:String, required: true},
	Description: {type:String, required:true},
	Value:{type:Number, required:true, min: 0.1}
});
module.exports = mongoose.model("Property",PropertySchema);