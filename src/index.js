const express = require("express");
require("./config/database");

const app = express();
const api = require("./api/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 4000;
//==================================================================================

app.use("/api", api);

//==================================================================================
app.listen(port, () => console.log(`Service running on port ${port}!`));
module.exports = app