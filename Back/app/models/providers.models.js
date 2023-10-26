import { DataTypes } from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE Providers (
//   providerID SERIAL PRIMARY KEY,
//   fullName VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   address VARCHAR(255) NOT NULL,
//   state BOOLEAN NOT NULL DEFAULT FALSE
// );

const providers = sequelize.define
("providers", {
  providerid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  state: {
    type: DataTypes.BOOLEAN,
    defaultValue: 1,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true,
});

export default providers;