import dotenv from 'dotenv'
dotenv.config({path:"./config.env"})
import app from "./app.js"
import mongoose from "mongoose"


async function connect()
{
    await mongoose.connect(process.env.DATABASE)
}

connect().catch(err => console.log("error:", err)).then(console.log("Succestully connected to database"))

app.listen(process.env.PORT, () => {console.log(`Server wors on http://localhost:${process.env.PORT}`);})