import { hazardMockData } from 'test/mocks';
import { describe, expect, it } from 'vitest';
import { getHazardSummary } from '../hazard.util';

describe('getHazardSummary', () => {
  it('should correctly count hazards by type', () => {
    const result = getHazardSummary(hazardMockData.hazards);
    expect(result).toEqual({
      HIGHWIND: 1,
      VOLCANO: 1
    });
  });
});
