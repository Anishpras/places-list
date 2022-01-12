import { countryData } from './data';

export const getCities = (country: string, state: string) => {
  console.log(country, state);
};

export const getCountriesName = () => {
  return countryData;
};
