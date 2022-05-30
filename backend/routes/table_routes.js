const express = require('express');
const router = express.Router();
const table_controller = require('../control/table_controller');


router.get("/", table_controller.getAllTable);
router.post("/", table_controller.addTable);

module.exports = router;