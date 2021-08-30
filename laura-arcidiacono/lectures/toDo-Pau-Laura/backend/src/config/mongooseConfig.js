const { connect } = require('mongoose');
const debug = require('debug')('toDosApi');

connect(
    process.env.DDBB_URL,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
)
.then( 
    () => debug('Se ha conectado Ok'),
    (error) => debug(error),
)