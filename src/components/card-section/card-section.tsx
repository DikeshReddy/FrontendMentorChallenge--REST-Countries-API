import { useQuery } from "react-query";
import { homeSectionStore } from "../../store/home-section-store";
import { Card } from "../card/card";

export const CardSection = () => {
  const { region, searchKey, filterCountries } = homeSectionStore();

  const countryList = useQuery({
    queryKey: ["countries", region, searchKey],
    queryFn: () => filterCountries(region, searchKey),
  });

  return (
    <>
      {countryList.status === "success" && (
        <section className="card-section flex flex-col flex-wrap gap-[48px] md:flex-row ">
          {countryList.data.map((country: any) => (
            <Card
              imageUrl={country.flag}
              capital={country.capital}
              name={country.name}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              key={country.name}
            />
          ))}
        </section>
      )}
    </>
  );
};
