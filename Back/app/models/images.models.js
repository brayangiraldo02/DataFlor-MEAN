import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";
import Products from "./products.models.js";

// CREATE TABLE Images (
//   imageID SERIAL PRIMARY KEY,
//   productID INT NOT NULL,
//   imageURL VARCHAR(255) NOT NULL,
//   FOREIGN KEY (productID) REFERENCES Products(productID)
// );

const Images = sequelize.define
("images", {
  imageid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productid: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Products,
      key: "productid"
    },
  },
  imageurl: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default Images;