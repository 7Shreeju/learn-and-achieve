const {Schema, model} = require("mongoose");

const mocktestSchema = new Schema({
    name: {type: String, required: true},
    duration: {type: String, required: true},
});
const Mocktest = new model('Mocktest',mocktestSchema);

const mocktestdetailsSchema = new Schema({
    mocktestid: {type: String, required: true},
    classname: {type: String, required: true},
    subject: {type: String, required: true},
    module: {type: String, required: true},
    noofquestion: {type: String, required: true},
});
const Mocktestdetail = new model('Mocktestdetail',mocktestdetailsSchema);
module.exports = {Mocktest, Mocktestdetail};