// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') { // might need to change example was from heroku
    // we are in prod - return prod keys
    module.exports = require('./prod');
} else {
    // we are in dev - return dev keys
    module.exports = require('./dev');
}
