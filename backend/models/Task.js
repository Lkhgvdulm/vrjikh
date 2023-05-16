const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: { type: String },
    orders: { type: String},
    createAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model('Task', TaskSchema);