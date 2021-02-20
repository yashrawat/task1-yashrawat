const Campaign = require('../models/campaign-model');
const AWS = require('aws-sdk');
const Busboy = require('busboy');
const BUCKET_NAME = 'task1-yashrawat-s3bucket';
const IAM_USER_KEY = process.env.accessKeyId;
const IAM_USER_SECRET = process.env.secretAccessKey;

function uploadToS3(file) {
    let s3bucket = new AWS.S3({
        accessKeyId: IAM_USER_KEY,
        secretAccessKey: IAM_USER_SECRET,
        Bucket: BUCKET_NAME,
    });
    s3bucket.createBucket(function () {
        var params = {
            Bucket: BUCKET_NAME,
            Key: file.name,
            Body: file.data,
        };
        s3bucket.upload(params, function (err, data) {
            if (err) {
                console.log('error in callback');
                console.log(err);
            }
            console.log('success');
            console.log(data);
        });
    });
}

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

// upload file to s3 bucket
exports.uploadFileToS3Bucket = (req, res, next) => {
    // name
    const element1 = req.body.element1;
    var busboy = new Busboy({ headers: req.headers });
    busboy.on('finish', function () {
        console.log('Upload finished');
        // file
        const file = req.files.element2;
        console.log(file);
        // Begins the upload to the AWS S3
        uploadToS3(file);
    });
    req.pipe(busboy);
};
