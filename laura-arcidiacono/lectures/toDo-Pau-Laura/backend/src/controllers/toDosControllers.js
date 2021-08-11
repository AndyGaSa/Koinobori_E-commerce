const { send } = require('process');
const toDo = require('../model/toDosModel');
const debug = require('debug')('debugController');

async function postToDos(req, res) {
    try {
        const newToDo = await toDo.create(req.body);
        res.send(newToDo);
        res.status(200);
    } catch (error) {
        res.status(500);
    }
}

async function getToDos(req, res) {
    try {
        const foundToDos = await toDo.find(req.query);
        res.send(foundToDos);
        res.status(200);
    } catch (error) {
        res.status(500);
    }
}


module.exports = {
    postToDos
}
