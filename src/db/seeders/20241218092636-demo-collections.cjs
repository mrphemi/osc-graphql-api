module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("collections", [
      {
        id: "c1b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        name: "Web Development",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "c2b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        name: "Mobile Development",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "c3b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        name: "Data Science",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("collections", null, {});
  },
};
