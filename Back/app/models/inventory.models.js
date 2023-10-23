import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";
import flowerShops from "./flowershops.models.js";
import Products from "./products.models.js";
import Providers from "./providers.models.js";

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
("inventory", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  inventoryid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: flowerShops,
      key: "inventoryid"
    }
  },
  productid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "productid"
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  providerid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Providers,
      key: "providerid"
    }
  },
  state: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default Inventory;