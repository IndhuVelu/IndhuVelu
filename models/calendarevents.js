'use strict';
module.exports = (sequelize, DataTypes) => {
  const CalendarEvents = sequelize.define('CalendarEvents', {
    Event: DataTypes.STRING,
    Date: DataTypes.STRING,
    StartTime: DataTypes.DATE,
    EndTime: DataTypes.DATE,
    EndTime: DataTypes.DATE,
    Flag: DataTypes.INTEGER
  }, {});
  CalendarEvents.associate = function(models) {
    // associations can be defined here
  };
  return CalendarEvents;
};