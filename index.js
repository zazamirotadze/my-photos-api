const express = require('express');
const corsMiddleware = require('./corsMiddleware');
const app = express();
const {readdirSync, readFileSync} = require("fs");
const marked = require('marked');


app.use(corsMiddleware);

readdirSync("./routes").map((file) => app.use("/", require("./routes/" + file)))

const readme = readFileSync('readme.md', 'utf8');

app.use('/', (req, res) => {
    res.send(marked.parse(readme))
})

app.listen(3000)