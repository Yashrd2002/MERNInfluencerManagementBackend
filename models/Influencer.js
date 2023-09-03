const mongoose = require('mongoose')

const InfluencerSchema = new mongoose.Schema({
    name:String,
    socialhandle:String,
    followers:Number
})

const InfluencerModel  = mongoose.model("influencers",InfluencerSchema)
module.exports = InfluencerModel