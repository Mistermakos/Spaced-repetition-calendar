import express from 'express'
const app = express();
import { getDate, getHome } from "./backend/handlers.js"

app.use(express.json());
app.use(express.static(`./frontend`))

app.route("/").get((req, res) => getHome(req,res))

app.route("/api/v1/Date").get((req,res) => {getDate(res)})

export default app;