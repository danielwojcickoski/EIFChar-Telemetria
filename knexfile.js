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
      filename: './backend/src/database/dbDev.sqlite'
    },
    migrations: {
			directory: './backend/src/database/migrations'
		},
		useNullAsDefault: false,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './backend/src/database/db.sqlite'
    },
    migrations: {
			directory: './backend/src/database/migrations'
		},
		useNullAsDefault: true,
  }

};
