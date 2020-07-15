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
      filename: './src/database/dbDev.sqlite'
    },
    migrations: {
			directory: './src/database/migrations'
		},
		useNullAsDefault: false,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
			directory: './src/database/migrations'
		},
		useNullAsDefault: true,
  }

};
