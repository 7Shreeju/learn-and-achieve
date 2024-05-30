const {Faqcategory, Faq} = require("../models/faq-model");

function createCleanUrl(title) {
    // Convert the title to lowercase
    let cleanTitle = title.toLowerCase();
    // Remove special characters, replace spaces with dashes
    cleanTitle = cleanTitle.replace(/[^\w\s-]/g, '');
    cleanTitle = cleanTitle.replace(/\s+/g, '-');
  
    return cleanTitle;
  }

const addfc = async (req,res)=>{
    try {
        console.log(req.body);
        const { name } = req.body;
        const status= '1';
        const url = createCleanUrl(req.body.name);
        const userExist = await Faqcategory.findOne({ name });
        
        if(userExist){
            return res.status(400).json({msg:"Faq category already exist"});

        }

        const cmCreated =  await Faqcategory.create( { name , status, url} );
        res.status(201).json({
            msg:cmCreated,
             userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};



const updatefc = async (req,res)=>{
    try {
        console.log(req.body);
        const { name } = req.body;
        const url = createCleanUrl(req.body.name);
        const id = req.params.id;
 
        const userExist = await Faqcategory.findOne({ name, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({msg:"Faq Category already exist"});

        }
        const result = await Faqcategory.updateOne({ _id:id },{
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

const  getfc = async(req, res) => {
    try {
        const response = await Faqcategory.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Faqcategory ${error}`);
    }
};

const  deletefc = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Faqcategory.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Faqcategory ${error}`);
    }
};

const add = async (req,res)=>{
    try {
        console.log(req.body);
        const { categoryid, question, answer } = req.body;
        const status= '1';
        const url = createCleanUrl(req.body.question);
        // const userExist = await Faq.findOne({ name });
        
        // if(userExist){
        //     return res.status(400).json({msg:"Faq already exist"});

        // }

        const cmCreated =  await Faq.create( {categoryid, question, answer, status, url} );
        res.status(201).json({
            msg:cmCreated,
             userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};



const update = async (req,res)=>{
    try {
        console.log(req.body);
        const { categoryid, question, answer } = req.body;
        const url = createCleanUrl(req.body.question);
        const id = req.params.id;
 
        // const userExist = await Faq.findOne({ name, _id: { $ne: id }});
        
        // if(userExist){
        //     return res.status(400).json({msg:"Faq already exist"});

        // }
        const result = await Faq.updateOne({ _id:id },{
            $set:{
                categoryid: categoryid,
                question:question,
                answer:answer,
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

const  get = async(req, res) => {
    try {
        const response = await Faq.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Faq ${error}`);
    }
};

const  deletef = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Faq.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Faq ${error}`);
    }
};

module.exports = { addfc , updatefc , getfc, deletefc, add, update, get, deletef};