require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('../server/controller');
const massive = require('massive');
const cors = require('cors')
const port = 8080

app.use(cors())
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING)
.then(db => {
    app.set('db', db)
    console.log('Database is Connected')
})
.catch(err => {
    console.log('Database connection error', err)

})

app.get('/health', (req, res) => {
    return res.send('ok')
});

app.get('/api/houses', controller.getHouses);

app.post('/api/house', controller.newHouse);

app.delete('/api/house/:id', controller.deleteHouse)

app.listen(port, function() {
    console.log(`Server is running on ${port}`)
})