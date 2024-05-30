const express = require("express");
const router = express.Router();
const packages = require("../controllers/packages-controller");
const {packagesSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/add").post(packages.add);
router.route("/update/:id").patch(packages.update);
router.route("/get").get(packages.get);
router.route("/delete/:id").delete(packages.deletecm);


module.exports = router;