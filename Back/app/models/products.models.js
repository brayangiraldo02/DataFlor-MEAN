import Sequelize from "sequelize";
import sequelize from "../../config/db/database";

// CREATE TABLE Products (
//   productID SERIAL PRIMARY KEY,
//   productName VARCHAR(255) NOT NULL,
//   description TEXT,
//   price DECIMAL(12, 2) NOT NULL
// );

const products = sequelize.define
("products", {
  productID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  price: {
    type: Sequelize.DECIMAL(12, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default products;