const {Schema, model} = require("mongoose");

const subjectSchema = new Schema({
    subjectname: {type: String, required: true},
    status: {type: String},
});
const Subject = new model('Subject',subjectSchema);
module.exports = Subject;