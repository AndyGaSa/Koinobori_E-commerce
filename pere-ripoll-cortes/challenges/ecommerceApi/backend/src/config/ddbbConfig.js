const mongoose = require('mongoose');
const debug = require('debug')('server:ddbbConfig');

mongoose.connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
)
  .then(
    () => debug('Connection established'),
    (error) => debug(error),
  );
