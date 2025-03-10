const db = require("../db/queries");

async function usersListGet(req, res) {
    const usernames = await db.getAllUsernames();
    res.render("index", { title: "All Usernames", usernames: usernames });
}

async function usersNewGet(req, res) {
    res.render("newUser");
}

async function usersNewPost(req, res) {
    const newUser = req.body.username;
    await db.insertUsername(newUser);
    res.redirect("/");
}

async function usersSearchGet(req, res) {
    const searchText = req.query.search;
    const searchResults = await db.searchUsername(searchText);
    res.render("index", {
        title: "Filtered Usernames",
        usernames: searchResults,
    });
}

async function usersDeleteGet(req, res) {
    await db.deleteAllUsernames();
    res.redirect("/");
}

module.exports = {
    usersListGet,
    usersNewGet,
    usersNewPost,
    usersSearchGet,
    usersDeleteGet,
};
