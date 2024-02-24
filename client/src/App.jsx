import { useState } from "react";
import Navbar from "./components/Navbar";
import FormInput from "./components/FomInput";

function App() {
  return (
    <div className="h-100 w-100">
      <Navbar />

      <div
        style={{
          display: "flex",
          backgroundColor: "#F9F8F4",
          justifyContent: "center",
          alignItems: "center",
          marginTop : 8,
          marginBottom : 10
        }}
      >
        <div>
          <FormInput />
        </div>
      </div>
    </div>
  );
}

export default App;
