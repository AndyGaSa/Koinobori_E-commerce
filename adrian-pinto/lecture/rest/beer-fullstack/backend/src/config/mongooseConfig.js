const debug = require('debug')('beers:ddbbconfig');
const chalk = require('chalk');
const { connect } = require('mongoose');

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
).then(
  () => debug(chalk.bgGrey.green('Database connection established')),
  (error) => debug(chalk.red(error)),
);
