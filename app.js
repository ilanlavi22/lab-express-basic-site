// require express
const express = require('express');
//create express server name app
const app = express();

app.listen(3000);
// make everything inside of public/ available
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
