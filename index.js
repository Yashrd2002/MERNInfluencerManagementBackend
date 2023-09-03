const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const InfluencerModel = require("./models/Influencer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  });

app.post("/createinfluencer", (req, res) => {
  InfluencerModel.create(req.body)
    .then((influencers) => res.json(influencers))
    .catch((err) => res.json(err));
});

app.get("/getinfluencer", (req, res) => {
  InfluencerModel.find()
    .then((influencers) => res.json(influencers))
    .catch((err) => res.json(err));
});

app.get("/getinfluencer/:id", (req, res) => {
  const id = req.params.id;
  InfluencerModel.findById({ _id: id })
    .then((influencers) => res.json(influencers))
    .catch((err) => res.json(err));
});

app.put("/updateinfluencer/:id", (req, res) => {
  const id = req.params.id;
  InfluencerModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, socialhandle: req.body.socialhandle, followers: req.body.followers }
  )
    .then((influencers) => res.json(influencers))
    .catch((err) => res.json(err));
});


app.delete('/deleteinfluencer/:id', (req, res)=>{
    const id = req.params.id;
    InfluencerModel.findByIdAndDelete({_id:id})
    .then((influencers) => res.json(influencers))
    .catch((err) => res.json(err));
})

app.listen(process.env.BASE_PORT || 3001 , function () {
  console.log("Server is running");
});
