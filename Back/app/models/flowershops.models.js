import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE flowerShops (
//   idflowerShops SERIAL PRIMARY KEY,
//   fullName VARCHAR(255) NOT NULL,
//   address VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   inventoryID INT NOT NULL,
//   state BOOLEAN NOT NULL DEFAULT FALSE
// );

const flowerShops = sequelize.define("flowershops", {
  idflowershops: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  inventoryid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default flowerShops;