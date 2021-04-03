'use strict';

const DataModel = require('./item-model.js');

const Data = { };

//================== ============================

Data.addAnItem = async (request, response, next) => {
  try {
    const data = request.body;
    console.log(request.body)
    const item = new DataModel(data);
    await item.save();
    response.status(200).json(item);
  } catch (err) { next(err.message); }
}

//================== ============================

Data.getAllItems = async (request, response) => {
  const arrayofItems = await DataModel.find({}, function (err, items) {
    if (err) { return console.log.error(err) }
  })
  response.status(200).send(arrayofItems);
}

Data.getOneItem = async (request, response) => {
  const id = request.params.id;
  await DataModel.findById(id, function (err, item) {
    if (err) {
      return (err.message)
    } else {
      response.status(200).send(item);
    }
  });
}
//================== ============================

Data.updateOneItem = async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    const item = await DataModel.findByIdAndUpdate(id, data, { new: true, useFindAndModify: false });
    response.status(200).send(item);
  } catch (err) {
    return (err.message);
  }
}
//================== ============================

Data.deleteOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    await DataModel.deleteOne({_id:id})
    res.status(200).send('item deleted!');
  } catch (err) {
    return (err.message)
  }
}

//================== ============================

module.exports = Data;
