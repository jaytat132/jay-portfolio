"use client";

import { HexColorPicker } from "react-colorful";
import React, { useState } from "react";
import { Button } from "./ui/button";

const AccentSelector = ({ value, onChange }) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleButtonClick = () => {
    setShowPicker(!showPicker);
  };

  const handleColorChange = (newColor) => {
    onChange(newColor);
  };

  return (
    <div className="relative">
      <Button
        variant="default"
        size="default"
        onClick={handleButtonClick}
        style={{ backgroundColor: value }}
      >
        Select Accent Color
      </Button>
      {showPicker && (
        <div className="absolute mt-2 z-10">
          <HexColorPicker color={value} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default AccentSelector;
