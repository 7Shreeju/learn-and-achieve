const Testimonial = require("../models/testimonial-model");

const add = async (req,res)=>{
    try {
        console.log(req.body);
        const { name, designation, feedback} = req.body;
        const status= '1';

        const cmCreated =  await Testimonial.create( {  name, designation, feedback, status } );
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
        const { name, designation, feedback } = req.body;
        const id = req.params.id;
 
        const result = await Testimonial.updateOne({ _id:id },{
            $set:{
                name: name,
                designation: designation,   
                feedback: feedback,   
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
        const response = await Testimonial.find();
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Testimonial ${error}`);
    }
};

const  deletetes = async(req, res) => {
    try {

        const id = req.params.id;
        const response = await Testimonial.findOneAndDelete(({_id:id}));
        if(!response){
            res.status(404).json({msg:"No Data Found"});
            return;
        }
        res.status(200).json({msg:response});
    } catch (error) {
        console.log(`Testimonial ${error}`);
    }
};

module.exports = {add , update , get, deletetes};