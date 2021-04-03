'use strict';

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: {type:'String', required:true},
  description: {type:'String', required:true},
  notes: {type:'String'},
});

const Model = mongoose.model('User', ItemSchema);

module.exports = Model;
