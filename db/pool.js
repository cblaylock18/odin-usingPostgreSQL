const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@localhost:5432/top_users`,
});
