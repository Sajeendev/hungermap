import { CoreData, NutritionSummary } from '@/types';

export const getNutritionSummaryByYear = (data: CoreData) => {
  return data.countries.reduce(
    (acc, item) => {
      const populationYear = String(item.population.year);
      const malnutritionYear = item.malnutrition
        ? String(item.malnutrition.year)
        : null;

      if (!acc[populationYear]) {
        acc[populationYear] = {
          totalCountries: 0,
          totalPopulation: 0,
          totalAcuteMalnutrition: 0,
          totalChronicMalnutrition: 0
        };
      }

      acc[populationYear].totalCountries += 1;
      acc[populationYear].totalPopulation += item.population.number;

      if (malnutritionYear) {
        if (!acc[malnutritionYear]) {
          acc[malnutritionYear] = {
            totalCountries: 0,
            totalPopulation: 0,
            totalAcuteMalnutrition: 0,
            totalChronicMalnutrition: 0
          };
        }

        if (item?.malnutrition?.acute_percent) {
          acc[malnutritionYear].totalAcuteMalnutrition +=
            item.malnutrition.acute_percent;
        }

        if (item?.malnutrition?.chronic_percent) {
          acc[malnutritionYear].totalChronicMalnutrition +=
            item.malnutrition.chronic_percent;
        }
      }

      return acc;
    },
    {} as Record<string, NutritionSummary>
  );
};
