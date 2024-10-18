import { Country } from './country.interface';

interface Population {
  number: number;
  year: string;
  source: string;
}

interface IncomeGroup {
  level: string;
}

export interface CountryInfo {
  country: Country;
  population: Population;
  chronic_hunger: number;
  malnutrition: number;
  income_group: IncomeGroup;
}

export interface CountryInfoResponse {
  statusCode: string;
  body: {
    countries: CountryInfo[];
  };
}
