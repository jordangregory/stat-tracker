var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  activities: {
    activity: {
      type: String,
      required: true,
      default: 0
    },
    quantity: {
      type: Number,
      required: true,
      default: 0
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
});

module.exports = mongoose.model("Stats", userSchema);
