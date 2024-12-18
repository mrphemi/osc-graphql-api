module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("course_collections", [
      {
        course_id: "c1b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        collection_id: "c1b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      },
      {
        course_id: "c2b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        collection_id: "c1b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      },
      {
        course_id: "c3b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        collection_id: "c2b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("course_collections", null, {});
  },
};
