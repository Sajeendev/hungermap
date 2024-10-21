import { CACHE_EXPIRATION } from '@/constants';

export const setCachedData = (key: string, data: unknown) => {
  const cacheObject = {
    data,
    timestamp: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(cacheObject));
};

export const getCachedData = (key: string) => {
  const cachedData = localStorage.getItem(key);
  if (cachedData) {
    const parsedCache = JSON.parse(cachedData);
    const { data: cachedResponse, timestamp } = parsedCache;

    if (Date.now() - timestamp < CACHE_EXPIRATION) {
      return cachedResponse;
    } else {
      localStorage.removeItem(key);
    }
  }
  return null;
};
