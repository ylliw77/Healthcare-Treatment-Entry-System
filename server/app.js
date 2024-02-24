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

    if (!name) {
      throw { name: "BAD_REQUEST", message: "Name can't be empty" };
    }
    if (!dateOfTreatment) {
      throw { name: "BAD_REQUEST", message: "Date can't be empty" };
    }
    if (treatmentDesc.length === 0) {
      throw {
        name: "BAD_REQUEST",
        message: "Treament Description must be selected",
      };
    }
    if (medPrescribtion.length === 0) {
      throw { name: "BAD_REQUEST", message: "Prescribtion must be selected" };
    }
    if (!cost || cost === 0) {
      throw {
        name: "BAD_REQUEST",
        message: "Cost can't be empty or must be greater than 0",
      };
    }

    const patientRef = db.collection("customer");
    const setPatient = await patientRef.add({
      patientName: name,
      dateTreatment: new Date(dateOfTreatment),
      treatmentDescription: treatmentDesc,
      medPrescribed: medPrescribtion,
      costOfTreatment: Number(cost),
    });

    setPatient.set({ patientId: setPatient.id }, { merge: true });

    res.status(201).json({
      message: "New patient successfully added",
    });
  } catch (err) {
    if (err.name === "BAD_REQUEST") {
      res.status(400).json({
        message: err.message,
      });
    } else {
      console.error(err); // Log internal server errors for debugging
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
});

app.listen(PORT, () => {
  console.log("This App is Running on Port : " + PORT);
});
