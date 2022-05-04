const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://taewon:2648korea!@boilerplate.ptb5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//  useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
//}).then(() => console.log('MongoDB Connected...'))
//.catch(err => console.log(err))

app.get('/', (req, res) => 
  res.send('홍똥기벌레')
)

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`)
)


