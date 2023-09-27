"use client";

import style from "@/Styles/ThemeButton.module.css";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const ThemeButton = () => {
  const [theme, setTheme] = useState(
    (typeof window !== "undefined" && localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    theme === "light"
      ? document.body.classList.remove("darkTheme")
      : document.body.classList.add("darkTheme");
  }, [theme]);

  const toggleBtn = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className={style.container}>
      <label htmlFor="themeBtn">
        <input
          type="checkbox"
          name="themeBtnName"
          id="themeBtn"
          className={style.checkBox}
          checked={theme === "dark"}
          onChange={() => toggleBtn()}
        />
        <span className={style.btn_ball}>
          <BsFillSunFill className={style.icons} />
          <BsFillMoonFill className={style.icons} />
        </span>
      </label>
    </div>
  );
};

export default ThemeButton;
