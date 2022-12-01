const employeeModel = require("../models/EmployeesModel")
//login user
const login = async (req, res, next) => {
    try {
      const { phone } = req.body;
      const employee = await employeeModel.findOne({ phone });
      console.log("Employees data successfully!", employee)
      return res.status(200).json({
        message:"Welcome"+"***"+ phone + "***" + "You Succesfully Login!",
      });
    }catch (error) {
      console.log(error);
      return res.status(500).json({
        error: {message:"We are having some error while completing your request. Please try again after some time.",}
      })
    }
  };

const getdata = async(req,res) => {
    try {
        const getemployees = await employeeModel.find();
        console.log("Employees data successfully!", getemployees)
        return res.status(200).json({
          getemployees
        })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: {message:"We are having some error while completing your request. Please try again after some time.",}
      })
    }
}
  module.exports = {
    login,
    getdata
  };