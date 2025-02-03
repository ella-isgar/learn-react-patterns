import React, { useState } from "react";
import Input from "./input";
import Display from "./display";

const toFahrenheit = (celsius: number) => ((celsius * 9) / 5 + 32).toFixed(2);

// Parent Component
const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState<number>(0); // State is lifted to the parent

  const handleTemperatureChange = (newTemperature: number) => {
    setTemperature(newTemperature); // Update the temperature state
  };

  return (
    <div>
      <Input
        label={"Enter temperature in Celsius:"}
        value={temperature}
        onValueChange={handleTemperatureChange}
      />
      <Display
        label={"Temperature in Fahrenheit"}
        value={temperature}
        getValue={toFahrenheit}
      />
    </div>
  );
};

export default TemperatureConverter;
