# Cashfree Payments for React

A React component library for integrating Cashfree Payment Gateway in your React applications.

# Features

1. Simple integration with Cashfree Payment Gateway

2. Modular React components: CardNumber, CardHolder, CardExpiry, CardCVV, and SaveInstrument

3. Customizable themes and styles

4. Built-in completeness state management with event callbacks

5. Supports saving card details for faster payments

6. Written in TypeScript with full type definitions

## Quick Start Guide

1. **Install the package**

   ```bash
   npm install @cashfreepayments/pg-svelte
   ```
2. **Import and set up the Cashfree component**

3.  **Run your app** and test the integration!

5. Styling Components

### Card Payment

Card payment requires four components: CardNumber, CardHolder, CardExpiry, and CardCVV. Optionally, you can include SaveInstrument to let users save their card.

```react
   import React, { useState } from "react";
import {
  Cashfree,
  CardNumber,
  CardHolder,
  CardExpiry,
  CardCVV,
  SaveInstrument,
} from "@cashfreepayments/pg-svelte";

const App: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false);

  const handlePay = () => {
    alert("Payment processing...");
    // Trigger your payment logic here
  };

  return (
    <Cashfree
      theme="pastel"
      onComplete={(status) => {
        console.log("Status from component:", status);
        setIsComplete(status); // this is your local app state
      }}
    >
      <CardNumber />
      <CardHolder />
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <CardExpiry />
        <CardCVV />
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
  );
};

export default App;

```

 4. Event Handling
 The Cashfree component provides an onComplete callback to notify when all card inputs are valid and complete. Use this to enable your Pay button or trigger other actions.

5. Styling Components

Customize the appearance by passing a customStyle object to the Cashfree component or individual components. This lets you override fonts, colors, borders, and other style properties to match your app's look.


