const express = require("express");
let router = express.Router();
const Sql = require("../src/Sql");

router.get("/", (req, res, next) => {

    let sql = new Sql();

    sql.select("SELECT * FROM tb_to_do").then(itemList => {

        res.render("index", {
            title: "Todoapp",
            itemList,
            err: ""
        });

    }).catch(err => {

        res.render("index", {
            title: "Todoapp",
            itemList: [],
            err
        });

    });


});

module.exports = router;