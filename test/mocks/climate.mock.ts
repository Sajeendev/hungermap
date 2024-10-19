import { ClimateData } from '@/types';

export const climateMockData: ClimateData = {
  countries: [
    {
      country: {
        id: 1,
        name: 'Afghanistan',
        iso3: 'AFG',
        iso2: 'AF'
      },
      dataPoints: [
        {
          dekadStart: '2024-10-01',
          inSeason: false,
          rainfall: {
            peopleDry: 0,
            peopleWet: 0,
            peopleAnomaly: 0,
            prevalenceDry: 0.0,
            prevalenceWet: 0.0,
            prevalenceAnomaly: 0.0
          },
          ndvi: {
            peopleDry: 0,
            peopleAnomaly: 0,
            prevalenceDry: 0.0,
            prevalenceAnomaly: 0.0
          },
          overall: {
            peopleDry: 0,
            peopleWet: 0,
            peopleAnomaly: 0,
            prevalenceDry: 0.0,
            prevalenceWet: 0.0,
            prevalenceAnomaly: 0.0
          }
        }
      ]
    },
    {
      country: {
        id: 8,
        name: 'Angola',
        iso3: 'AGO',
        iso2: 'AO'
      },
      dataPoints: [
        {
          dekadStart: '2024-10-01',
          inSeason: true,
          rainfall: {
            peopleDry: 7670735,
            peopleWet: 0,
            peopleAnomaly: 7670735,
            prevalenceDry: 0.225,
            prevalenceWet: 0.0,
            prevalenceAnomaly: 0.225
          },
          ndvi: {
            peopleDry: 3282968,
            peopleAnomaly: 3282968,
            prevalenceDry: 0.0963,
            prevalenceAnomaly: 0.0963
          },
          overall: {
            peopleDry: 10953703,
            peopleWet: 0,
            peopleAnomaly: 10953703,
            prevalenceDry: 0.3213,
            prevalenceWet: 0.0,
            prevalenceAnomaly: 0.3213
          }
        }
      ]
    }
  ]
};
