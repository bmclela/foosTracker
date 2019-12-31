const mongoose = require("mongoose");
const Game = mongoose.model("game");
const Team = mongoose.model("team");
const Player = mongoose.model("player");

const reset = async () => {
  //Delete everything
  await Game.deleteMany({});
  await Team.deleteMany({});
  await Player.deleteMany({});
};
exports.reset = reset;
