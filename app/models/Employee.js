module.exports = (Sequelize, DataType) => {
  const Employee = Sequelize.define("employee", {

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

    cpf: {
      type: DataType.STRING,
      allowNull: false,
      unique: true
    },

    phone: {
      type: DataType.STRING
    },

    skills: {
      type: DataType.JSON,
      allowNull: false
    },

    valid: {
      type: DataType.BOOLEAN
    },

  });

  return Employee;
};