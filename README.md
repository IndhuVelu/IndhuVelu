This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I am developed  as a Full stack application.
Front end:React js
Back end: Node js 
Database - sequelize(MYSQL)


## Front End
First Install the dependcies.Then give the command in teminal "npm start" and its automatically open the localhost :3000 

## Run  locally Front End
Front End:
Retrieve dependencies: npm install
Start: npm start
Open localhost:3000


## Back End
  1. First Install the dependcies. 
Then Modify the Folder "Config" .It has Two file .
    1.config.json
    2.Connect.js

   i) In Config.json file ,
    you have to change your Dbname ,username & password of database framwork(mysql,postgress)
    Example:
    "development": {
    "username": "your Username",
    "password": "Password",
    "database": "DBName",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },

   ii) In Connect.js file ,
 you have to change your Dbname ,username & password of database framwork(mysql,postgress)

    Example:
    sequelize = new Sequelize('DBNAME', 'Username', 'Password', {
    host: 'localhost',
    dialect:  'mysql' 

  2. Run the command in backend terminal
    npm install --save-dev sequelize-cli
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

   3. Then give the command in teminal "npm start"  (or) node index.js 

If there is any doubt refer this link:
https://sequelize.org/master/manual/migrations.html

## Note:
I am also attached the Screenshots of this application.
    User can add the Event through the + icon in the header section.
    User Can View their Events in Calender ( through Calender Icon in the Header Section)
    User can View their event in homepage also in calender.
    User can Search the Events by EventName.
