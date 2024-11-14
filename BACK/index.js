require('dotenv').config();
const express = require('express')
const path = require("path")
const {exec} = require("child_process")
const mongoose = require('mongoose')
const cors = require("cors")
const port = process.env.PORT || 4000
const contactRoutes = require("./routes/contact")

const app = express();
app.use(express.json());
app.use(
    cors({
        origin:"*"
    })
);

app.use("/api/contact",contactRoutes);
console.log(process.env.MONGO_URI);
mongoose.set('debug', true);
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(port, () => { 
            console.log(`connected to db and listening on port : ${port}`);
        });
    })
    .catch((err) => console.log(err));