const {Blogcategory, Blog, Author} = require("../models/blog-model");

function createCleanUrl(title) {
    // Convert the title to lowercase
    let cleanTitle = title.toLowerCase();
    // Remove special characters, replace spaces with dashes
    cleanTitle = cleanTitle.replace(/[^\w\s-]/g, '');
    cleanTitle = cleanTitle.replace(/\s+/g, '-');
  
    return cleanTitle;
  }

const addbc = async (req,res)=>{
    try {
        console.log(req.body);
        const { name } = req.body;
        const status= '1';
        const url = createCleanUrl(req.body.name);
        const userExist = await Blogcategory.findOne({ name });
        
        if(userExist){
            return res.status(400).json({msg:"Blog category already exist"});

        }

        const cmCreated =  await Blogcategory.create( { name , status, url} );
        res.status(201).json({
            msg:cmCreated,
             userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};



const updatebc = async (req,res)=>{
    try {
        console.log(req.body);
        const { name } = req.body;
        const url = createCleanUrl(req.body.name);
        const id = req.params.id;
 
        const userExist = await Blogcategory.findOne({ name, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({msg:"Blog Category already exist"});

        }
        const result = await Blogcategory.updateOne({ _id:id },{
            $set:{
                name: name,
                url: url,   
            }
        },{
            new:true,
        });
        res.status(201).json({
            msg:'Updated Successfully',
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const  getbc = async(req, res) => {
    try {
        const response = await Blogcategory.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Blogcategory ${error}`);
    }
};

const  deletebc = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Blogcategory.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Blogcategory ${error}`);
    }
};

const addat = async (req,res)=>{
    try {
        console.log(req.body);
        const { name, briefintro, fblink,instalink, linkedinlink,ytlink,twitterlink } = req.body;
        const image = req.file.filename;
        const status= '1';
        const userExist = await Author.findOne({ name });
        
        if(userExist){
            return res.status(400).json({msg:"Author already exist"});

        }

        const cmCreated =  await Author.create( { name, status, briefintro,image, fblink,instalink, linkedinlink,ytlink,twitterlink } );
        res.status(201).json({
            msg:cmCreated,
            userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};



const updateat = async (req,res)=>{
    try {
        console.log(req.body);
        const { name, briefintro, fblink,instalink, linkedinlink,ytlink,twitterlink } = req.body;
        const image = req.file.filename;
        const id = req.params.id;
 
        const userExist = await Author.findOne({ name, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({msg:"Author already exist"});

        }
        const result = await Author.updateOne({ _id:id },{
            $set:{
                name: name,
                briefintro: briefintro,   
                image: image,   
                fblink: fblink,   
                instalink: instalink,   
                linkedinlink: linkedinlink,   
                ytlink: ytlink,   
                twitterlink: twitterlink,   
            }
        },{
            new:true,
        });
        res.status(201).json({
            msg:'Updated Successfully',
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const  getat = async(req, res) => {
    try {
        const response = await Author.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Author ${error}`);
    }
};

const  deleteat = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Author.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Author ${error}`);
    }
};


const addblog = async (req,res)=>{
    try {
        console.log(req.body);
        const { title, category_id, author_id,date,briefintro,details,metatitle,metadescp,metakey,canonicalurl,altfeatured,altmain,schemacode } = req.body;
        const mainimage=req.files['mainimage'][0].filename;
        const featuredimage= req.files['featuredimage'][0].filename;
        const status= '1';
        const url = createCleanUrl(req.body.title);
        const userExist = await Blog.findOne({ title });
        
        if(userExist){
            return res.status(400).json({msg:"Blog already exist"});
        }

        const cmCreated =  await Blog.create( { title,url, status, category_id, author_id,date, mainimage,featuredimage,briefintro,details,metatitle,metadescp,metakey,canonicalurl,altfeatured,altmain,schemacode });
        res.status(201).json({
            msg:cmCreated,
            userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};



const updateblog = async (req,res)=>{
    try {
        console.log(req.body);
        const { title, category_id, author_id,date,briefintro,details,metatitle,metadescp,metakey,canonicalurl,altfeatured,altmain,schemacode } = req.body;
        const mainimage=req.files['mainimage'][0].filename;
        const featuredimage= req.files['featuredimage'][0].filename;
        const id = req.params.id;
        const url = createCleanUrl(req.body.title);
        const userExist = await Blog.findOne({ title, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({msg:"Blog already exist"});

        }
        const result = await Blog.updateOne({ _id:id },{
            $set:{
                title:title,
                url:url,
                category_id:category_id,
                author_id:author_id,
                date:date,
                mainimage:mainimage,
                featuredimage:featuredimage,
                briefintro:briefintro,
                details:details,
                metatitle:metatitle,
                metadescp:metadescp,
                metakey:metakey,
                canonicalurl:canonicalurl,
                altfeatured:altfeatured,
                altmain:altmain,
                schemacode :schemacode
            }
        },{
            new:true,
        });
        res.status(201).json({
            msg:'Updated Successfully',
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const  getblog = async(req, res) => {
    try {
        const response = await Blog.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Blog ${error}`);
    }
};

const  deleteblog = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Blog.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Blog ${error}`);
    }
};

module.exports = { addbc , updatebc , getbc, deletebc, addat , updateat , getat, deleteat, addblog , updateblog , getblog, deleteblog};