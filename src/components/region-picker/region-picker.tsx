import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { homeSectionStore } from "../../store/home-section-store";
import { Mode } from "../../store/useDarkMode";
import { useState } from "react";
import { twMerge as tm } from "tailwind-merge";
import { homeSectionStoreType } from "../../store/home-section-store";

export const Regionpicker = () => {
  const { darkMode } = Mode();
  const { region, setRegion } = homeSectionStore();
  const [expand, setExpand] = useState<boolean>(false);

  const menuClickHandler = () => {
    setExpand(!expand);
  };

  const regionHandler = (region: homeSectionStoreType["region"]) => {
    setRegion(region);
  };

  return (
    <div
      onClick={menuClickHandler}
      className="region-picker relative flex w-[248px] cursor-pointer items-center justify-between self-start rounded-[5px] bg-white-100 px-[24px]  py-[30px] font-bold shadow-lg dark:bg-blue-100 dark:text-white-100"
    >
      <p>{region}</p>
      {darkMode ? (
        <FontAwesomeIcon icon={faAngleDown} style={{ color: "#ffffff" }} />
      ) : (
        <FontAwesomeIcon icon={faAngleDown} />
      )}
      <div
        className={tm(
          "regions absolute left-0 top-[110%] hidden  w-[100%] flex-col gap-[20px] rounded-[5px] bg-white-100 p-[24px] shadow-lg dark:bg-blue-100",
          expand && "flex",
        )}
      >
        <p onClick={() => regionHandler("Africa")}>Africa</p>
        <p onClick={() => regionHandler("Americas")}>Americas</p>
        <p onClick={() => regionHandler("Asia")}>Asia</p>
        <p onClick={() => regionHandler("Europe")}>Europe</p>
        <p onClick={() => regionHandler("Oceania")}>Oceania</p>
      </div>
    </div>
  );
};
