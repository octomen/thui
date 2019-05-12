const path = require('path');
const express = require('express');

const { handlerError } =require('./utils/error');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(handlerError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
