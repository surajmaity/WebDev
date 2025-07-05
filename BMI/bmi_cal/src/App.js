
import React, { useState } from "react";

function App() {
  // making states of our app
  const [weight, setWeight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setMessage] = useState("");

  // logic of the app
  let calcbmi = (e) => {
    // Prevents the default form submission behavior, allowing us to handle the form submission manually
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height) * 703);
      // to fixed to give the answer to a fixed decimal point , its a js method
      setbmi(bmi.toFixed(1));

      // setting the message according to the bmi value
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are normal weight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are overweight");
      } else {
        setMessage("You are obese");
      }
    }
  };

  // function to reload the page
  let reload = (e) => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-8 px-4" data-theme="dark">
      <div className="max-w-md mx-auto">
        <div className="card bg-base-200 shadow-2xl border border-gray-700">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold text-center mb-6 text-primary">
              BMI Calculator
            </h2>
            
            <form onSubmit={calcbmi} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Weight (lbs)</span>
                </label>
                <input 
                  type="number"
                  placeholder="Enter your weight"
                  value={weight} 
                  onChange={(e) => setWeight(e.target.value)}
                  className="input input-bordered input-primary w-full"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Height (inches)</span>
                </label>
                <input 
                  type="number"
                  placeholder="Enter your height" 
                  value={height} 
                  onChange={(e) => setheight(e.target.value)}
                  className="input input-bordered input-primary w-full"
                />
              </div>
              
              <div className="flex gap-3">
                <button className="btn btn-primary flex-1" type="submit">
                  Calculate BMI
                </button>
                <button className="btn btn-outline" onClick={reload} type="button">
                  Reset
                </button>
              </div>
            </form>
            
            {bmi && (
              <div className="mt-6 p-4 bg-base-300 rounded-lg border border-gray-600">
                <h3 className="text-lg font-semibold text-center mb-2 text-white">
                  Your BMI: <span className="text-primary font-bold">{bmi}</span>
                </h3>
                <div className="alert alert-info bg-blue-900 border-blue-700 text-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{message}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
