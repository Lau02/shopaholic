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
        type: String
    },
    deadline: {
        type: String
    },
    image: String,
    wishGranted: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const Model = mongoose.model("Wish", schemaWish);
module.exports = Model