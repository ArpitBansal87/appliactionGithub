var mongoose = require('mongoose');

var categorySchema = {
  category_id: { type: String },
  name:{type: String,required:true},
  is_root_cat:{ type: Boolean, required: true},
  category_type: {type: String},
  parent: {
    type: String,
    ref: 'Category'
  },
  ancestors: [{
    type: String,
    ref: 'Category'
  }]
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;
