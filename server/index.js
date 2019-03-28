const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const auth = require('./middleware/auth');
const themes = require('./middleware/themes');
const { handlerError } = require('./utils/error');

const app = express();
const port = 3000;

app.use([
    cookieParser(),
    auth
]);
app.get('/', themes);
app.use(express.static(path.join(__dirname, '../dist')));

app.use(handlerError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
