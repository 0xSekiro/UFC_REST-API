const mongoose = require("mongoose");
const fighterSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Fighter must have a name"],
  },
  age: {
    type: Number,
    required: [true, "Fighter must have an age"],
  },
  champion: {
    type: Boolean,
    default: false,
  },
});
const Fighter = mongoose.model("Fighter", fighterSchema);

module.exports = Fighter;
