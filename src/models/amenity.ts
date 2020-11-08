import uuid from 'uuid';

module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define(
    "Amenity",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      uuid: {
        type: DataTypes.STRING,
        defaultValue: uuid.v4(),
      },
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      description: DataTypes.STRING,
      is_active: {
        type: DataTypes.DATE,
        defaultValue: null,
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
      tableName: "amenities",
      timestamps: true,
      underscored: true,
    }
  );
};
