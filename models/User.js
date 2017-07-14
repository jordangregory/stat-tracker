var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  users: {
    username: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      unique: true,
      required: true
    },
    activity: {
      type: Schema.Types.ObjectId,
      required: true,
      default: 0
    }
  }
});

module.exports = mongoose.model("Users", userSchema);
