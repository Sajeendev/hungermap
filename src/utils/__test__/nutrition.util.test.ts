import { coreMockData } from 'test/mocks';
import { describe, expect, it } from 'vitest';
import { getNutritionSummaryByYear } from '../nutrition.util';

describe('getNutritionSummaryByYear', () => {
  it('should correctly summarize nutrition data by year', () => {
    const result = getNutritionSummaryByYear(coreMockData);

    expect(result).toEqual({
      '2018': {
        totalCountries: 1,
        totalPopulation: 105845,
        totalAcuteMalnutrition: 0,
        totalChronicMalnutrition: 0
      },
      '2021': {
        totalCountries: 1,
        totalPopulation: 40411859,
        totalAcuteMalnutrition: 0,
        totalChronicMalnutrition: 0
      }
    });
  });
});
