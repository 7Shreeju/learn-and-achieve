
const {Schema, model} = require("mongoose");

const faqcategorySchema = new Schema({
    name: {type: String, required: true},
    url: {type: String},
    status:{type: String},

});
const Faqcategory = new model('Faqcategory',faqcategorySchema);

const faqSchema = new Schema({
    categoryid: {type: String, required: true},
    question: {type: String, required: true},
    answer: {type: String, required: true},
    url: {type: String},
    status:{type: String},

});
const Faq = new model('Faq',faqSchema);

module.exports = {Faqcategory, Faq};