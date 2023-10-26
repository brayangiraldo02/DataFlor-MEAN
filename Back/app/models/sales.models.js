import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE Sales (
//   idSales SERIAL PRIMARY KEY,
//   clientName VARCHAR(255) NOT NULL,
//   userID INT NOT NULL,
//   productID INT NOT NULL,
//   quantity INT NOT NULL CHECK (quantity > 0),
//   FOREIGN KEY (userID) REFERENCES Users(userID),
//   FOREIGN KEY (productID) REFERENCES Products(productID)
// );

const sales = sequelize.define("sales", {
  idsales: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clientName: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default sales;