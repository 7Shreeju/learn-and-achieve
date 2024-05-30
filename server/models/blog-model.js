const {Schema, model} = require("mongoose");

const blogcategorySchema = new Schema({
    name: {type: String, required: true},
    url: {type: String},
    status:{type: String},

});
const Blogcategory = new model('Blogcategory',blogcategorySchema);

const blogSchema = new Schema({
    title: {type: String, required: true},
    category_id:{type: String, required: true},
    author_id:{type: String, required: true},
    date:{type: String, required: true},
    featuredimage:{type: String, required: true},
    mainimage:{type: String, required: true},
    briefintro:{type: String, required: true},
    details:{type: String, required: true},
    url: {type: String},
    status:{type: String},
    metatitle:{type: String},
    metadescp:{type: String},
    metakey:{type: String},
    canonicalurl:{type: String},
    altfeatured:{type: String},
    altmain:{type: String},
    schemacode:{type: String},

});
const Blog = new model('Blog',blogSchema);

const authorSchema = new Schema({
    name: {type: String, required: true},
    briefintro: {type: String, required: true},
    image: {type: String},
    status:{type: String},
    fblink:{type: String},
    instalink:{type: String},
    linkedinlink:{type: String},
    ytlink:{type: String},
    twitterlink:{type: String},
});
const Author = new model('Author',authorSchema);

module.exports = {Blogcategory, Blog, Author};