const tableName = "terrain_planet";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      terrain_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      planet_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
