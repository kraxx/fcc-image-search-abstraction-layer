const connection = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`; //uses local .env variables if not on heroku
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

exports.db = mongoose.connect(connection);
