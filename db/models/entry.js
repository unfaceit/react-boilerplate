const mongoose = require('mongoose');

const stringSchema = mongoose.Schema({
  text: String,
});

const Entry = mongoose.model('Entry', stringSchema);

module.exports = {
  Entry,
};
