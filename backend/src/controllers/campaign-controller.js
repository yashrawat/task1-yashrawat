const Campaign = require('../models/campaign-model');

// get all campaign data
exports.getAllCampaignData = (req, res, next) => {
    Campaign.find()
        .then(fetchedCampaignData => {
            if (fetchedCampaignData) {
                res.status(200).json({
                    message: `All campaign data fetched data`,
                    campaignData: fetchedCampaignData
                });
            } else {
                res.status(404).json({
                    message: `Error! Products not found`
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: `Fetching campaign data failed ${error}`
            });
        });
};

// add campaign data
exports.addCampaignData = (req, res, next) => {
    const campaign = new Campaign({
        campaigns: req.body.campaigns,
        status: req.body.status,
        applications: req.body.applications
    });

    campaign.save()
        .then(addedCampaignData => {
            res.status(200).json({
                message: `Successfully added campaign Data`,
                campaignData: addedCampaignData
            });
        })
        .catch(error => {
            res.status(500).json({
                message: `Could not save product => ${error}`
            });
        });
};