const express = require('express')
const app = express()
const path = require('path')
const port = 666

app.use('/pictures', express.static('pictures'))
app.use('/css', express.static('css'))
app.use('/javascript', express.static('javascript'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))