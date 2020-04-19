'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    otherName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    country: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    indexes: [{ unique: true, fields: ['email'] }, { fields: ['country', 'sex'] }]
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};