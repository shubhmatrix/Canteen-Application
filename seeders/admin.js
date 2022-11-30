const employeeModel = require("../models/EmployeesModel");

const {faker} = require ("@faker-js/faker");

const bcrypt = require("bcryptjs");

const seedersAdmin = async () => {
  const existingUsers = await employeeModel.find({});

  if (existingUsers.length) {
    console.log("Admin already seeded!");

    return;
  }

  //Create employeeModel login using faker

  const adminUser = new Array(5).fill(0).map((_, index) => ({
    name: faker.name.firstName(),

    phone: faker.phone.phoneNumber(),

    password: bcrypt.hashSync("password", 10),

    company: faker.company.companyName(),
    address:
      "Shekhar central, 913-914, 9th Floor, AB Rd, Palasia Square, Indore, Madhya Pradesh 452001",

  }));

  await employeeModel.create(adminUser);

  //console.table(adminUser.map((employeeModel) => ({ ...employeeModel, password: "password" }))); // Print once while create employeeModel user
};

module.exports = async () => {
  await seedersAdmin();
};
