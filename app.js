import express from 'express'
const app = express();
import router from './CallendarRoutes.js'

app.use(express.json());
app.use(express.static(`./frontend`))

// app.route("/").get((req, res) => getHome(req,res))

app.route("/api/v1").path(router)

export default app;