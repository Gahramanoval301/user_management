import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext.jsx/themeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Button } from "@mui/material";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Button
        onClick={toggleTheme}
        sx={{
          backgroundColor: theme == "dark" ? "#000" : "#fff",
          color: theme == "dark" ? "#fff" : "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border:"1px solid"
        }}
      >
        {theme == "dark" ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}{" "}
      </Button>
    </>
  );
};

export default ThemeToggle;
