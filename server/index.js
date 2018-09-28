require('dotenv').config()
const express = require ('express')
const bodyParser = require('body-parser');
const controller = require('./controller')
const massive = require('massive')

const port = process.env.SERVER_PORT

const app = express()
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log("DB has ears")
})

app.get('/api/get_inventory', controller.get_inventory)

app.post('/api/product', controller.product)

app.put('/api/change')

app.delete('/api/delete/:id', controller.delete)

app.listen(port, () => {
    console.log('Ready for orders')
})