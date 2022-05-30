const chair = require('../model/chair');

const getAllChair = async (req, res, next) => {
    let chairs;
    try{
        chairs = await chair.find();
    }catch(err){
        console.error(err);
    }
    if (!chairs){
        return res.status(404).json({massage: "No chairs found"});
    }
    return res.status(200).json({massage: "Chairs found", data: chairs});
}

const addChair = async (req, res, next) => {
    const {chair_name, chair_wood, chair_size, chair_price, chair_available} = req.body;
    const newChair = new chair({
        chair_name,
        chair_wood,
        chair_size,
        chair_price,
        chair_available
    });
    try{
        await newChair.save();
    }catch(err){
        console.error(err);
    }
    if (!chairs){
        return res.status(500).json({massage: "Unable to add chair"});
    }
    return res.status(201).json({newChair});
}

exports.getAllChair = getAllChair;
exports.addChair = addChair;