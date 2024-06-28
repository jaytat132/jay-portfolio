"use client";
import { HexColorPicker } from "react-colorful";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";

const PrimarySelector = ({ value, onChange }) => {
  const [color, setColor] = useState(value);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    setColor(value);
  }, [value]);

  const handleButtonClick = () => {
    setShowPicker((prev) => !prev); // Toggle based on previous state
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="relative">
      <Button variant="default" size="default" onClick={handleButtonClick}>
        Select Primary Color
      </Button>
      {showPicker && (
        <div className="absolute mt-2 z-10">
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default PrimarySelector;
