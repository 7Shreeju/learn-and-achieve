const express = require("express");
const router = express.Router();
const mocktest = require("../controllers/mocktest-controller");
const {mocktestSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/add").post(mocktest.add);
router.route("/update/:id").patch(mocktest.update);
router.route("/get").get(mocktest.get);
router.route("/delete/:id").delete(mocktest.deletecm);


module.exports = router;