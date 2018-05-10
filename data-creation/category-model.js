var mongoose = require("mongoose");
var categorySchemaVal = require("./category-schema.js");
//var Schema = mongoose.Schema;

//var CategorySchema = new Schema(categorySchemaVal.categorySchema);

module.exports = mongoose.model('Category',categorySchemaVal);
