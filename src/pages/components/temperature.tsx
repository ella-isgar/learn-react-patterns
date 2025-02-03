import React, { useState, ChangeEvent } from "react";

const TemperatureConverter = () => {
  // We define state here:
  const [temperature, setTemperature] = useState<number>(0); // State is managed within this component

  // Event handler with the correct type for ChangeEvent
  const handleTemperatureChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTemperature(Number(e.target.value)); // Convert string to number
  };

  const temperatureInFahrenheit = ((temperature * 9) / 5 + 32).toFixed(2);

  // Goal is to reduce the size of this component.
  // Divide this component into 2 components.
  // 1 for taking in inputs and 1 for displaying the new temperature.
  // In order to do this, both of these new, smaller components will
  // need access to this parent state.
  return (
    <div>
      <label>
        Enter temperature in Celsius:
        <input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
        />
      </label>
      <h2>Temperature in Fahrenheit: {temperatureInFahrenheit}</h2>
    </div>
  );
};

export default TemperatureConverter;
