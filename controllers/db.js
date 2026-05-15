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

const createContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const response = await mongodb.getDb().db().collection(process.env.COLLECTION).insertOne(contact);
    res.status(201).json(response);
}
module.exports = { getdata, getContactData, createContact };
