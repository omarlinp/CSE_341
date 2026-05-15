const mongodb = require('../db/connect');
ObjectId = require('mongodb').ObjectId;

const getdata = async (req, res) => {
    const result = await mongodb.getDb().db().collection(process.env.COLLECTION).find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })
}

const getContactData = async (req, res) => {
    const userId = req.params.id;
    const result = await mongodb
        .getDb()
        .db()
        .collection(process.env.COLLECTION)
        .find({_id: new ObjectId(userId)});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    })
}
module.exports = { getdata, getContactData };
