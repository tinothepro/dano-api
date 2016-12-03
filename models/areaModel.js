var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var areaModel = new Schema({
  areaId: {type: Number},
  zipCode: { type: Number },
  city: {type: String},
  waterLevel: {type: Number}
});

module.exports = mongoose.model('Area', areaModel);
