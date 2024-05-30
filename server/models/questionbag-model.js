const {Schema, model} = require("mongoose");

const packagesSchema = new Schema({
    name: {type: String, required: true},
    featuredimage: {type: String, required: true},
    mainimage: {type: String, required: true},
    mocktest: {type: String, required: true},
    validity: {type: String, required: true},
    price: {type: String, required: true},
    dprice: {type: String, required: true},
    briefintro: {type: String, required: true},
    details: {type: String, required: true},

});
const Packages = new model('Package',packagesSchema);
module.exports = Packages;