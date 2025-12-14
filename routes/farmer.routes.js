const express = require('express');
const router = express.Router();
const farmerController = require('../controllers/farmer.controller');

router.post('/', farmerController.addFarmer);
router.get('/', farmerController.getAllFarmers);

module.exports = router;
