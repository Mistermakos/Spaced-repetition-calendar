const express = require("express")
const app = express()
const Handlers = require("./backend/handlers")
app.use(express.json());

app.route("/").get((req, res) => getHome(req,res))

app.route("/api/v1/Date").get((req,res) => {getDate(res)})

app.listen(3000, () => {console.log("Server działa na http://localhost:3000");})