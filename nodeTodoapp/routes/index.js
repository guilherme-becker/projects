const express = require("express");
let router = express.Router();
let Todo = require("../src/Todo");

router.get("/", (req, res, next) => {

    let todo = new Todo();

    todo.listAll().then(itemList => {

        res.render("index", {
            title: "Todoapp",
            itemList,
            success: "",
            err: ""
        });
    
    }).catch(err => {

        res.render("index", {
            title: "Todoapp",
            itemList: [],
            success: "",
            err
        });

    });

});

router.post("/", (req, res, next) => {

    let todo = new Todo();

    todo.save(req.body.item).then(results => {

        res.redirect("/");

    }).catch(err => {

        res.render("index", {
            title: "Todoapp",
            itemList: [],
            success: "",
            err
        });

    });

});

router.post("/update/:id", (req, res, next) => {

    let todo = new Todo();

    todo.save("", req.params.id).then(results => {

        res.send(results);

    }).catch(err => {

        console.error(err);

    });

});

router.post("/delete/:id", (req, res, next) => {

    let todo = new Todo();

    todo.delete(req.params.id).then(results => {

        res.send(results);

    }).catch(err => {

        console.error(err);

    });

});

module.exports = router;