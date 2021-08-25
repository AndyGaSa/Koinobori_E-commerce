const { connect } = require('mongoose'); // Import Mongoose.
const debug = require('debug')('ecommerce:ddbbConfig'); // Import Debug.

connect( // to MongoDB.
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug('Connecion stablished'),
  (error) => debug(error),
);
