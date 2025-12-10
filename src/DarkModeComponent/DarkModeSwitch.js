import React, { useState } from "react";
import useDark from "./useDark"; 
import { Button } from "react-bootstrap";

export default function DarkModeSwitch() {
  const [colorTheme, setTheme] = useDark();
    const [isOnDarkMode, setIsOnDarkMode] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setIsOnDarkMode(checked);
    };

    return (
        <Button 
        variant="outline-secondary" 
        onClick={() => toggleDarkMode(!isOnDarkMode)}
        className="ms-2 rounded-circle"
        style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',backgroundColor:"transparent",border:0,fontSize:25 }}
      >
        {isOnDarkMode ? '☀️' : '🌙'}
        
      </Button>  
      
    );
}
