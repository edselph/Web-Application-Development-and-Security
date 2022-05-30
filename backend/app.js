const express = require('express');
const mongoose = require('mongoose');
const router_tables = require('./routes/table_routes');
const router_chairs = require('./routes/chair_routes');
const app = express();

// app.use("/", (req, res, next) => {
//     res.send("Request received");
//     next();
// })

app.use("/tables", router_tables);

app.use("/chairs", router_chairs);

mongoose.connect(
    "mongodb+srv://admin:5aXT2MlXJVYqKcEi@cluster1.vu0jwrp.mongodb.net/Furnica?retryWrites=true&w=majority"
    )
    .then(()=>console.log('Connected to Furnica'))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));

