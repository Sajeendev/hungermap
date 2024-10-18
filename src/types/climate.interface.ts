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

interface Overall {
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
  overall: Overall;
}

export interface ClimateInfo {
  country: Country;
  dataPoints: DataPoint[];
}

export interface ClimateDataResponse {
  statusCode: string;
  body: {
    countries: ClimateInfo[];
  };
}
