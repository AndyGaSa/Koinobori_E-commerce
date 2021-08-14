const { connect } = require('mongoose');
const debug = require('debug')('laTiendecitaApi:ddbbConfig');
const chalk = require('chalk');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => debug(`${chalk.yellowBright('Database connection established')}`),
    (error) => debug(error)
  );
