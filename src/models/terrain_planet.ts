
module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define(
    "Terrain_Planet",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      terrain_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      planet_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      }
    },
    {
      tableName: "terrain_planet",
      timestamps: false,
      underscored: true,
      created_at: false,
      updated_at: false,
    }
  );
};
