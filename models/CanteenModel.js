"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CanteenModelSchema = new Schema({
  foodItem: [{type: mongoose.Schema.Types.ObjectId,ref:"Food"}],
  total:{type:Number,require:true,default:0},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

CanteenModelSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

CanteenModelSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

CanteenModelSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});


module.exports = mongoose.model('canteen', CanteenModelSchema);