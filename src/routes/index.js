/* ||===> Router Definition <===||
Routes in Express.js provide a way to organize and modularize routes in the application.
*/

const express = require('express');
const userRouter = require('./user.router');
const router = express.Router();

/* ||===> Route Configuration <===||
Mounts the userRouter middleware under the '/users' path. 
🎯 This configuration ensures that all routes defined in the userRouter are accessible under the '/users' endpoint.
*/
router.use('/users', userRouter)


/* ||===> Module Exports <===||
This module exports the router.
🎯 The export allows the router to be used in other parts of the application to define routes and handle requests related to users.
*/
module.exports = router;