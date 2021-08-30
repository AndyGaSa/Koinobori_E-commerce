const { connect } = require('mongoose');
const debug = require('debug')('server: ddbb');

connect(
  process.env.DDBB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then(() => debug('ʕ•́ᴥ•̀ʔっ Database connected'))
  .catch((error) => debug(error));
