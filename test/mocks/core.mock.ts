import { CoreData } from '@/types';

export const coreMockData: CoreData = {
  countries: [
    {
      country: {
        id: 14,
        name: 'Aruba',
        iso3: 'ABW',
        iso2: 'AW'
      },
      population: {
        number: 105845,
        year: '2018',
        source: 'World Bank'
      },
      chronic_hunger: null,
      malnutrition: null,
      income_group: {
        level: 'HIGH'
      }
    },
    {
      country: {
        id: 1,
        name: 'Afghanistan',
        iso3: 'AFG',
        iso2: 'AF'
      },
      population: {
        number: 40411859,
        year: 2021,
        source: 'Flowminder'
      },
      chronic_hunger: null,
      malnutrition: null,
      income_group: {
        level: 'LOW'
      }
    }
  ]
};
