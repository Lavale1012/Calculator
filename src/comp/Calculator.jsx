import React from "react";
import "./index.css";
import { useState } from "react";

function Calculator() {
  const [value, setValue] = useState("");

  const createNum = () => {
    const digits = [];
    for (let i = 9; i > -1; i--) {
      digits.push(
        <button
          value={i}
          onClick={(e) => {
            return setValue(value + e.target.value);
          }}
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Display */}
        <div className="display">
          <span>{value ? value : 0}</span>
        </div>

        {/* Buttons and Operators */}
        <div className="operators">
          <button
            value="("
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            (
          </button>
          <button
            value=")"
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            )
          </button>

          <button
            value="+"
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            +
          </button>
          <button
            value="-"
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            -
          </button>
          <button
            value="*"
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            ×
          </button>
          <button
            value="/"
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            ÷
          </button>
        </div>
        <div className="numbers">
          {createNum()}
          <button
            className="equals"
            onClick={() => {
              const ops = [".", "/", "-", "+", "*", "(", ")"];
              if (ops.includes(value[value.length - 1])) return 0;

              setValue(eval(value));
            }}
          >
            =
          </button>

          <button
            value="."
            onClick={(e) => {
              return setValue(value + e.target.value);
            }}
          >
            .
          </button>

          <button
            className="delete"
            onClick={() => {
              if (!value) return 0;
              setValue(value.toString().slice(0, -1));
            }}
          >
            DELETE
          </button>
          <button
            className="clear"
            onClick={() => {
              setValue("");
            }}
          >
            CLEAR
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
