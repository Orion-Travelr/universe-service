const tableName = "planets";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(tableName, {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false
      },
      galaxy_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      diameter: {
        type: Sequelize.INTEGER,
        defaultValue: null,
      },
      climate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rotation_period_hours: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      population: {
        type: Sequelize.BIGINT,
        defaultValue: null,
      },
      price_cents: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      featured: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
