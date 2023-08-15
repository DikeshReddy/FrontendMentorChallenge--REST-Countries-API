import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Mode } from "../../store/useDarkMode";

export const Header = (): JSX.Element => {
  const { darkMode, toggleDarkMode } = Mode();
  const html = document.documentElement;
  const clickHandler = (): void => {
    toggleDarkMode();
  };
  darkMode ? html.classList.add("dark") : html.classList.remove("dark");

  return (
    <header className=" flex w-full items-center justify-between bg-white-100 px-[min(10%,80px)] py-[30px] shadow-lg  dark:bg-blue-100">
      <Link to={"/"}>
        <p className="logo text-[1rem] font-extrabold text-blue-300 dark:text-white-100 lg:text-[1.5rem]">
          Where in the world?
        </p>
      </Link>
      <div
        className="dark-mode-toggle flex cursor-pointer items-center gap-[10px]"
        onClick={clickHandler}
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />
        ) : (
          <FontAwesomeIcon icon={faMoon} style={{ color: "#000000" }} />
        )}
        {darkMode ? (
          <p className="light-mode font-bold text-blue-300 dark:text-white-100">
            Light Mode
          </p>
        ) : (
          <p className="dark-mode font-bold text-blue-300 dark:text-white-100">
            Dark Mode
          </p>
        )}
      </div>
    </header>
  );
};
