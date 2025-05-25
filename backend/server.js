import express from 'express'
import dotenv from 'dotenv'
import { MongoClient, ObjectId } from 'mongodb'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'passop'

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

// Use an async IIFE to await MongoDB connection before starting the server
;(async () => {
  try {
    await client.connect()
    console.log('Connected successfully to MongoDB')

    const db = client.db(dbName)
    const collection = db.collection('passwords')

    // Get all passwords
    app.get('/', async (req, res) => {
      const passwords = await collection.find({}).toArray()
      res.json(passwords)
    })

    // Save new password
    app.post('/', async (req, res) => {
      const password = req.body
      const result = await collection.insertOne(password)
      res.send({ success: true, result })
    })

    // Update password
    app.put('/update/:id', async (req, res) => {
      const id = req.params.id
      const newData = req.body

      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: newData }
      )

      res.send({ success: true, result })
    })

    // Delete password
    app.delete('/delete/:id', async (req, res) => {
      const id = req.params.id

      const result = await collection.deleteOne({ _id: new ObjectId(id) })
      res.send({ success: true, result })
    })

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`)
    })
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err)
  }
})()
