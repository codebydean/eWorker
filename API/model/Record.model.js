const mongoose = require('mongoose')

const RecordSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter Record name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
    },
    {
        timestamps: true
    }
);

const record = mongoose.model("Record", RecordSchema);

module.exports = record;

