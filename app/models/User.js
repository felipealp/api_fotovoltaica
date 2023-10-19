module.exports = (Sequelize, DataType) => {
  const User = Sequelize.define("user", {

    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataType.STRING,
      allowNull: false
    },

    email: {
      type: DataType.STRING,
      allowNull: false
    },

    senha: {
      type: DataType.STRING,
      allowNull: false
    },

    phone: {
      type: DataType.STRING
    },

    address: {
      type: DataType.STRING
    },

    valid: {
      type: DataType.BOOLEAN
    },

  });

  return User;
};