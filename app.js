import express from 'express'
const app = express();
import router from './CallendarRoutes.js'

app.use(express.json());

// app.route("/").get((req, res) => getHome(req,res))

app.use("/api/v1", router)

export default app;