import React, { useState } from "react";

// Import your components like a user would
import {
  Cashfree,
  CardNumber,
  CardHolder,
  CardExpiry,
  CardCvv,
  SaveInstrument,
} from "./index";

const App: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handlePay = () => {
    alert("Payment processing...");
    // Trigger your payment logic here
  };

  return (
    <div style={{ padding: "40px", background: "#f0f2f5", height: "100vh" }}>
      <h2>Cashfree Card Payment Demo</h2>
      <Cashfree
        theme="pastel"
        onComplete={(status) => {
          console.log("Status from component:", status);
          setIsComplete(status); // this is your local app state
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <CardNumber />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <CardHolder />
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <CardExpiry />
            <CardCvv />
        </div>
        <SaveInstrument />

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handlePay}
            disabled={!isComplete}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: isComplete ? "pointer" : "not-allowed",
              backgroundColor: isComplete ? "#2361d5" : "#a0a0a0",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              transition: "background-color 0.3s ease",
            }}
          >
            Pay Now
          </button>
        </div>
      </Cashfree>
    </div>
  );
};

export default App;
