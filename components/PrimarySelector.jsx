"use client";
import { HexColorPicker } from "react-colorful";
import React, { useState } from "react";
import { Button } from "./ui/button";

const PrimarySelector = ({ value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleButtonClick = () => {
    setShowPicker((prev) => !prev); // Toggle based on previous state
  };

  const handleColorChange = (newColor) => {
    onChange(newColor);
  };

  return (
    <div className="relative">
      <Button variant="default" size="default" onClick={handleButtonClick}>
        Select Primary Color
      </Button>
      {showPicker && (
        <div className="absolute mt-2 z-10">
          <HexColorPicker color={value} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default PrimarySelector;
