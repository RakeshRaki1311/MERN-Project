const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


// middleware
app.use(express.json());
app.use(cors());
app.use("/books",router); //localhost:5000/books



mongoose.connect("mongodb+srv://admin:nKk3V2Sf49v6xYfG@cluster0.0redchq.mongodb.net/bookStore?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected To Database"))
.then(() => {app.listen(5000)
}).catch((err)=> console.log(err));


//nKk3V2Sf49v6xYfG