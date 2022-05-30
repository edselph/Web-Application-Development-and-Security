const express = require('express');
const router = express.Router();
const chair_controller = require('../control/chair_controller');

router.get("/", chair_controller.getAllChair);
router.post("/", chair_controller.addChair);

module.exports = router;