const { connect } = require('mongoose');
const debug = require('debug')('ecommerce-server:ddbbConfig');
const chalk = require('chalk');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => debug(`${chalk.bgGreen('Connection established')}`),
    (error) => debug(`${chalk.bgRed(error)}`)
  );
