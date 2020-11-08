import uuid from 'uuid';
const path = require('path');

module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define(
    "File",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.STRING,
        defaultValue: uuid.v4(),
      },
      file_name: DataTypes.STRING,
      file_path: DataTypes.STRING,
      fileable_id: {
        type: DataTypes.BIGINT,
        defaultValue: null
      },
      fileable_type: {
        type: DataTypes.STRING,
        defaultValue: null
      },
      thumbnail: {
        type: DataTypes.VIRTUAL(DataTypes.STRING),
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      }
    },
    {
      tableName: "files",
      timestamps: true,
      underscored: true,

      getterMethods: {
        thumbnail() {
          return 'images/planets/thumbs' + path.sep + this.file_name.slice(0, -4) + '-300x300.jpg';
        },
      },
    }
  );
};
