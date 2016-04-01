var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Heroes = new Schema({
  Alias: {type: String},
  Firstname: {type: String},
  Lastname: {type: String},
  City: {type: String},
  Powername: {type: String}
});

module.exports = mongoose.model("Heroes", Heroes);
