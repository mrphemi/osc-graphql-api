const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash("password123", 10);
    return queryInterface.bulkInsert("users", [
      {
        id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        name: "Admin User",
        email: "admin@example.com",
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
