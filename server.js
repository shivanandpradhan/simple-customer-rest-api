import dotenv from 'dotenv'
dotenv.config() // configure .env

import express, { application } from "express"
import connectDB from "./db/connectdb.js"
import web from './routes/web.js'
import homeController from "./controllers/homeController.js"

// some necessary constants...
const PORT = process.env.PORT
const HOST = "localhost"
const DATABASE_URL = process.env.DATABASE_URL

// creating a server
const server = express()

// for req.body as json
server.use(express.json())

// handling  path "/"
server.get('/', homeController)

// register a router.
server.use("/api", web)

// connecting to db
connectDB(DATABASE_URL)

// listening on the port
server.listen(PORT, HOST, () => {
    console.log(`Listening on the Port : ${PORT}`)
})


