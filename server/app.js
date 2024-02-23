if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
console.clear();

const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");

const app = express();

const { db } = require("./config/firebase");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.post("/patients", async (req, res) => {
  try {
    const { name, dateOfTreatment, treatmentDesc, medPrescribtion, cost } =
      req.body;
    const patientRef = db.collection("customer");

    const setPatient = await patientRef.add({
      patientName: name,
      dateTreatment: dateOfTreatment,
      treatmentDescription: treatmentDesc,
      medPrescribed: medPrescribtion,
      costOfTreatment: cost,
    });

    setPatient.set({ patientId: setPatient.id }, { merge: true });

    res.status(201).json({
      message: "New patient successfully added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

app.listen(PORT, () => {
  console.log("This App is Running on Port : " + PORT);
});
