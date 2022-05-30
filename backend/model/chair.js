const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const chairSchema = new Schema ({
    chair_name:{
        type: String,
        required: true
    },
    chair_wood:{
        type: String,
        required: true
    },
    chair_size:{
        type: Number,
        required: true
    },
    chair_price:{
        type: Number,
        required: true
    },
    chair_available:{
        type: Boolean,
        required: true
    }
})


module.exports = mongoose.model('chair', chairSchema);

