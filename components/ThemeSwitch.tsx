"use client"

import { BsMoon, BsSun } from "react-icons/bs";

import { useTheme } from "@/context/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <button className="btn-theme" onClick={toggleTheme}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  )
}
