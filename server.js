const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('post Api')
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})

//index
app.get('/posts', function (req, res) {
    res.send('Lista dei post')
})

//show
app.get('/posts/:id', function (req, res) {
    res.send('Dettagli post')
})