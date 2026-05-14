const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_URI;
console.log(uri);
let _db;

MongoClient.connect(uri).then((client) => {
    _db = client;
    console.log('Connected to MongoDB');
});

