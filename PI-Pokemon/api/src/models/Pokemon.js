const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    hp:{
      type: DataTypes.INTEGER,
      
    },
    image:{
      type: DataTypes.STRING,
    },
    str:{
      type: DataTypes.INTEGER,

    },
    def:{
      type: DataTypes.INTEGER
    },
    vel:{
      type: DataTypes.INTEGER,
    },
    height:{
      type: DataTypes.INTEGER,

    },
    weight:{
      type: DataTypes.INTEGER
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },{timestamps:false});
};
