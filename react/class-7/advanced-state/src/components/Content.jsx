/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-6 text-center ${
        theme === "light" ? `bg-gray-100 text-black` : `bg-gray-800 text-white`
      }
    }`}
    >
      <p>
        The current theme is <b>{theme}</b> mode.
      </p>
    </div>
  );
};

export default Content;
