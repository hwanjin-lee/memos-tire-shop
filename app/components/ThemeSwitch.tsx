"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons/faMoon";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeSwitch.module.css";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [toggle, setToggle] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleSelector = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const setThemeAndCloseToggle = (theme: string) => {
    if (theme === "light") {
      setTheme("light");
    } else if (theme === "dark") {
      setTheme("dark");
    } else if (theme === "system") {
      setTheme("system");
    }
    setToggle(false);
  };

  console.log(theme, "hello");

  return (
    <div className={styles.container}>
      <div onClick={() => toggleSelector()} className={styles.themeIcon}>
        {theme === "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </div>
      {toggle ? (
        <div className={styles.themeSelector}>
          <div onClick={() => setThemeAndCloseToggle("light")}>
            <div className={styles.selection}>
              <FontAwesomeIcon icon={faSun} className={styles.selectorIcon} />
              <div>Light</div>
            </div>
          </div>
          <div onClick={() => setThemeAndCloseToggle("dark")}>
            <div className={styles.selection}>
              <FontAwesomeIcon icon={faMoon} className={styles.selectorIcon} />
              <div>Dark</div>
            </div>
          </div>
          <div onClick={() => setThemeAndCloseToggle("system")}>
            {" "}
            <div className={styles.selection}>
              <FontAwesomeIcon
                icon={faDesktop}
                className={styles.selectorIcon}
              />
              <div>System</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}
    </div>
  );
};

export default ThemeSwitch;
