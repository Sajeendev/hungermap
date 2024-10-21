import { CACHE_EXPIRATION } from '@/constants';
import { beforeEach, describe, expect, it } from 'vitest';
import { getCachedData, setCachedData } from '../cache.util';

const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('Cache Utils', () => {
  const key = 'testKey';
  const data = { value: 'testData' };

  beforeEach(() => {
    localStorage.clear();
  });

  describe('setCachedData', () => {
    it('should store data in localStorage with a timestamp', () => {
      setCachedData(key, data);

      const storedData = localStorage.getItem(key);
      expect(storedData).toBeTruthy();

      const parsedData = JSON.parse(storedData!);
      expect(parsedData).toEqual({
        data,
        timestamp: expect.any(Number)
      });
    });
  });

  describe('getCachedData', () => {
    it('should return cached data if not expired', () => {
      const timestamp = Date.now();
      localStorage.setItem(
        key,
        JSON.stringify({
          data,
          timestamp
        })
      );

      const result = getCachedData(key);
      expect(result).toEqual(data);
    });

    it('should return null if data is expired', () => {
      // Subtract 1 additional second to ensure the timestamp is older than expiration
      const timestamp = Date.now() - CACHE_EXPIRATION - 1000;

      localStorage.setItem(
        key,
        JSON.stringify({
          data,
          timestamp
        })
      );

      const result = getCachedData(key);
      expect(result).toBeNull();
      expect(localStorage.getItem(key)).toBeNull();
    });

    it('should return null if no cached data exists', () => {
      const result = getCachedData('nonExistentKey');
      expect(result).toBeNull();
    });
  });
});
