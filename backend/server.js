const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = 9000;
const uri = "mongodb+srv://shuiii:leti@123@testing.fno66zl.mongodb.net/?retryWrites=true&w=majority&appName=testing";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await mongoose.disconnect();
  }
}

run().catch(console.dir);

const doctor = mongoose.model('Doctor', mongoose.Schema({
    name: String,
    speciality: String,
    exp: Number,
    degree: String,
    city: String,
    faculty: String,
    oCprice: Number,
    onlineConsult: Boolean,
    hVprice: Number,
    hosVisit: Boolean,
    img: String, 
    language: Array
}));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO!");
});

app.get("/fetchDoctors/:id/:name/:price/:kek", (req, res) => {
    res.send("DOCTORS WILL BE SENT SOON!");
    console.log(req.params.id, req.params.name, req.params.price, req.params.kek);
    // do the logic
});

app.post("/adddoc/:id", (req, res) => {
    // do the logic
});

app.listen(port, () => {
    console.log(`Server is up on PORT:${port}`);
});