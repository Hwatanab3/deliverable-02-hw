/* ||===> Router Definition <===||
Routes in Express.js provide a way to organize and modularize routes in the application.
*/
const { getAll, create, getOne, destroy, update } = require('../controllers/user.controllers');
const express = require('express');

/* ||===> Router Initialization <===||
Initializes a new router instance using Express.js.
🎯 This instance will be used to define and manage routes related to user operations.
*/
const userRouter = express.Router();

/* ||===> Route Configuration <===||
Defines routes for CRUD operations related to users.
🎯 This configuration maps HTTP methods (GET, POST, PUT, DELETE) to corresponding controller functions.
🎯 The '/' route handles GET and POST requests, while the '/:id' route handles GET, PUT, and DELETE requests for individual user records.
*/

userRouter.route("/")
    .get(getAll)
    .post(create)

userRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

/* ||===> Router Export <===||
Exports the userRouter instance to make it available for use in other parts of the application.
🎯 This export allows the router to be mounted and used by the main Express application to handle user-related routes.
*/
module.exports = userRouter;