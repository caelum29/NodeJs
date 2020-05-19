const fs = require('fs').promises;
const fetch = require('axios');

const api = 'https://jsonplaceholder.typicode.com/users';

const fileName = "text.json";



fetch(api)
    .then(({data})=> fs.writeFile(fileName, JSON.stringify(data)))
    .then(()=> fs.readFile(fileName))
    .then(userFromFile => console.log(JSON.parse(userFromFile.toString())))
    .catch(err => console.log(err));
