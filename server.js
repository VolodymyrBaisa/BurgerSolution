const express = require("express");
const expHandlebars = require("express-handlebars");
const routes = require("./controllers/routes/indexController.js");

const PORT = process.env.PORT || 8080;
const app = express();

//Static content for the app
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log("Listening on port:%s", PORT);
});
