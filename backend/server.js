const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const port = 9000;
const uri = "mongodb+srv://shuiii:leti%40123@testing.fno66zl.mongodb.net/?retryWrites=true&w=majority&appName=testing";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

  }
}
run().catch(console.dir);


const doctor = mongoose.model('Doctor', mongoose.Schema({
    name: String,
    speciality: String,
    exp: Number,
    degree: String,
    city: String,
    oCprice: Number,
    onlineConsult: Boolean,
    hVprice: Number,
    hosVisit: Boolean,
    img: String, 
    hindi: Boolean,
    english: Boolean,
    apollo: Boolean,
    otherC: Boolean
}));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HELLO!");
});

app.post("/adddoc", async (req, res) => {
  try{
    const Doctor  = new doctor(req.body);
    await Doctor.save();
    res.status(201).json({success: true, doctor});
    console.log("Doctor has been saved to the db ", doctor);
  } catch(error){
    res.status(500).json({sucess: false, error: error.message});
    console.log("Doctor could not be saved");
    console.log(error.message);
  }
});

app.get('/alldoctors', async (req, res) => {
  try {
    const doctors = await doctor.find({});
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/getdoctor', async (req, res) => {
  try { 
    req.filters = {
      oc: req.query.oc,
      hv: req.query.hv,
      exp: req.query.exp,
      fees: req.query.fees,
      eng: req.query.eng,
      hin: req.query.hin,
      apollo: req.query.apollo,
      otherC: req.query.otherC,
      page: req.query.page || 1,
      limit: req.query.limit || 10,
    };

    const {fees, page, limit, exp, oc, hv, eng, hin, apollo, otherC} = req.filters;
    const filters = {};
    if (oc != undefined) filters.onlineConsult = oc;
    if (hv != undefined) filters.hosVisit = hv;
    if (fees != undefined) filters.oCprice = {$lte : Number(fees)};
    if (exp !=  undefined) filters.exp = {$lte : Number(exp)};
    if(hin != undefined) filters.english = eng;
    if(eng != undefined) filters.hindi = hin;
    if(apollo != undefined) filters.apollo = apollo;
    if(otherC != undefined) filters.otherC = otherC;

    console.log(filters);
    const doctors = await doctor.find(filters);

    const total = await doctor.countDocuments(filters);

    res.json({ doctors, total });
    console.log(doctors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(port, () => {
    console.log(`Server is up on PORT:${port}`);
});