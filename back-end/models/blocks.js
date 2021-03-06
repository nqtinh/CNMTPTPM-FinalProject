const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const BlockSchema = new Schema({
    height: {
        type: Number,
        primaryKey: true,
    },
    lastheightposi: {
        type: Number,
    },
    newActionUser: {
        type: Array,
    },
    time: {
        type: Date,
        allowNull: false,
    },
    txs: {
        type: String,
        allowNull: false,
    },
    hash: {
        type: String,
        allowNull: false,
    },
    appHash: {
        type: String,
        allowNull: false,
    }
})

module.exports = Block = mongoose.model('blocks', BlockSchema);