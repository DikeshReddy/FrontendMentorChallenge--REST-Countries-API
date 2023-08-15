import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mode } from "../../store/useDarkMode";
import { homeSectionStore } from "../../store/home-section-store";
import { Regionpicker } from "../region-picker/region-picker";
import { CardSection } from "../card-section/card-section";

export const HomeSection = () => {
  const { darkMode } = Mode();
  const { setSearchKey } = homeSectionStore();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(event.target.value);
  };

  return (
    <main className="home-section flex flex-col items-center gap-[50px] bg-gray-200 px-[10%] py-[30px] dark:bg-blue-200">
      <nav className="flex w-[80vw] flex-col gap-[50px] lg:flex-row lg:justify-between">
        <div className="search flex w-[min(80vw,480px)]  items-center gap-[33px] rounded-[5px] bg-white-100  px-[40px] py-[20px] shadow-lg dark:bg-blue-100 ">
          {darkMode ? (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#ffffff" }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#5e5c64" }}
            />
          )}
          <input
            className="search-input font-bold dark:bg-blue-100 dark:text-white-100"
            type="text"
            placeholder="Search for a country..."
            onChange={inputHandler}
          />
        </div>
        <Regionpicker></Regionpicker>
      </nav>
      <CardSection></CardSection>
    </main>
  );
};
