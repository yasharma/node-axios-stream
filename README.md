This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `node index.js`
```javascript
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
```
To run the backend server - Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


Read about node stream article [here](https://medium.com/developers-arena/streams-piping-and-their-error-handling-in-nodejs-c3fd818530b6)