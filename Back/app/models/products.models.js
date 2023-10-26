import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database";

// CREATE TABLE Products (
//   productID SERIAL PRIMARY KEY,
//   productName VARCHAR(255) NOT NULL,
//   description TEXT,
//   price DECIMAL(12, 2) NOT NULL,
//   state BOOLEAN NOT NULL DEFAULT FALSE
// );

const products = sequelize.define
("products", {
  productid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productname: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  price: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default products;