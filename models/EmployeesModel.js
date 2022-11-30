"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeesModelSchema = new Schema({
  employeeId: { type:mongoose.Schema.Types.ObjectId},
  name: {type: String,require: true},
  phone:String,title:String,
  password: {
    type: String,
 
  },
  company: {
    type: String,

  },
  address: {
    type: String,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

EmployeesModelSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

EmployeesModelSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

EmployeesModelSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});


module.exports = mongoose.model('employees', EmployeesModelSchema);