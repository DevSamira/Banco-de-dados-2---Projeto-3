const express = require('express');
const routes = require('./routes');
const app = express();

function main (){
    app.use(express.json());
    app.use(routes);

    app.listen(3000, () => console.log('Server em funcionamento - porta 3000'));
}

module.exports = main;