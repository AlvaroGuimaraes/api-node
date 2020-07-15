const express = require("express");
const loja = require("./loja");

const router = express.Router();

router.use("/loja", loja);

module.exports = router;
