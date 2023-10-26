import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";
import flowerShops from "./flowershops.models.js";

// CREATE TABLE Users (
//   userID SERIAL PRIMARY KEY,
//   username VARCHAR(50) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   fullName VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   role VARCHAR(10) NOT NULL CHECK (role IN ('admin', 'owner', 'employee')),
//   idflowerShops INT,
//   state BOOLEAN NOT NULL DEFAULT FALSE,
//   FOREIGN KEY (idflowerShops) REFERENCES flowerShops(idflowerShops)
// );

const Users = sequelize.define
("users", {
  userid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fullname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  role: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  idflowershops: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: flowerShops,
      key: "idflowershops"
    }
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default Users;