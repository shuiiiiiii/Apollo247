const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = 9000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO!");
});

app.get("/fetchDoctors/:id", (req, res) => {
    res.send("DOCTORS WILL BE SENT SOON!");
    console.log(req.params.id);
    // do the logic
});

app.post("/adddoc/:id", (req, res) => {
    // do the logic
});

app.listen(port, () => {
    console.log(`Server is up on PORT:${port}`);
});