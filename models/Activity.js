var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  activity: {
    type: String,
    required: true
  },

  stats: [
    {
      quantity: {
        type: Number,
        required: true,
        default: 0
      },
      date: {
        type: Date,
        require: true
      }
    }
  ]
});

module.exports = mongoose.model("Activity", activitySchema);
