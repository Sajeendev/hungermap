import { Country } from './country.interface';

interface Population {
  number: number;
  year: string | number;
  source: string;
}

interface IncomeGroup {
  level: string;
}

interface CountryInfo {
  country: Country;
  population: Population;
  chronic_hunger: string | null;
  malnutrition: string | null;
  income_group: IncomeGroup;
}

export interface CoreData {
  countries: CountryInfo[];
}

export interface CoreDataResponse {
  statusCode: string;
  body: CoreData;
}
