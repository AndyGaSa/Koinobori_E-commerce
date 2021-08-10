const { connect } = require('mongoose');
const debug = require('debug')('beersApi:ddbbConfig');
const chalk = require('chalk');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
)
  .then(
    () => debug(chalk.bgGrey.green('Database connection established')),
    (error) => debug(chalk.red(error)),
  );
