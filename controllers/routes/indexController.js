const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.post("/add", function (req, res) {
    console.log(req.body);
    res.redirect("/");
});

router.put("/remove/:id", function (req, res) {
    const id = req.params.id;
    console.log(id);
    res.sendStatus(200);
});

module.exports = router;
