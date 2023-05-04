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
    const id = req.params.id;
    const selectedId = chefData.find(n => parseInt(n.id) == parseInt(id));
    res.send(selectedId)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})