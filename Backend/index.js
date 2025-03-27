import express from "express"
import mongoose from "mongoose"
import { UserModel } from "./models/users.js"
import Userrouter from "./routes/UserAuth.js"

const app = express()
const port = 3000

app.use(express.json())
app.use('/auth', Userrouter)
app.get('/', (req, res) => {
  res.send('Hello World!!!!')
})



mongoose.connect('mongodb://localhost:27017/BookRecommendSystem').then(()=>{
    console.log("Connected")
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
})
