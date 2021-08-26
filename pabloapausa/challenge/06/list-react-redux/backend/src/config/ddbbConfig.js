const { connect } = require('mongoose'); // Import Mongoose dependency.
const debug = require('debug'); // Import Debug dependency.

connect( // to MongoDB.
  process.env.DDBB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
// MongoDB driver's new connection management engine.
).then(() => debug('Connection stablished'),
  (error) => debug(error));
