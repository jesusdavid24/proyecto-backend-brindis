const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RiskSchema = new Schema({
	Name:{type:String, required: true},
	Description:{type:String, required:true}
});
module.exports = mongoose.model("Risk", RiskSchema);