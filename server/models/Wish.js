const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const schemaWish = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date
    },
    deadline: {
        type: Date
    },
    image: String,

    wishGranted: String,

    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

const Model = mongoose.model("Wish", schemaWish);
module.exports = Model