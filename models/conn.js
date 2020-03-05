const host = 'rajje.db.elephantsql.com',
  database = 'uafnofhr',
  user = 'uafnofhr',
  password = '4W_4AbVWuKi0ZidGS-UACe9d1j7UFlLR';
  

const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

const pgp = require('pg-promise')({
    query: function(e) {
        console.log("Query:", e.query);
    }
});

const db = pgp(options);

module.exports = db;