import { BASE_URL } from '@/constants';
import axios from 'axios';
import { coreMockData } from 'test/mocks';
import { renderHook, waitFor } from 'test/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useGetFoodSecurityByCountry from '../useGetFoodSecurityByCountry';

vi.mock('axios');

const Iso3Code = 'AFG';
const API_URL = `${BASE_URL}/v1/foodsecurity/country/${Iso3Code}`;

describe('useGetFoodSecurityByCountry', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should fetch data successfully', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: { body: coreMockData }
    });

    const { result } = renderHook(() =>
      useGetFoodSecurityByCountry({ Iso3Code })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(coreMockData);
    expect(result.current.error).toBe(null);
    expect(axios.get).toHaveBeenCalledWith(API_URL);
  });

  it('should handle empty data', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({ data: { body: null } });

    const { result } = renderHook(() =>
      useGetFoodSecurityByCountry({ Iso3Code })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);
    expect(axios.get).toHaveBeenCalledWith(API_URL);
  });

  it('should handle error when fetching data', async () => {
    const mockError = new Error('Network error');
    vi.mocked(axios.get).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() =>
      useGetFoodSecurityByCountry({ Iso3Code })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(mockError);
    expect(axios.get).toHaveBeenCalledWith(API_URL);
  });
});
