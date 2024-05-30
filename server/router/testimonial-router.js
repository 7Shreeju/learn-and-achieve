const express = require("express");
const router = express.Router();
const testimonial = require("../controllers/testimonial-controller");
const {blogSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const bodyparser = require("body-parser");

// router.use(bodyparser.urlencoded({extended:true}));
// router.use(express.static(path.resolve(__dirname,'public')));

// const storage = multer.diskStorage({
//     destination: function(req,file, cb){
//       if(!fs.existsSync("public")){
//           fs.mkdirSync("public");
//       }
//       if(!fs.existsSync("public/testimonial")){
//           fs.mkdirSync("public/testimonial");
//       }
//       cb(null, "public/testimonial");
//     },
//     filename: function(req,file,cb){
//       cb(null, Date.now() + file.originalname);
//     },
//   });
  
// const upload = multer({
//     storage:storage,
// });

router.route("/add").post(testimonial.add);
router.route("/update/:id").patch(testimonial.update);
router.route("/get").get(testimonial.get);
router.route("/delete/:id").delete(testimonial.deletetes);

module.exports = router;