import "./App.css";

// 3. import useState from react
import { useState } from "react";

function App() {
  // 4. Create useState variables for mood called mood and setMood, make the default "Tired"
const [mood, setMood] = useState("Tired");


  // 5. Create useState variables for energy called energy and setEnergy, make the default 3
const [energy, setEnergy] = useState(3);


  // 6. Create useState variables for school mode called schoolMode and setSchoolMode, make the default true
const [schoolMode, setSchoolMode] = useState(true);

  // 7. Create a function called handleHappy
  // When the function runs:
  // - change mood to "Happy"
  // - show an alert about your mood improving
function handleHappy() {
  alert("Mood improved")
  setMood("Happy")
}


  // 8. Create a function called handleEnergyUp
  // When the function runs:
  // - increase energy by 1
  // - show an alert about your energy rising
function handleEnergyUp() {
  alert("Energy rising")
  setEnergy(energy + 1)
}


  // 9. Create a function called handleReset
  // When the function runs:
  // - reset mood back to "Tired"
  // - reset energy back to 3
  // - reset schoolMode back to true
  // - show an alert that everything has been reset
function handleReset() {
  setMood("Tired")
  setSchoolMode(true)
  setEnergy(3)
  alert("Everything has been reset")
}


  // 10. Create a function called handleSchoolMode
  // When the function runs:
  // - switch schoolMode between true and false
function handleSchoolMode() {
  setSchoolMode (!schoolMode)
}


  return (
    <div className="page">
      <section className="card">
        <h1>Mood Tracker</h1>
        <p className="subtitle">
          Practice using useState with mood, energy, and school mode.
        </p>

        <div className="tracker-grid">
          <div className="tracker-box">
            <h2>Current Mood</h2>
            <p>Track how your day is going.</p>

            <button onClick={handleHappy}
              className="btn"
              // 11. Connect this button to handleHappy using onClick
            >
              Change Mood to Happy 🙂
            </button>

            {/* 12. Display mood here using curly brackets */}
            <p className="output">Mood:{mood} </p>
          </div>

          <div className="tracker-box">
            <h2>Energy Level</h2>
            <p>Track how much energy you have.</p>

            <button onClick={handleEnergyUp}
              className="btn"
              // 13. Connect this button to handleEnergyUp using onClick
            >
              Increase Energy ⚡
            </button>

            {/* 14. Display energy here using curly brackets */}
            <p className="output">Energy: {energy} </p>
          </div>
        </div>

        <button onClick={handleReset}
          className="btn secondary"
          // 15. Connect this button to handleReset using onClick
        >
          Reset Tracker
        </button>

        <button onClick={handleSchoolMode}
          className="btn secondary"
          // 16. Connect this button to handleSchoolMode using onClick
        >
          Toggle School Mode
        </button>

        {/* 17. Add this after the colon: schoolMode ? "School Mode: ON" : "School Mode: OFF" */}
        <p className="mode">Current Mode: {schoolMode ? "School Mode: ON" : "School Mode: OFF"} </p>

        {/* 18. Submit! (git add . git commit -m 'done' git push) */}
      </section>
    </div>
  );
}

export default App;

useEffect(() => {
    if (weather === "Rainy") {
      alert("Grab an umbrella!");
    } else if (weather === "Snowy") {
      alert("Wear a coat and stay warm!");
    } else if (weather === "Hot") {
      alert("Stay hydrated!");
    } else if (weather === "Sunny") {
      alert("Enjoy the sunshine!");
    }
  }, [weather]);

  return (
    <div className="page">
      <div className="card">
        <h1>Weather Warning App</h1>
        <p className="subtitle">
          Practice using useEffect with weather changes.
        </p>

        <div className="weather-box">
          <h2>Current Weather</h2>

          {/* 9. Display weather here */}
          <p className="output">Weather: {weather}</p>

          <button
            className="btn"
            // 10. connect to handleRainy
            onClick={handleRainy}
          >
            Rainy 🌧️
          </button>

          <button
            className="btn"
            // 11. connect to handleSnowy
            onClick={handleSnowy}
          >
            Snowy ❄️
          </button>

          <button
            className="btn"
            // 12. connect to handleHot
            onClick={handleHot}
          >
            Hot ☀️
          </button>

          <button
            className="btn secondary"
            // 13. connect to handleReset
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;