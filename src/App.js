import "./index.css";
import background from "./background.jpg";
import React, { useState, useEffect } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let imgsrc = "";

  const calcbmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter values first");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
    }
  };

  let reload = () => {
    setWeight(0);
    setHeight(0);
    setBmi("");
  };

  useEffect(() => {
    if (0.1 < bmi && bmi < 18.5) {
      setMessage("You are Underweight");
    } else if (18.5 < bmi && bmi < 24.9) {
      setMessage("You are Normal");
    } else if (25 < bmi && bmi < 29.9) {
      setMessage("You are Overweight");
    } else if (30 < bmi) {
      setMessage("You are in a Obesity Codition");
    } else {
      setMessage("");
    }
  }, [bmi]);

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <h2 className="center">BMI CALCULATOR</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (Kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={reload}>
              Clear Values
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
