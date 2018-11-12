const path = require('path');
const { Entry } = require('../../db/models/entry');

const fetchAll = (req, res) => {
  Entry.find({}, (err, history) => {
    if (err) console.error(err);
    res.status(200).send(history);
  });
};

const submitPost = (req, res) => {
  Entry.create({ text: req.body.text }, err => {
    if (err) console.error(err);
    res.status(201).send();
  });
};

const loadApp = (req, res) => {
  res.sendFile(path.join(`${__dirname}../../app/index.html`));
};

module.exports = {
  fetchAll,
  submitPost,
  loadApp,
};
