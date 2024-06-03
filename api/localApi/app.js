const express = require("express");
const serverless = require("serverless-http");
const app = express();
const ApiController = require("./controller/apiController");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/funcionario", async function (req, res) {
    const apiController = new ApiController();
    const result = await apiController.findAllFuncionario();
    return res.json(result);
});

app.get("/funcionario/:id", async function (req, res) {
    const id = req.params.id;
    const apiController = new ApiController();
    const result = await apiController.findAOneFuncionario(id);
    return res.json(result);
});

app.put("/funcionario", async function (req, res) {
    const apiController = new ApiController();
    const result = await apiController.updateFuncionario(req.body);
    return res.json(result);
});

app.delete("/funcionario/:id", async function (req, res) {
    const id = req.params.id;
    const apiController = new ApiController();
    const result = await apiController.deleteFuncionario(id);
    return res.json(result);
});

module.exports.handler = serverless(app);
