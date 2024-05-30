const Subject = require("../models/subject-model");

const add = async (req,res)=>{
    try {
        console.log(req.body);
        const { subjectname } = req.body;
        const status =1;
        const userExist = await Subject.findOne({ subjectname });
        
        if(userExist){
            return res.status(400).json({msg:"Subject already exist"});

        }

        const cmCreated =  await Subject.create( { subjectname, status } );
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
        
        const {subjectname} = req.body;
        const id = req.params.id;

        
        const userExist = await Subject.findOne({ subjectname, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({msg:"Subject already exist"});

        }


        const result = await Subject.updateOne({ _id: id },{
            $set:{
                subjectname: subjectname,
            }
        });
        res.status(201).json({
            msg:'updated Successfully',
             
        });

    } catch (error) {
     res.status(500).json(error);
    }
};

const status = async (req,res)=>{
    try {
        
        const { status } = req.body;
        const id = req.params.id;
    
        const result = await Subject.updateOne({ _id:id },{
            $set:{
                status: status,
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
        const response = await Subject.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Subject ${error}`);
    }
};

const  getbyid = async(req, res) => {
    try {
        const id = req.params.id;
        const response = await Subject.find({ _id:id });
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`ClassMaster ${error}`);
    }
};

const  deletecm = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Subject.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Subject ${error}`);
    }
};
module.exports = { add , update , get, deletecm, getbyid, status};