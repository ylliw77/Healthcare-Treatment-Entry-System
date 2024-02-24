import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormInput() {
  const [patient, setPatient] = useState({
    name: "",
    dateOfTreatment: "",
    treatmentDesc: [],
    medPrescribtion: [],
    cost: 0,
  });

  const addPatient = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: "POST",
        url: "http://localhost:3000/patients",
        data: patient,
      });
      setPatient({
        name: "",
        dateOfTreatment: "",
        treatmentDesc: [],
        medPrescribtion: [],
        cost: 0,
      });
    
      toast.success(data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const handleChangeArray = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: [...patient[name], value] });
  };

  const handleChangeValue = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };
  return (
    <>
      <ToastContainer />

      <form
        onSubmit={addPatient}
        style={{
          width: "400px",
        }}
      >
        <div className="flex flex-col bg-[#FFFFFFF] lg:py-0 ">
          <div className="w-100 bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Detail Treatments
              </p>
              <div>
                <label className="block mb-2 text-sm font-semibold text-black">
                  Patient Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="text"
                  onChange={handleChangeValue}
                  name="name"
                  value={patient.name}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900">
                  Date Of Treatments
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="date"
                  onChange={handleChangeValue}
                  name="dateOfTreatment"
                  value={patient.dateOfTreatment}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900">
                  Treatment Description
                </label>

                <select
                  name="treatmentDesc"
                  value={patient.treatmentDesc}
                  multiple={true}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={handleChangeArray}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                  <option value="option6">Option 6</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900">
                  Medications Prescribed
                </label>
                <select
                  name="medPrescribtion"
                  multiple={true}
                  value={patient.medPrescribtion}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  onChange={handleChangeArray}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                  <option value="option6">Option 6</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold text-black">
                  Cost of Treatment
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  type="number"
                  onChange={handleChangeValue}
                  name="cost"
                  value={patient.cost}
                />
              </div>

              <button
                className="w-full bg-[#bfdbfe] hover:bg-[#93c5fd] focus:ring-4 focus:outline-none focus:ring-primary-300 font-semibold rounded-3xl text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-[#2563eb]"
                type="submit"
              >
                Save Patient
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
