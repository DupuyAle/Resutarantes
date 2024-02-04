const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/main-controller.js");

router.get("/", mainController.index);
router.get("/aboutus", mainController.aboutus);
router.get("/contact", mainController.contact);
router.get("/login", mainController.login);

module.exports = router;
