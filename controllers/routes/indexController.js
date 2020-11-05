const express = require("express");

const router = express.Router();
const DbManager = require("../../models/dbManager.js");
const db = new DbManager();

router.get("/", async (req, res) => {
    res.render("index", { burger_data: await db.getAll() });
});

router.post("/add", async (req, res) => {
    const burgerData = req.body;
    if (burgerData) await db.create(burgerData);
    res.redirect("/");
});

router.put("/remove/:id", async (req, res) => {
    const id = req.params.id;
    if (id) await db.update(id);
    res.sendStatus(200);
});

module.exports = router;
