

var trelloController = {};
const { API_URL } = require('../config');
const fetch = require('node-fetch');
const trello = require('../models/Trello');



trelloController.createTask = async function(req, res){

    console.log("body",req.body)
    const data = await trello.factory(req.body)

    const dataCreate =  await trello.apiCard(data)

    console.log("dataCreate",dataCreate)
    res.json(dataCreate)

    
};


module.exports = trelloController;