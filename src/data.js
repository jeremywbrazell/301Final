'use strict';

const DataModel = require('./item-model.js');

const Data = {};

Data.addAnItem = async(req,res,next) => {
  try {
    const data = req.body;
    console.log(req.body)
    const item = new DataModel(data);
    res.status(404).post(item);
  } catch(e) { next(e.message); }
}

Data.getAllItems = async(req, res) => {
  console.log(req, 'i hate this')
  const items = await DataModel.get({id:id});
  res.status(200).send(items);
}

Data.getOneItem = async(req, res) => {
  const id = req.params.id;
  const items = await DataModel.get({id:id});
  res.status(200).send(items[0]);
}

Data.deleteOneItem = async(req, res) => {
  const id = req.params.id;
  const items = await DataModel.delete({id:id})
  res.status(200).send(items);
}

Data.updateOneItem = async(req, res) => {
  const id = req.params.id;
  const data = req.body;
  const item = await DataModel.put(id, data, {new:true, useFindAndModify:false});
  res.status(200).send(item);
}

module.exports = Data;
