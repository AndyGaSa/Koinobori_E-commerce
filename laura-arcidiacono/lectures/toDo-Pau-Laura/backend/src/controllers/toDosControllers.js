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
        res.status(200);
        return  res.send(foundToDos);
    } catch (error) {
        return res.status(500);
    }
}

async function getOneToDo(req, res) {
    try {
        const toDoId = req.params
    } catch (error) {
        
    }
}

async function updateToDos(req, res) {
    try {

        const foundToDo = toDo.findOne({req.params.id});
        res.status(200);
        return res.send(foundToDo)
    } catch (error) {
        
    }
}


module.exports = {
    postToDos,
    getToDos,
    updateToDos
}
