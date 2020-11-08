const tableName = "files";

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
      file_name: Sequelize.STRING,
      file_path: Sequelize.STRING,
      fileable_id: {
        type: Sequelize.BIGINT,
        defaultValue: null
      },
      fileable_type: {
        type: Sequelize.STRING,
        defaultValue: null
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable(tableName);
  }
};
