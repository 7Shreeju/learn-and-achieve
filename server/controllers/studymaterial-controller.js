const {Studymaterial, Module, Topic} = require("../models/studymaterial-model");

const addst = async (req,res)=>{
    try {
        console.log(req.body);
        const { classname, medium,subject } = req.body;
  
        // const userExist = await Studymaterial.findOne({ subjectname });
        
        // if(userExist){
        //     return res.status(400).json({msg:"Subject already exist"});

        // }

        const cmCreated =  await Studymaterial.create( { classname, medium,subject } );
        res.status(201).json({
            msg:cmCreated,
             userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const updatest = async (req,res)=>{
    try {
        
        const { classname, medium,subject } = req.body;
        const id = req.params.id;

        
        // const userExist = await Studymaterial.findOne({ classname, medium,subject, _id: { $ne: id }});
        
        // if(userExist){
        //     return res.status(400).json({msg:"Subject already exist"});

        // }


        const result = await Studymaterial.updateOne({ _id: id },{
            $set:{
                classname: classname,
                medium: medium,
                subject:subject
            }
        });
        res.status(201).json({
            msg:'updated Successfully',
             
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const  getst = async(req, res) => {
    try {
        const response = await Studymaterial.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Studymaterial ${error}`);
    }
};

const  deletecmst = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Studymaterial.findOneAndDelete(({_id:id}));
        const response1 = await Module.findOneAndDelete(({stmt_id:id}));
        const userExist = await Module.findOne({ stmt_id});
        const response3 = await Topic.findOneAndDelete(({module_id:userExist.id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Studymaterial ${error}`);
    }
};

const addmd = async (req,res)=>{
    try {
        console.log(req.body);
        const {modulename, stmt_id } = req.body;
  
        const userExist = await Module.findOne({ modulename, stmt_id});
        
        if(userExist){
            return res.status(400).json({msg:"Module already exist"});

        }

        const cmCreated =  await Module.create( { modulename, stmt_id } );
        res.status(201).json({
            msg:cmCreated,
            userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const updatemd = async (req,res)=>{
    try {
        
        const { modulename} = req.body;
        const id = req.params.id;

        
        // const userExist = await Module.findOne({ classname, medium,subject, _id: { $ne: id }});
        
        // if(userExist){
        //     return res.status(400).json({msg:"Subject already exist"});

        // }


        const result = await Module.updateOne({ _id: id },{
            $set:{
                modulename: modulename,
            }
        });
        res.status(201).json({
            msg:'updated Successfully',
             
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const  getmd = async(req, res) => {
    try {
        const response = await Module.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Module ${error}`);
    }
};

const  deletecmmd = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Module.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Module ${error}`);
    }
};


const addtp = async (req,res)=>{
    try {
        console.log(req.body);
        const { module_id, stmt_id, topic_name, topic_details } = req.body;
  
        const userExist = await Topic.findOne({ module_id, stmt_id, topic_name,});
        
        if(userExist){
            return res.status(400).json({msg:"Topic already exist"});

        }

        const cmCreated =  await Topic.create( { module_id, stmt_id, topic_name, topic_details } );
        res.status(201).json({
            msg:cmCreated,
            userId:cmCreated._id.toString(),
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const updatetp = async (req,res)=>{
    try {
        
        const { topic_name, topic_details} = req.body;
        const id = req.params.id;

        
        // const userExist = await Topic.findOne({ classname, medium,subject, _id: { $ne: id }});
        
        // if(userExist){
        //     return res.status(400).json({msg:"Subject already exist"});

        // }


        const result = await Topic.updateOne({ _id: id },{
            $set:{
                topic_name:topic_name,
                topic_details:topic_details
            }
        });
        res.status(201).json({
            msg:'updated Successfully',
             
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const  gettp = async(req, res) => {
    try {
        const response = await Topic.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Topic ${error}`);
    }
};

const  deletecmtp = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Topic.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Topic ${error}`);
    }
};

module.exports = { addst , updatest , getst, deletecmst,  addmd , updatemd, getmd, deletecmmd, addtp , updatetp, gettp, deletecmtp};