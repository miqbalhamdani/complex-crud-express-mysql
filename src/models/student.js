'use strict';
module.exports = (sequelize, DataTypes) => {
  const student = sequelize.define('student', {
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    timestamps: true,
    paranoid: true
  });
  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};