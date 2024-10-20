import { Country } from './country.interface';

interface Population {
  number: number;
  year: string | number;
  source: string;
}

interface IncomeGroup {
  level: string;
}

interface Malnutrition {
  acute_percent: number;
  chronic_percent: number;
  year: string | number;
  source: string;
}

export interface CountryInfo {
  country: Country;
  population: Population;
  chronic_hunger: string | null;
  malnutrition: Malnutrition | null;
  income_group: IncomeGroup;
}

export interface CoreData {
  countries: CountryInfo[];
}

export interface CoreDataResponse {
  statusCode: string;
  body: CoreData;
}
