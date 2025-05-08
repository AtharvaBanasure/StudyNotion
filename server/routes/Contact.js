const express = require("express")
const router = express.Router()
const { contactUsController,contactUsResponseController } = require("../controllers/ContactUs")

router.post("/contact", contactUsController)
router.post("/contact", contactUsResponseController)

module.exports = router