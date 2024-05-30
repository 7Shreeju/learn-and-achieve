const express = require("express");
const router = express.Router();
const classmaster = require("../controllers/classmaster-controller");
const {classmasterSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/add").post(classmaster.add);
router.route("/update/:id").patch(validate(classmasterSchema),classmaster.update);
router.route("/get").get(classmaster.get);
router.route("/getbyid/:id").get(classmaster.getbyid);
router.route("/status/:id").patch(classmaster.status);
router.route("/delete/:id").delete(classmaster.deletecm);
router.route("/deleteall").post(classmaster.deleteall);


module.exports = router;