const debug = require('debug')('StoreApi::ddbbConfig');
const mongoose = require('mongoose');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
)
  .then(
    () => debug('Database connection established'),
    (error) => debug(error),
  );
