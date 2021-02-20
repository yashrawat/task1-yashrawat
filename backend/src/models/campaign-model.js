const mongoose = require('mongoose');

const campaignSchema = mongoose.Schema({
    campaigns: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    applications: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Campaign', campaignSchema);