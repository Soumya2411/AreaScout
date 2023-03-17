const express = require('express')
const app = express()
const port = 3000

app.get('/signup', (req, res) => res.sendFile('C:/FTN/AreaScout/signup.html'));







app.listen(port, () => console.log(`Example app listening on port ${port}!`))