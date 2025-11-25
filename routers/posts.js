const express = require('express')
const router = express.router();
//index
app.get('/posts', function (req, res) {
    res.send('Lista dei post')
})

//show
app.get('/:id', function (req, res) {
    res.send('Dettagli post')
})

//store
app.post('/', function (req, res) {
    res.send('creazione nuovo post')
})

//update
app.put('/:id', function (req, res) {
    res.send('modifica dei post')
})

//modify
app.patch('/:id', function (req, res) {
    res.send('modifica parziale del post')
})

//destroy
app.delete('/:id', function (req, res) {
    res.send('eliminazione post')
})
module.exports = router;