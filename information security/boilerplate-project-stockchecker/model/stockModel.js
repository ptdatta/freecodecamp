const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: true,
        unique: true,
    },
    likes: {
        type: Number,
        default: 0,
    },
    ips: {
        type: Array,
        default: [],
    },
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;
