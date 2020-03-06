const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const schemaWish = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    date: {
        type: Date
    },
    deadline: {
        type: Date
    },
    image: String,
    wishGranted: String,
})

const Model = mongoose.model("Wish", schemaWish);
module.exports = Model