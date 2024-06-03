/* |==> CONTROLLERS <==|
Part of the software architecture in app that follow the "MVC" [model-view-controller]. They're responsible for handling user requests, processing app logic, and returning an appropriate response.
*/

const catchError = require('../utils/catchError');
const User = require('../models/User');

/* ||===> c Read u d <===||
This controller allows reading all User from the database.
🎯 'getAll' is an asynchronous handler that uses 'catchError' to handle errors.
🎯 The asynchronous function inside 'catchError':
    💡 Use 'await User.findAll()' to get all the users in the database.
    💡 Send the result as a JSON response to client.
*/
const getAll = catchError(async (req, res) => {
    const result = await User.findAll()
    return res.json(result)
});

/* ||===> c Read u d <===||
This controller allows reading one User from the database.
🎯 'getOne' is an asynchronous handler that uses 'catchError' to handle errors.
🎯 The asynchronous function inside 'catchError':
    💡 We extract the 'id' parameter from the route parameters (URL).
    💡 Use 'await User.findByPk()' to search a record by its primary key 'id'.
    💡 If result is 'null' or 'undefined', send a response with HTTP status 404 (Not Found).
    💡 Send the result as a JSON response to client.
*/
const getOne = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.findByPk(id)
    if (!result) return res.sendStatus(404)
    return res.json(result)
});


/* ||===> Create r u d <===||
This controller allows create records in the database.
🎯 'create' is an asynchronous handler that uses 'catchError' to handle errors.
🎯 The asynchronous function inside 'catchError':
    💡 Use 'await User.create(req.body)' to create a new record in the database using the data provided in the body of the request 'req.body'.
    💡 If result is 'null' or 'undefined', send a response with HTTP status 404 (Not Found).
    💡 Send the result as a JSON response to client with status 201.
*/
const create = catchError(async (req, res) => {
    const result = await User.create(req.body)
    return res.status(201).json(result)
});


/* ||===> c r u Delete <===||
This controller allows deleting records from the database.
🎯 'destroy' is an asynchronous handler that uses 'catchError' to handle errors.
🎯 The asynchronous function inside 'catchError':
    💡 Extracts 'id' from the request parameters 'req.params'.
    💡 Uses 'await User.destroy({ where: { id } })' to delete the record with the specified 'id' from the database.
    💡 If 'result' is 'null' or 'undefined', sends a response with HTTP status 404 (Not Found).
    💡 Sends a response with HTTP status 204 (No Content) to indicate successful deletion.
*/
const destroy = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.destroy({ where: { id } })
    if (!result) return res.sendStatus(404)
    return res.sendStatus(204)
})


/* ||===> c r Update d <===||
This controller allows updating records in the database.
🎯 'update' is an asynchronous handler that uses 'catchError' to handle errors.
🎯 The asynchronous function inside 'catchError':
    💡 Extracts 'id' from the request parameters 'req.params'.
    💡 Uses 'await User.update(req.body, { where: { id }, returning: true })' to update the record with the specified 'id' in the database using the data provided in 'req.body'.
    💡 If 'result[0]' is 0, sends a response with HTTP status 404 (Not Found), indicating no records were updated.
    💡 Sends the updated record as a JSON response to the client.
*/
const update = catchError(async (req, res) => {
    const { id } = req.params
    const result = await User.update(
        req.body,
        { where: { id }, returning: true }
    )
    if (result[0] === 0) return res.sendStatus(404)
    return res.json(result[1][0])
});


/* ||===> Module Exports <===||
This module exports the CRUD controllers for the User model.
🎯 The object contains the following properties:
    💡 'getAll': c Read u d.
    💡 'getOne': c Read u d.
    💡 'create': Create r u d.
    💡 'destroy': c r u Delete.
    💡 'update': c r Update d.
*/
module.exports = {
    getAll,
    getOne,
    create,
    destroy,
    update
}