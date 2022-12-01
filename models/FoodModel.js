"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodModelSchema = new Schema({
  
  foodName: {type: String,require: true,},
  foodPrice: {type: Number,require: true,},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

FoodModelSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

FoodModelSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

FoodModelSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});


module.exports = mongoose.model('food', FoodModelSchema);