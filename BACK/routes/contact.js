const express = require("express");
const { sendForm } = require("../controller/contact-controller");
const router = express.Router()
router.post("/", sendForm);

module.exports = router