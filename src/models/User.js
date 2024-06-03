/* ||===> Models in Node.js with Sequelize <===||
Concept: Models in Sequelize represent the structure [table] of database tables and provide an interface for interacting with the data.*/
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

/* ||===> Model Definition <===||
This section defines the 'User' model using Sequelize.
🎯 'User' is a model representing the 'user' table in the database. 
🎯 The model includes the following columns:
    💡 'first_name': A string column that cannot be null, representing the user's first name.
    💡 'last_name': A string column that cannot be null, representing the user's last name.
    💡 'email': A string column that cannot be null and must be unique, representing the user's email.
    💡 'password': A string column that cannot be null, representing the user's password.
    💡 'birthday': A string column, representing the user's birthday.
*/
const User = sequelize.define('user', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
    }
});

/* ||===> Module Exports <===||
This module exports the 'User' model.
🎯 The export allows the model to be used in other parts of the application for database operations.
*/
module.exports = User;