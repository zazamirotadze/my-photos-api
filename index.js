const express = require('express')
const app = express()
const {readdirSync} = require("fs")


readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

app.use('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.send('Photos api')
})
app.listen(3000)