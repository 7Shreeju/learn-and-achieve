const {Schema, model} = require("mongoose");

const classmasterSchema = new Schema({
    classname: {type: String, required: true},
    endate: {type: String, required: true},
    status: {type: String},
});
const Classmaster = new model('Classmaster',classmasterSchema);
module.exports = Classmaster;