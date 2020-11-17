import uuid from 'uuid';

module.exports = (sequelize: any, DataTypes: any) => {
  const Planet = sequelize.define(
    "Planet",
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
      description: DataTypes.TEXT,
      galaxy_id: DataTypes.BIGINT,
      diameter: DataTypes.INTEGER,
      climate: DataTypes.STRING,
      rotation_period_hours: DataTypes.BIGINT,
      population: DataTypes.BIGINT,
      featured: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      price_cents: DataTypes.BIGINT,
      price_dollars: DataTypes.VIRTUAL(DataTypes.FLOAT),
      average_rating: {
        type: DataTypes.VIRTUAL(DataTypes.INTEGER),
        allowNull: true,
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
      tableName: "planets",
      timestamps: true,
      underscored: true,

      getterMethods: {
        price_dollars() {
          return Math.round(this.price_cents / 100);
        },
        average_rating(): void {
          return null;
        },
      },

      scopes: {
        featured: {
          where: {
            featured: {
              $ne: null
            }
          }
        },
        notFeatured: {
          where: {
            featured: null
          }
        },
      },

    }
  );

  Planet.associate = (models: any) => {
    models.Planet.belongsTo(models.Galaxy, {
      as: 'galaxy',
      foreignKey: "galaxy_id"
    });

    models.Planet.belongsToMany(models.Terrain, {
      as: 'terrains',
      through: {
        model: models.Terrain_Planet,
      },
      foreignKey: 'planet_id',
      otherKey: 'terrain_id',
      timestamps: false,
    });

    models.Planet.belongsToMany(models.Amenity, {
      as: 'amenities',
      through: {
        model: models.Amenity_Planet,
      },
      foreignKey: 'planet_id',
      otherKey: 'amenity_id',
      timestamps: false,
    });

    models.Planet.hasOne(models.File, {
      as: 'photo',
      constraints: false,
      foreignKey: 'fileable_id',
      scope: {
        fileable_type: 'Planet', // Case sensitive
      }
    });
  };

  return Planet;
};
