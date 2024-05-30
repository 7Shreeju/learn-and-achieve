const express = require("express");
const router = express.Router();
const questionbag = require("../controllers/questionbag-controller");
const {questionbagSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/add").post(questionbag.add);
router.route("/update/:id").patch(questionbag.update);
router.route("/get").get(questionbag.get);
router.route("/delete/:id").delete(questionbag.deletecm);


module.exports = router;