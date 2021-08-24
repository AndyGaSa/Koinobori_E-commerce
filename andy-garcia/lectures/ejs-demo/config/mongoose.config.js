const mongoose = require('mongoose');
const debug = require('debug')('server:DB');
// connection to db
mongoose.set('useFindAndModify', false);

mongoose.connect(process.env.DDBB_URI, { useNewUrlParser: true }, () => {
  debug('Connected to db!');
});
