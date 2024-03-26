const mongoose = require('mongoose')

const finacialSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter finacial name"]
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

const finacial = mongoose.model("Finacial", finacialSchema);

module.exports = finacial;

