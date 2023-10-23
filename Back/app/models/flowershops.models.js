import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE flowerShops (
//   idflowerShops SERIAL PRIMARY KEY,
//   fullName VARCHAR(255) NOT NULL,
//   address VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   inventoryID INT NOT NULL
// );

const flowerShops = sequelize.define("flowershops", {
  idflowershops: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
  inventoryid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  state: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default flowerShops;