const fs = require('fs');
const file = fs.createWriteStream('./big.json');

for(let i=0; i<= 10000; i++) {
  file.write(`${JSON.stringify({_id: i, city: 'Lorem ipsum dolor sit amet', country: 'country'})},`);
}

file.end();