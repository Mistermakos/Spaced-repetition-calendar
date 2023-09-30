import app from "./app.js"
import dotenv from 'dotenv'
import mongoose from "mongoose"

dotenv.config({path:"./config.env"})

async function connect()
{
    await mongoose.connect(process.env.DATABASE)
}

connect().catch(err => console.log("error:", err)).then(console.log("Succestully connected to database"))

app.listen(process.env.PORT, () => {console.log(`Server wors on http://localhost:${process.env.PORT}`);})