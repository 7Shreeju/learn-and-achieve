const Classmaster = require("../models/classmaster-model");

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

const add = async (req,res)=>{
    try {
        console.log(req.body);
        const { classname , endate} = req.body;
        const formattedDate = formatDate(req.body.endate);
        const status =1;
        const userExist = await Classmaster.findOne({ classname });
        
        if(userExist){
            return res.status(400).json({message:"Class already exist"});
        }

        const cmCreated =  await Classmaster.create( { classname , endate:formattedDate , status} );
        res.status(201).json({
            message:'Class added Successfully',
            userId:cmCreated._id.toString(),
        });

    } catch (error) {
      res.status(500).json(error);
    }
};

const update = async (req,res)=>{
    try {
        console.log(req.body);
        const {  classname , endate} = req.body;
        const id = req.params.id;
        const formattedDate = formatDate(req.body.endate);
        const userExist = await Classmaster.findOne({ classname, _id: { $ne: id }});
        
        if(userExist){
            return res.status(400).json({message:"ClassName already exist"});
        }
        const result = await Classmaster.updateOne({ _id:id },{
            $set:{
                classname: classname,
                endate: formattedDate,
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

const status = async (req,res)=>{
    try {
        
        const { status } = req.body;
        const id = req.params.id;
    
        const result = await Classmaster.updateOne({ _id:id },{
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
        const response = await Classmaster.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`ClassMaster ${error}`);
    }
};

const  getbyid = async(req, res) => {
    try {
        const id = req.params.id;
        const response = await Classmaster.find({ _id:id });
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
        const response = await Classmaster.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({message:"No Data Found"});
            return;
        }
        res.status(200).json({message:'Data Deleted Successfully'});
    } catch (error) {
        console.log(`ClassMaster ${error}`);
    }
};

const deleteall = async(req, res) =>{
    try {
        const { ids } = req.body;
        if(ids){
            const response = await Classmaster.deleteMany({ _id: { $in: ids } });
            if(!response){
                res.status(404).json({message:"No Data Found"});
                return;
            }
            res.status(200).json({message:'Selected Data Deleted Successfully'});
        }else{
            res.status(404).json({message:"Select atleast one row"});
        }
        
    } catch (error) {
        console.log(`ClassMaster ${error}`);
    }
}
module.exports = { add , update , get, deletecm, getbyid, status, deleteall};