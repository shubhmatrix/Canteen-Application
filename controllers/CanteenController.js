"use strict";
const CanteenModelSchema = require("../models/CanteenModel")
const FoodModelSchema = require("../models/FoodModel") 
/**
 * Get all record
 * @param { req, res }
 * @returns JsonResponse
 */
const orderFood = async (req, res, next) => {
  try {
    const order =  await CanteenModelSchema
    return res.status(200).json({
      success: true,
      message: "Data fetched successfully.",
      data: []
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: {message:"We are having some error while completing your request. Please try again after some time.",}
    })
  }
};
/**
 * Get all record
 * @param { req, res }
 * @returns JsonResponse
 */
 const getFoodList = async (req, res, next) => {
  try {
    const getfood = await CanteenModelSchema.find();
    console.log("Canteen data successfully!", getfood)
    return res.status(200).json({
      getfood
    })
} catch (error) {
  console.log(error);
  return res.status(500).json({
    message: {message:"We are having some error while completing your request. Please try again after some time.",}
  })
}}
/**
 * Export as a single common js module
 */
module.exports = {
  orderFood,
  getFoodList
};
