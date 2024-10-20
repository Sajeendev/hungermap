import { Country } from './country.interface';

interface Rainfall {
  peopleDry: number;
  peopleWet: number;
  peopleAnomaly: number;
  prevalenceDry: number;
  prevalenceWet: number;
  prevalenceAnomaly: number;
}

interface Ndvi {
  peopleDry: number;
  peopleAnomaly: number;
  prevalenceDry: number;
  prevalenceAnomaly: number;
}

export interface ClimateOverallStat {
  peopleDry: number;
  peopleWet: number;
  peopleAnomaly: number;
  prevalenceDry: number;
  prevalenceWet: number;
  prevalenceAnomaly: number;
}

interface DataPoint {
  dekadStart: string;
  inSeason: boolean;
  rainfall: Rainfall;
  ndvi: Ndvi;
  overall: ClimateOverallStat;
}

export interface ClimateInfo {
  country: Country;
  dataPoints: DataPoint[];
}

export interface ClimateData {
  countries: ClimateInfo[];
}

export interface ClimateDataResponse {
  statusCode: string;
  body: ClimateData;
}
