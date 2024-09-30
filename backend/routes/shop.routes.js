module.exports = app => {
    const shops = require("../controllers/shop.controller.js");

    var router = require("express").Router();

    router.post("/", shops.create);

    router.put("/", shops.update);

    router.get("/", shops.findAll);

    router.delete("/:id", shops.delete);

    app.use("/api/shops", router);
};