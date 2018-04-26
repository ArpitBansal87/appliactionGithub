var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    lowercase: true
  }
});

module.exports = mongoose.model('Category',CategorySchema);
