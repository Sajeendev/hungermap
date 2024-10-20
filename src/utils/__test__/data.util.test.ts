import { describe, expect, it } from 'vitest';
import { formatToRelativeTime, isValidDate } from '../date.util';

describe('isValidDate', () => {
  it('should return true for a valid date string', () => {
    expect(isValidDate('2023-10-20')).toBe(true);
  });
});

describe('formatToRelativeTime', () => {
  it('should return a relative time string for a valid date', () => {
    const relativeTime = formatToRelativeTime('2023-10-20');
    expect(typeof relativeTime).toBe('string');
  });
});
