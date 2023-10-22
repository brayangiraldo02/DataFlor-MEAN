import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE Inventory (
//   id SERIAL PRIMARY KEY,
//   inventoryID INT NOT NULL,
//   productID INT NOT NULL,
//   quantity INT NOT NULL,
//   providerID INT NOT NULL,
//   FOREIGN KEY (inventoryID) REFERENCES flowerShops(idflowerShops),
//   FOREIGN KEY (productID) REFERENCES Products(productID),
//   FOREIGN KEY (providerID) REFERENCES Providers(providerID)
// );

const Inventory = sequelize.define
("Inventory", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  inventoryID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  providerID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default Inventory;