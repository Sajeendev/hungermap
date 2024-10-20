import { Hazard } from '@/types';

export const getHazardSummary = (data: Hazard[]) => {
  return data.reduce(
    (acc, hazard) => {
      const type = hazard.type;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
};
