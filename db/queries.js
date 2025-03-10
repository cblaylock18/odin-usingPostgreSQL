const pool = require("./pool");

async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [
        username,
    ]);
}

async function searchUsername(searchText) {
    const { rows } = await pool.query(
        "SELECT * FROM usernames WHERE username ILIKE $1",
        [`%${searchText}%`]
    );
    return rows;
}

async function deleteAllUsernames() {
    await pool.query("TRUNCATE TABLE usernames RESTART IDENTITY");
}

module.exports = {
    getAllUsernames,
    insertUsername,
    searchUsername,
    deleteAllUsernames,
};
