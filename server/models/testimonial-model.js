const {Schema, model} = require("mongoose");

const testimonialSchema = new Schema({
    name: {type: String, required: true},
    designation: {type: String},
    status:{type: String},
    feedback:{type: String, required: true},
});
const Testimonial = new model('Testimonial',testimonialSchema);

module.exports = Testimonial;