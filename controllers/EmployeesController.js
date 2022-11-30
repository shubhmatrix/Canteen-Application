const employeeModel = require("../models/EmployeesModel")

//login user
const login = async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      const employee = await employeeModel.findOne({ phone });
      const isPasswordCorrect = await bcrypt.compare(password, employee.password);
      if (!isPasswordCorrect) {
        return res.status(422).json({
          errors: { message: "PASSWORD_NOT_MATCH" },
        });
      }
      return res.status(200).json({
        message:"Welcome"+"***"+ phone + "***" + "You Succesfully Login!",
      });
    }catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "We are having some error while completing your request. Please try again after some time.",
        error: error
      });
    }
  };

const getEmployees = async(res,req) => {
    try {
        const getemployees = await employeeModel.find();
        res.send(getemployees);
        console.log("Employees data successfully!")
    } catch (error) {
      return res.status(500).json({
        success: false,
        message:
          "We are having some error while completing your request. Please try again after some time.",
        error: error
      });
    }
}
  module.exports = {
    login,
    getEmployees
  };