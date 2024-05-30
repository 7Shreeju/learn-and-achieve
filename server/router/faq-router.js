const express = require("express");
const router = express.Router();
const faq = require("../controllers/faq-controller");
const {blogSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/addfc").post(faq.addfc);
router.route("/updatefc/:id").patch(faq.updatefc);
router.route("/getfc").get(faq.getfc);
router.route("/deletefc/:id").delete(faq.deletefc);


router.route("/add").post(faq.add);
router.route("/update/:id").patch(faq.update);
router.route("/get").get(faq.get);
router.route("/delete/:id").delete(faq.deletef);

module.exports = router;