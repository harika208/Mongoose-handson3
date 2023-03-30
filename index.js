const express = require("express");
const bodyParser = require("body-parser");
const Connect = require("./database/mongoose");
const employeeRouter = require("./router/employee");
const app = express();

app.use(bodyParser.json());
app.use(employeeRouter);

app.listen(8080, async() => {
    await Connect();
    console.log("server started")
});