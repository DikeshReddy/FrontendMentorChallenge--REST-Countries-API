import { create } from "zustand";

const toCap = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export interface homeSectionStoreType {
  region:
    | "Africa"
    | "Americas"
    | "Asia"
    | "Europe"
    | "Oceania"
    | "Filter by Region";
  searchKey: string;
  setRegion: (region: homeSectionStoreType["region"]) => void;
  setSearchKey: (key: string) => void;
  filterCountries: (
    region: homeSectionStoreType["region"],
    searchKey: string,
  ) => Promise<any>;
  getCountryDetails: (country: string | undefined) => Promise<any>;
}

export const homeSectionStore = create<homeSectionStoreType>()((set) => ({
  region: "Filter by Region",
  searchKey: "",
  setRegion: (region: homeSectionStoreType["region"]) =>
    set((state) => ({ ...state, region: region })),
  setSearchKey: (key: string) =>
    set((state) => {
      const country = toCap(key);
      return { ...state, searchKey: country };
    }),
  filterCountries: async (
    region: homeSectionStoreType["region"],
    searchKey: string,
  ) => {
    const rawData = await fetch("./data/data.json");
    const data = await rawData.json();

    if (region === "Filter by Region") {
      if (searchKey.length === 0) {
        return data;
      } else {
        const filteredCountries = data.filter(
          (country: any) => country.name.indexOf(searchKey) !== -1,
        );
        return filteredCountries;
      }
    } else {
      const reginalCountries = data.filter(
        (country: any) => country.region === region,
      );
      if (searchKey.length === 0) {
        return reginalCountries;
      } else {
        const filteredCountries = reginalCountries.filter(
          (country: any) => country.name.indexOf(searchKey) !== -1,
        );
        return filteredCountries;
      }
    }
  },

  getCountryDetails: async (countryName: string | undefined) => {
    const rawData = await fetch("./data/data.json");
    const data = await rawData.json();
    let BorderCountries;
    const filteredCountry = await data.filter(
      (country: any) => country.name === countryName,
    );

    console.log(filteredCountry[0]);

    if (filteredCountry[0].borders) {
      BorderCountries = filteredCountry[0].borders
        .map((border: any) =>
          data.filter((country: any) => country.alpha3Code === border),
        )
        .map((array: any) => {
          return array[0].name;
        });
    }

    return [filteredCountry, BorderCountries];
  },
}));
