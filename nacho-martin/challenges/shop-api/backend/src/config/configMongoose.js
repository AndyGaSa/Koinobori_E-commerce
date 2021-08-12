const { connect } = require('mongoose');
const debug = require('debug')('shopApi:ddbbConfig');
const chalk = require('chalk');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => debug(`${chalk.magentaBright('Database connection established')}`),
    (error) => debug(error)
  );
