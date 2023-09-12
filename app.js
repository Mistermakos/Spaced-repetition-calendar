const express = require("express")
const app = express()
const Handlers = require("./backend/handlers")

app.use(express.json());
app.use(express.static(`${__dirname}/frontend`))

app.route("/").get((req, res) => getHome(req,res))

app.route("/api/v1/Date").get((req,res) => {getDate(res)})

module.exports = app;