const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: String,
  elo: Number,
  wins: Number,
  losses: Number
});

mongoose.model("team", teamSchema);
