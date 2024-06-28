"use client";

import { HexColorPicker } from "react-colorful";
import React, { useState } from "react";
import { Button } from "./ui/button";

const AccentSelector = ({ value, onChange }) => {
  const [color, setColor] = useState(value);
  const [showPicker, setShowPicker] = useState(false);

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    onChange(newColor);
  };

  return (
    <div className="relative">
      <Button
        variant="default"
        size="default"
        onClick={handleButtonClick}
        style={{ backgroundColor: color }}
      >
        Select Accent Color
      </Button>
      {showPicker && (
        <div className="absolute mt-2 z-10">
          <HexColorPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default AccentSelector;
