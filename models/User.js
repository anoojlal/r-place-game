'use strict';
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
//assert.equal(query.exec().constructor, require('bluebird'));
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  password2: {
    type: String,
    required: true,
  }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;