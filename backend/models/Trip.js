const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  materialType: String,
  date: String,
  truckNo: String,
  deliveryNo: String,
  tonnage: Number,
  locationFrom: String,
  locationTo: String,
  fuelStation: String,
  fuelLiters: Number,
  fuelAmount: Number,
  cess: Number,
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
