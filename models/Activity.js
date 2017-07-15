var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var activitySchema = new Schema({
  activityName: {
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
        require: true,
        default: Date()
      }
    }
  ]
});

module.exports = mongoose.model("Activity", activitySchema);
