// Update with your config settings.
const path = require('path');
const envPath = path.join(__dirname, '.env')
require('dotenv').config({
    path: envPath
});

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/src/database/db.sqlite`
    },
    migrations: {
			directory: `${__dirname}/src/database/migrations/`
		},
		useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
			directory: `${__dirname}/src/database/migrations/`
		},
  }

};
