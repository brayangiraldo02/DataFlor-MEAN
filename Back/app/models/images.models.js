import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE Images (
//   imageID SERIAL PRIMARY KEY,
//   productID INT NOT NULL,
//   imageURL VARCHAR(255) NOT NULL,
//   FOREIGN KEY (productID) REFERENCES Products(productID)
// );

const Images = sequelize.define
("Images", {
  imageID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default Images;