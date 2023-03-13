const express = require('express');
const corsMiddleware = require('./corsMiddleware');
const app = express();
const {readdirSync} = require("fs");

app.use(corsMiddleware);
readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

app.use('/', (req, res) => {
    res.send('My photos api')
})
app.listen(3000)