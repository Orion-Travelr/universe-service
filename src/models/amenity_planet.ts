
module.exports = (sequelize: any, DataTypes: any) => {
  return sequelize.define(
    "Amenity_Planet",
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
      amenity_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      planet_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
      }
    },
    {
      tableName: "amenity_planet",
      timestamps: false,
      underscored: true,
      created_at: false,
      updated_at: false,
    }
  );
};
