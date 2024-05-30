const Questionbag = require("../models/questionbag-model");

const add = async (req,res)=>{
    try {
        console.log(req.body);
        const { classname , medium, subject, module, topic, questiontype, question, option, coption, solution } = req.body;
  
        const userExist = await Questionbag.findOne({ classname , medium, subject, module, topic, questiontype, question, });
        
        if(userExist){
            return res.status(400).json({msg:"Question  already exist"});

        }

        const cmCreated =  await Questionbag.create( { classname , medium, subject, module, topic, questiontype, question, option, coption, solution } );
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
        const { classname , medium, subject, module, topic, questiontype, question, option, coption, solution } = req.body;
        const id = req.params.id;
 
        const userExist = await Questionbag.findOne({ question, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({msg:"question already exist"});

        }
        const result = await Questionbag.updateOne({ _id:id },{
            $set:{
                classname: classname,
                medium:medium,
                subject:subject,
                module:module,
                topic:topic,
                questiontype:questiontype,
                question:question,
                option:option,
                coption:coption,
                solution:solution
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
        const response = await Questionbag.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Questionbag ${error}`);
    }
};

const  deletecm = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Questionbag.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Questionbag ${error}`);
    }
};
module.exports = { add , update , get, deletecm};