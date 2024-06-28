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

const ThemeSelectorMobile = () => {
  const [theme, setTheme] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("theme") || "Default" : "Default"
  );
  const [customPrimary, setCustomPrimary] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("customPrimary") || "#000000" : "#000000"
  );
  const [customAccent, setCustomAccent] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("customAccent") || "#ffffff" : "#ffffff"
  );
  const [previousPrimary, setPreviousPrimary] = useState("#000000");
  const [previousAccent, setPreviousAccent] = useState("#ffffff");

  useEffect(() => {
    const applyTheme = (theme, customPrimary, customAccent) => {
      let primaryColor, accentColor, accentHoverColor;

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
          accentHoverColor = customAccent;
          break;
        default:
          primaryColor = "#1c1c22";
          accentColor = "#42342B";
          accentHoverColor = "#8A9A5B";
          break;
      }

      document.documentElement.style.setProperty("--primary-color", primaryColor);
      document.documentElement.style.setProperty("--accent-color", accentColor);
      document.documentElement.style.setProperty("--accent-hover-color", accentHoverColor);

      if (typeof window !== "undefined") {
        localStorage.setItem("theme", theme);
        localStorage.setItem("customPrimary", customPrimary);
        localStorage.setItem("customAccent", customAccent);
        localStorage.setItem("previousPrimary", previousPrimary);
        localStorage.setItem("previousAccent", previousAccent);
      }
    };

    applyTheme(theme, customPrimary, customAccent);
  }, [theme, customPrimary, customAccent, previousPrimary, previousAccent]);

  useEffect(() => {
    if (theme !== "Custom") {
      const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
      const accentColor = getComputedStyle(document.documentElement).getPropertyValue("--accent-color");
      setPreviousPrimary(primaryColor);
      setPreviousAccent(accentColor);
    }
  }, [theme]);

  const handleThemeChange = (value) => {
    if (value === "Custom") {
      setCustomPrimary(previousPrimary);
      setCustomAccent(previousAccent);
    }
    setTheme(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
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
        <div className="flex flex-col items-center space-y-4">
          <PrimarySelector value={customPrimary} onChange={setCustomPrimary} />
          <AccentSelector value={customAccent} onChange={setCustomAccent} />
        </div>
      )}
    </div>
  );
};

export default ThemeSelectorMobile;
