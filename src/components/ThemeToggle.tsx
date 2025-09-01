import React from "react";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";

export function ThemeToggle() {
  return (
    <ThemeToggleButton 
      showLabel={false}
      variant="circle-blur" 
      start="bottom-left"
    />
  );
}
