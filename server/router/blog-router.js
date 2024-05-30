const express = require("express");
const router = express.Router();
const blog = require("../controllers/blog-controller");
const {blogSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({extended:true}));
router.use(express.static(path.resolve(__dirname,'public')))

const storage = multer.diskStorage({
  destination: function(req,file, cb){
    if(!fs.existsSync("public")){
        fs.mkdirSync("public");
    }
    if(!fs.existsSync("public/authorblog")){
        fs.mkdirSync("public/authorblog");
    }
    cb(null, "public/authorblog");
  },
  filename: function(req,file,cb){
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({
    storage:storage,
    // fileFilter: function(req, file, cb){
    //     var ext = path.extname(file.originalname);

    //     if(ext !==".csv"){
    //         return cb(new Error("only csvs are allowed"));
    //     }
    // }
})



router.route("/addbc").post(blog.addbc);
router.route("/updatebc/:id").patch(blog.updatebc);
router.route("/getbc").get(blog.getbc);
router.route("/deletebc/:id").delete(blog.deletebc);

router.post("/addat",upload.single('image'), blog.addat);
router.patch("/updateat/:id",upload.single('image'), blog.updateat);
router.route("/getat").get(blog.getat);
router.route("/deleteat/:id").delete(blog.deleteat);

// upload.fields([ { name: 'image1', maxCount: 1 },{ name: 'image2', maxCount: 1 }
router.post("/addblog",upload.fields([ { name: 'featuredimage'},{ name: 'mainimage'}]), blog.addblog);
router.patch("/updateblog/:id",upload.fields([ { name: 'featuredimage', maxCount: 1 },{ name: 'mainimage', maxCount: 1 }]), blog.updateblog);
router.route("/getblog").get(blog.getblog);
router.route("/deleteblog/:id").delete(blog.deleteblog);



module.exports = router;