import Sequelize from "sequelize";
import sequelize from "../../config/db/database.js";

// CREATE TABLE Providers (
//   providerID SERIAL PRIMARY KEY,
//   fullName VARCHAR(255) NOT NULL,
//   phone VARCHAR(15) NOT NULL,
//   address VARCHAR(255) NOT NULL
// );

const providers = sequelize.define
("providers", {
  providerid: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullname: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING(255),
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

export default providers;