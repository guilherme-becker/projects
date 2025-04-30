const express = require("express");
let path = require("path");
const port = 3000;

const app = express();

let indexRouter = require("./routes/index");

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});