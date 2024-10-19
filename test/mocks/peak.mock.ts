import { IpcPeakData } from '@/types';

export const peakMockData: IpcPeakData = {
  year: 2024,
  ipc_peaks: [
    {
      iso3: 'AFG',
      country_name: 'Afghanistan',
      analysis_type: 'projection_1',
      analysis_date: '2023-10-21',
      analysis_period_from: '2023-11-01',
      analysis_period_to: '2024-03-31',
      analyzed_population_number: 44532600.0,
      phase_3_number: 12253597.0,
      phase_3_percent: 0.28,
      phase_4_number: 3570083.0,
      phase_4_percent: 0.08,
      phase_5_number: 0.0,
      phase_5_percent: 0.0,
      phase_3_plus_number: 15823679.0,
      phase_4_plus_number: 3570083.0,
      source: 'IPC Oct 23, first projection, Nov-Mar 24'
    },
    {
      iso3: 'AGO',
      country_name: 'Angola',
      analysis_type: 'projection_1',
      analysis_date: '2021-06-01',
      analysis_period_from: '2021-10-01',
      analysis_period_to: '2022-03-31',
      analyzed_population_number: 2750124.0,
      phase_3_number: 1167337.0,
      phase_3_percent: 0.42,
      phase_4_number: 416660.0,
      phase_4_percent: 0.15,
      phase_5_number: 0.0,
      phase_5_percent: 0.0,
      phase_3_plus_number: 1583996.0,
      phase_4_plus_number: 416660.0,
      source: 'IPC Jun 21, first projection, Oct-Mar 22'
    }
  ]
};
