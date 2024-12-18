module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("courses", [
      {
        id: "c1b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        title: "Introduction to React",
        description: "Learn React basics",
        duration: "6 weeks",
        outcome: "Build React applications",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "c2b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        title: "Node.js Fundamentals",
        description: "Server-side JavaScript",
        duration: "8 weeks",
        outcome: "Create Node.js servers",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "c3b9d6bc-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        title: "GraphQL API Design",
        description: "Modern API development",
        duration: "4 weeks",
        outcome: "Design GraphQL APIs",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("courses", null, {});
  },
};
