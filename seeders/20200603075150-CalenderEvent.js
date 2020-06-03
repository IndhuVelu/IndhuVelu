'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CalendarEvents', [{
        Event: 'Group Meeting',
        Date:"2020-06-21" ,
        StartTime:"2020-06-21 06:30:00",
        EndTime:"2020-06-21 07:45:00",
        flag:0,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('CalendarEvents', null, {});
    
  }
};
