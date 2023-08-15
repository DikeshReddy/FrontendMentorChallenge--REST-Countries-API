import { Link } from "react-router-dom";

export type CardPropsType = {
  imageUrl: string;
  name: string;
  region: string;
  capital: string;
  population: number;
};

export const Card = ({
  imageUrl,
  name,
  region,
  capital,
  population,
}: CardPropsType) => {
  return (
    <Link
      to={`./${name}`}
      className="country-card flex w-[328px] cursor-pointer flex-col  overflow-hidden rounded-[5px] bg-white-100  shadow-lg   dark:bg-blue-100 dark:text-white-100 lg:w-[250px]"
    >
      <img src={imageUrl} className="h-[160px] object-cover" alt="" />
      <div className="details flex flex-col p-[36px]">
        <h2 className="country-name mb-[36px] text-[1.25rem] font-extrabold">
          {name}
        </h2>
        <div className="sub-details flex flex-col gap-[12px]">
          <p className="population">
            <span className="font-bold">Population: </span>
            {population}
          </p>
          <p className="region">
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p className="capital">
            <span className="font-bold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};
