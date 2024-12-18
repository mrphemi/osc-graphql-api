module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("course_collections", {
      course_id: {
        type: Sequelize.UUID,
        references: {
          model: "courses",
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: false,
      },
      collection_id: {
        type: Sequelize.UUID,
        references: {
          model: "collections",
          key: "id",
        },
        onDelete: "CASCADE",
        allowNull: false,
      },
    });

    // Add composite primary key
    await queryInterface.addConstraint("course_collections", {
      fields: ["course_id", "collection_id"],
      type: "primary key",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("course_collections");
  },
};
