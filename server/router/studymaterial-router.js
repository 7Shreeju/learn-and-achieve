const express = require("express");
const router = express.Router();
const studymaterial = require("../controllers/studymaterial-controller");
const {studymaterialSchema, moduleSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");

//studymaterial
router.route("/addst").post(validate(studymaterialSchema),studymaterial.addst);
router.route("/updatest/:id").patch(validate(studymaterialSchema),studymaterial.updatest);
router.route("/getst").get(studymaterial.getst);
router.route("/deletest/:id").delete(studymaterial.deletecmst);

//module
router.route("/addmd").post(studymaterial.addmd);
router.route("/updatemd/:id").patch(validate(moduleSchema),studymaterial.updatemd);
router.route("/getmd").get(studymaterial.getmd);
router.route("/deletemd/:id").delete(studymaterial.deletecmmd);

//topic
router.route("/addtp").post(studymaterial.addtp);
router.route("/updatetp/:id").patch(studymaterial.updatetp);
router.route("/gettp").get(studymaterial.gettp);
router.route("/deletetp/:id").delete(studymaterial.deletecmtp);

module.exports = router;