'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CalendarEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Event: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.STRING
      },
      StartTime: {
        type: Sequelize.DATE
      },
      EndTime: {
        type: Sequelize.DATE
      },
      EndTime: {
        type: Sequelize.DATE
      },
      Flag: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CalendarEvents');
  }
};