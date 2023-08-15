import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { homeSectionStore } from "../../store/home-section-store";
import { Link } from "react-router-dom";
import { Mode } from "../../store/useDarkMode";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DetailSection = () => {
  const { darkMode } = Mode();
  const { country } = useParams();
  const { getCountryDetails, setSearchKey } = homeSectionStore();
  let details: any;
  let border;
  const countryDetails = useQuery({
    queryKey: ["country-details", country],
    queryFn: () => getCountryDetails(country),
  });

  if (countryDetails.status === "success") {
    const [filteredCountry, BorderCountries] = countryDetails.data;
    details = filteredCountry[0];
    border = BorderCountries;
  }

  if (countryDetails.isLoading) {
    return <div>Loading...</div>;
  }

  if (countryDetails.isError) {
    return <div>Error occurred while fetching data</div>;
  }

  const clickHandler = () => {
    setSearchKey("");
  };

  return (
    <main className="details-section mx-auto flex w-[80%] flex-col gap-[56px] py-[80px]  dark:bg-blue-200 dark:text-white-100">
      <Link to={"/"}>
        <button
          onClick={clickHandler}
          className="back-button flex items-center gap-[20px] rounded-[5px] bg-white-100 px-[50px] py-[20px] shadow-lg dark:bg-blue-100 dark:text-white-100"
        >
          {darkMode ? (
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} />
          ) : (
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
          <span className="text-[1.25rem]">Back</span>
        </button>
      </Link>
      {details && (
        <section className="details flex grid-cols-2 flex-col gap-[100px] lg:grid lg:items-center lg:gap-[144pxpx] ">
          <img
            className="flag col-span-1 col-start-1 object-contain"
            src={details.flag}
            alt=""
          />
          <div className="text col-start-2 flex  flex-col gap-[60px] lg:grid lg:gap-[74px]">
            <p className="name col-span-2 text-[1.5rem] font-extrabold">
              {details.name}
            </p>
            <div className="primary-info row-span-1 row-start-2">
              <p className="native-name">
                <span className="font-bold">Native Name: </span>
                {details.nativeName}
              </p>
              <p className="population">
                <span className="font-bold">Population: </span>
                {details.population.toLocaleString("en-US")}
              </p>
              <p className="region">
                <span className="font-bold">Region: </span>
                {details.region}
              </p>
              <p className="sub-region">
                <span className="font-bold">Sub Region: </span>
                {details.subregion}
              </p>
              <p className="capital">
                <span className="font-bold">Capital: </span>
                {details.capital}
              </p>
            </div>
            <div className="secondary-info row-span-1 row-start-2">
              <p className="top-level-domain">
                <span className="font-bold">Top level Domain: </span>
                {details.topLevelDomain[0]}
              </p>
              <p className="currencies">
                <span className="font-bold">Currencies: </span>
                {details.currencies[0].name}
              </p>
              <p className="languages">
                <span className="font-bold">Languages: </span>
                {details.languages.map((language: any, index: number) => (
                  <span key={index}>
                    {language.name}
                    {index < details.languages.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
            <div className="border-countries col-span-2 row-start-3 flex flex-col gap-[14px]  lg:flex-row ">
              {border && (
                <>
                  <p className="grow pt-[4px] text-[1.25rem] font-bold lg:w-[40%]">
                    Border Countries:
                  </p>
                  <div className=" flex flex-wrap gap-[20px]">
                    {border.map((country: any) => (
                      <span
                        key={country}
                        className="flex justify-center rounded-[5px] px-[27px] py-[8px] shadow-lg dark:bg-blue-100"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};
