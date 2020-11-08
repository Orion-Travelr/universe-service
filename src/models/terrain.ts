import uuid from 'uuid';

module.exports = (sequelize: any, DataTypes: any) => {
  const Terrain = sequelize.define(
    "Terrain",
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
      description: DataTypes.STRING,
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
      tableName: "terrains",
      timestamps: true,
      underscored: true,
    },
  );

  Terrain.associate = (models:any) => {
    models.Terrain.belongsToMany(models.Planet, {
      as: 'planets',
      through: 'terrain_planet',
      foreignKey: 'terrain_id',
      otherKey: 'planet_id'
    });
  };

  return Terrain;
};
