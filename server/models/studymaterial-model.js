const {Schema, model} = require("mongoose");

const studymaterialSchema = new Schema({
    classname: {type: String, required: true},
    medium: {type: String, required: true},
    subject: {type: String, required: true},
});
const Studymaterial = new model('Studymaterial',studymaterialSchema);

const moduleSchema = new Schema({
    stmt_id: {type: String, required: true},
    modulename: {type: String, required: true},
});
const Module = new model('Module',moduleSchema);

const topicSchema = new Schema({
    stmt_id: {type: String, required: true},
    module_id: {type: String, required: true},
    topic_name:{type: String, required: true},
    topic_details:{type: String, required: true},
});
const Topic = new model('Topic',topicSchema);

module.exports = {Studymaterial, Module, Topic};