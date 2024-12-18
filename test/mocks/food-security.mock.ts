import { FoodSecurity } from '@/types';

export const foodSecurityMockData: FoodSecurity = {
  country: {
    id: 1,
    name: 'Afghanistan',
    iso3: 'AFG',
    iso2: 'AF'
  },
  date: '2024-09-14',
  dataType: 'PREDICTION',
  metrics: {
    fcs: {
      people: 23075100,
      prevalence: 0.5709982309895716
    },
    rcsi: {
      people: 21421508,
      prevalence: 0.5300797471356119
    },
    healthAccess: {
      people: 14447720,
      prevalence: 0.4366182455516695
    },
    marketAccess: {
      people: 10547102,
      prevalence: 0.26099027020756455
    }
  }
};
