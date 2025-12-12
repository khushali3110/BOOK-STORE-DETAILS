const { Store, ViewData, Delete, updated } = require("../controllers/dataController");

const app = require("express")();
app.post("/", Store);
app.get("/", ViewData);
app.delete("/:id", Delete);
app.put("/:id", updated);


module.exports = app;