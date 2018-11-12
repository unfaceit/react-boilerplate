const mongoose = require('mongoose');

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const link = '@ds063439.mlab.com:63439/string-collector';

mongoose.connect(`mongodb://${user}:${password}${link}`);

const db = mongoose.connection;

db.on('error', () => console.error('We could not connect to a databse'));
db.once('open', () => console.log('DB: \u2705'));

module.exports = {
  db,
};
