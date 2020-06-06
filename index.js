const fs = require('fs');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
app.use(cors())
app.get('/', (req, res) => {
  const readStream = fs.createReadStream('./city_inspections.json', {flags: 'r', encoding: 'utf-8'});
  readStream.on('data', _data => res.write(_data));
  readStream.on('end', _data => res.status(200).send());
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))