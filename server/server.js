require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const csvRoute = require("./router/csv-router");
const classmaterRoute = require("./router/classmaster-router"); //classmater
const subjectRoute = require("./router/subject-router"); //subject
const studymaterialRoute = require("./router/studymaterial-router"); //studymaterialRoute
const questionbagRoute = require("./router/questionbag-router"); //questionbag
const mocktestRoute = require("./router/mocktest-router"); //mocktest
const packagesRoute = require("./router/packages-router"); //package
const blogRoute = require("./router/blog-router"); //blog
const testimonialRoute = require("./router/testimonial-router"); //testimonial;
const faqRoute = require("./router/faq-router"); //faq;


const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/validate-middleware");
const errorMiddleware1 = require("./middlewares/error-middleware");

// handling cors
const corsoptions = {
    origin:'http://localhost:5173', 
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true  
}; 
app.use(cors(corsoptions)); 

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", authRoute);
app.use("/api/upload", csvRoute);    
app.use("/api/ser", serviceRoute);


app.use("/api/classmaster", classmaterRoute);
app.use("/api/subject",subjectRoute);
app.use("/api/studymaterial",studymaterialRoute);
app.use("/api/questionbag", questionbagRoute);
app.use("/api/mocktest",mocktestRoute);
app.use("/api/packages",packagesRoute);
app.use("/api/blog",blogRoute);
app.use("/api/testimonial",testimonialRoute);
app.use("/api/faq",faqRoute);



// otp
app.use(errorMiddleware);
app.use(errorMiddleware1);
connectDB().then( ()=>{
    app.listen(port, () =>{
        console.log(`server is running at port no ${port}`);
    });
});
