const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const tableSchema = new Schema ({
    table_name:{
        type: String,
        required: true
    },
    table_wood:{
        type: String,
        required: true
    },
    table_size:{
        type: Number,
        required: true
    },
    table_price:{
        type: Number,
        required: true
    },
    table_available:{
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model('Table', tableSchema);
