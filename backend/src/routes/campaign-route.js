const express = require('express');

const campaignController = require('../controllers/campaign-controller');

const router = express.Router();

router.get('/getAllCampaignData', campaignController.getAllCampaignData);

router.post('/addCampaignData', campaignController.addCampaignData);

module.exports = router;