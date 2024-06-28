"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PrimarySelector from "./PrimarySelector";
import AccentSelector from "./AccentSelector";

const ThemeSelector = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || "Default");
  const [customPrimary, setCustomPrimary] = useState(() => localStorage.getItem('customPrimary') || "#000000");
  const [customAccent, setCustomAccent] = useState(() => localStorage.getItem('customAccent') || "#ffffff");
  const [previousPrimary, setPreviousPrimary] = useState("#000000");
  const [previousAccent, setPreviousAccent] = useState("#ffffff");

  useEffect(() => {
    // Apply the theme settings to the document
    let primaryColor = "#1c1c22";
    let accentColor = "#42342B";
    let accentHoverColor = "#8A9A5B";

    switch (theme) {
      case "Blue and Pink":
        primaryColor = "#2F3C7E";
        accentColor = "#FBEAEB";
        accentHoverColor = "#A3B3E6";
        break;
      case "Black and Yellow":
        primaryColor = "#101820";
        accentColor = "#FEE715";
        accentHoverColor = "#FFD700";
        break;
      case "Dark and Light Blue":
        primaryColor = "#00246B";
        accentColor = "#CADCFC";
        accentHoverColor = "#4361EE";
        break;
      case "Custom":
        primaryColor = customPrimary;
        accentColor = customAccent;
        accentHoverColor = customAccent; // Or another custom hover color if needed
        break;
    }

    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty("--accent-color", accentColor);
    document.documentElement.style.setProperty("--accent-hover-color", accentHoverColor);

    if (theme !== "Custom") {
      setPreviousPrimary(primaryColor);
      setPreviousAccent(accentColor);
    }
  }, [theme, customPrimary, customAccent]);

  useEffect(() => {
    // Save theme to local storage
    localStorage.setItem('theme', theme);
    localStorage.setItem('customPrimary', customPrimary);
    localStorage.setItem('customAccent', customAccent);
  }, [theme, customPrimary, customAccent]);

  const handleThemeChange = (value) => {
    if (value === "Custom") {
      setCustomPrimary(previousPrimary);
      setCustomAccent(previousAccent);
    }
    setTheme(value);
  };

  return (
    <div className="flex items-center space-x-4">
      <Select onValueChange={handleThemeChange} value={theme}>
        <SelectTrigger className="inline-flex items-center">
          <SelectValue>{theme}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Default">Default</SelectItem>
            <SelectItem value="Blue and Pink">Blue and Pink</SelectItem>
            <SelectItem value="Black and Yellow">Black and Yellow</SelectItem>
            <SelectItem value="Dark and Light Blue">Dark and Light Blue</SelectItem>
            <SelectItem value="Custom">Custom</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {theme === "Custom" && (
        <div className="flex items-center space-x-4">
          <PrimarySelector value={customPrimary} onChange={setCustomPrimary} />
          <AccentSelector value={customAccent} onChange={setCustomAccent} />
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
