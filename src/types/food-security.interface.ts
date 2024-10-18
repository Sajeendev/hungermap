import { Country } from './country.interface';

interface Metric {
  people: number;
  prevalence: number;
}

interface Metrics {
  fcs: Metric;
  rcsi: Metric;
  healthAccess: Metric;
  marketAccess: Metric;
}

export interface FoodSecurity {
  country: Country;
  date: string;
  dataType: string;
  metrics: Metrics;
}

export interface FoodSecurityResponse {
  statusCode: string;
  body: FoodSecurity;
}
