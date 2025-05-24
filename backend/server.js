import express from 'express'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'

dotenv.config()

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'passop'

const app = express()
const port = 3000
app.use(bodyParser.json())

// Use an async IIFE to await MongoDB connection before starting the server
;(async () => {
  try {
    await client.connect()
    console.log('Connected successfully to MongoDB')

    const db = client.db(dbName)
    const collection = db.collection('passwords')

    app.get('/', async (req, res) => {
      const findResult = await collection.find({}).toArray()
      res.json(findResult)
    })

    // Save password
    app.post('/save', async (req, res) => {
      const password = req.body
      const insertResult = await collection.insertOne(password)
      res.send({ success: true, result: insertResult })
    })

    // Delete password
    app.post('/delete', async (req, res) => {
      const password = req.body
      const deleteResult = await collection.deleteOne(password)
      res.send({ success: true, result: deleteResult })
    })

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
  }
})()
