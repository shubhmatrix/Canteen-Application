"use strict";
const FoodModelSchema = require("../models/FoodModel")
/**
 * Get all record
 * @param { req, res }
 * @returns JsonResponse
 */
const getFood = async (req, res, next) => {
  try {
    const getfood = await FoodModelSchema.find();
    console.log("Food data successfully!", getfood)
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
 * Create a record
 * @param { req, res }
 * @returns JsonResponse
 */
const addFood = async (req, res, next) => {
  try {
    const food = await FoodModelSchema.create({
      foodName: req.body.foodName,
      foodPrice: req.body.foodPrice
    })
    console.log("Food added by admin")
    return res.status(200).json({
      success: true,
      message: "Data saved successfully.",
      data: [food]
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: {message:"We are having some error while completing your request. Please try again after some time.",}
    })
  }
};

/**
 * Export as a single common js module
 */
module.exports = {
  getFood,
  addFood,
};
