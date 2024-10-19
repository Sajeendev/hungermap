import { HazardData } from '@/types';

export const hazardMockData: HazardData = {
  hazards: [
    {
      severity: 'WARNING',
      type: 'HIGHWIND',
      name: 'High Wind - Arviat, Nunavut, Canada',
      latitude: 61.09,
      longitude: -94.18,
      created: '2024-10-03 06:21:21',
      lastUpdate: '2024-10-03 06:21:29'
    },
    {
      severity: 'WARNING',
      type: 'VOLCANO',
      name: 'Volcano - Manam, Papua New Guinea',
      latitude: -4.08,
      longitude: 145.037,
      created: '2024-09-28 14:17:20',
      lastUpdate: '2024-10-03 06:01:13'
    }
  ]
};
