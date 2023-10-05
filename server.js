const express = require('express');
const bodyParser = require('body-parser');
const {Pool} = require('pg')


const app = express();
const port = 3000;
const pool = new Pool({
    user: 'Ramdani',
    host: 'localhost',
    database: 'datadb',
    password: '12345',
    port: 5432,
  })

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})