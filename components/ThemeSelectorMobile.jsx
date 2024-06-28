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
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "Default" : "Default"
  );
  const [customPrimary, setCustomPrimary] = useState(
    typeof window !== "undefined" ? localStorage.getItem("customPrimary") || "#000000" : "#000000"
  );
  const [customAccent, setCustomAccent] = useState(
    typeof window !== "undefined" ? localStorage.getItem("customAccent") || "#ffffff" : "#ffffff"
  );

  useEffect(() => {
    if (theme === "Blue and Pink") {
      document.documentElement.style.setProperty("--primary-color", "#2F3C7E");
      document.documentElement.style.setProperty("--accent-color", "#FBEAEB");
      document.documentElement.style.setProperty(
        "--accent-hover-color",
        "#A3B3E6"
      );
    } else if (theme === "Black and Yellow") {
      document.documentElement.style.setProperty("--primary-color", "#101820");
      document.documentElement.style.setProperty("--accent-color", "#FEE715");
      document.documentElement.style.setProperty(
        "--accent-hover-color",
        "#FFD700"
      );
    } else if (theme === "Dark Blue and Light Blue") {
      document.documentElement.style.setProperty("--primary-color", "#00246B");
      document.documentElement.style.setProperty("--accent-color", "#CADCFC");
      document.documentElement.style.setProperty(
        "--accent-hover-color",
        "#4361EE"
      );
    } else if (theme === "Custom") {
      document.documentElement.style.setProperty("--primary-color", customPrimary);
      document.documentElement.style.setProperty("--accent-color", customAccent);
      document.documentElement.style.setProperty(
        "--accent-hover-color",
        customAccent // Adjust this as needed
      );
      localStorage.setItem("customPrimary", customPrimary);
      localStorage.setItem("customAccent", customAccent);
    } else {
      document.documentElement.style.setProperty("--primary-color", "#1c1c22");
      document.documentElement.style.setProperty("--accent-color", "#42342B");
      document.documentElement.style.setProperty(
        "--accent-hover-color",
        "#8A9A5B"
      );
    }
    localStorage.setItem("theme", theme);
  }, [theme, customPrimary, customAccent]);

  const handleThemeChange = (value) => {
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
            <SelectItem value="Dark Blue and Light Blue">Dark Blue and Light Blue</SelectItem>
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
