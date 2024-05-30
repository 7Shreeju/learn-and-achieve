const mongoose = require("mongoose");
const URI = "mongodb://localhost:27017/learnandachieve";
// mongoose.connect(URI);

const connectDB = async () => {
    try {

       await mongoose.connect(URI);
       console.log('connection successful to DB');

    } catch (error) {

        console.error("databse connection failed");
        process.exit(0);
        
    }
};

module.exports = connectDB; 
