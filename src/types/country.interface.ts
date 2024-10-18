export interface CountryInterface {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
}

export interface PopulationInterface {
  number: number;
  year: string;
  source: string;
}

export interface IncomeGroupInterface {
  level: string;
}

export interface CountryInfoInterface {
  country: CountryInterface;
  population: PopulationInterface;
  chronic_hunger: number;
  malnutrition: number;
  income_group: IncomeGroupInterface;
}
