const express = require("express");
const router = express.Router();
const subject = require("../controllers/subject-controller");
const {subjectSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/add").post(validate(subjectSchema),subject.add);
router.route("/update/:id").patch(validate(subjectSchema),subject.update);
router.route("/get").get(subject.get);
router.route("/delete/:id").delete(subject.deletecm);


module.exports = router;