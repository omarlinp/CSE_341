const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

const uri = process.env.MONGO_URI;
console.log(uri);
let _db;

const connectToServer = (callback) => {
    if(_db) {
        console.log('Already connected to MongoDB');
        return callback(null, _db);
    }
    MongoClient.connect(uri).then((client) => {
        _db = client;
        console.log('Connected to MongoDB');
        return callback(null, _db);
    })
    .catch((err) => {
        callback(err);
    });
}

const getDb = () => {
    if(!_db) {
        throw new Error('Database not initialized');
    }
    return _db;
}
module.exports = { connectToServer, getDb };