const express = require('express');
const BodyParser = require('body-parser');
const mongodb = require('./db/connect');
const dotenv = require('dotenv');


dotenv.config();
const port = process.env.PORT || 3000;
const app = express();


app
    .use(BodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes'));



mongodb.connectToServer((err) => {
    if (err) {
        console.error(err);
    } else {
        app.listen(port, () => {
            console.log(`Database connected and Server is running on port ${port}`);
        });
}});
