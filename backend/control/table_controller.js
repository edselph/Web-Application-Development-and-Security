const table = require('../model/table');


const getAllTable = async (req, res, next) => {
    let tables;
    try{
        tables = await table.find();
    }catch(err){
        console.error(err);
    }
    if (!tables){
        return res.status(404).json({massage: "No tables found"});
    }
    return res.status(200).json({massage: "Tables found", data: tables});
}


const addTable = async (req, res, next) => {
    const {table_name, table_wood, table_size, table_price, table_available} = req.body;
    const newTable = new table({
        table_name,
        table_wood,
        table_size,
        table_price,
        table_available
    });
    try{
        await newTable.save();
    }catch(err){
        console.error(err);
    }

    if (!tables){
        return res.status(500).json({massage: "Unable to add table"});
    }
    return res.status(201).json({newTable});
}


exports.getAllTable = getAllTable;
exports.addTable = addTable;
