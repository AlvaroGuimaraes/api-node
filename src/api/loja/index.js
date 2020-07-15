const express = require("express");
const router = express.Router();

const lojaController = require("./loja.ctrl");

router.get("/", lojaController.getAll);

router.get("/citystate", lojaController.getLojaCityState);

router.put("/", lojaController.update);

router.delete("/:id", lojaController.deleteOne);

router.get("/:id", lojaController.getOne);

router.post("/", lojaController.save);


module.exports = router;
