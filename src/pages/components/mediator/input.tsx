import { InputProps } from "@/types/temperature";
import React, { ChangeEvent } from "react";

/*
As defined in types.ts:
export interface InputProps<T> {
    label: string;
    value: T;
    onValueChange: (v: T) => void;
}
*/

const Input = ({ label, value, onValueChange }: InputProps<number>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value)); // Convert string to number
  };

  return (
    <div>
      <label>
        {label}
        <input type="number" value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Input;
