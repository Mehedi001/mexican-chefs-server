const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefData = require('./data/data.json');
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})
app.get('/chefData/:id', (req, res) => {
    const chefDetails =
    res.send(chefDetails)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})