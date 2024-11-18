/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
// import { MdOutlineLightMode } from "react-icons/md";
// import { MdLightMode } from "react-icons/md";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
const ThemeButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <button
        onClick={toggleTheme}
        className={`px-[20px] py-[10px] mt-4 text-[50px ${
          theme === "light"
            ? `bg-blue-500 text-white`
            : `bg-gray-500 text-gray-200`
        }]`}
      >
        {/* {theme === "light" ? <MdOutlineLightMode /> : <MdLightMode />} */}
        {theme === "light" ? <MdDarkMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
};

export default ThemeButton;
