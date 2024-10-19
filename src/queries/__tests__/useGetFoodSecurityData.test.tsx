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
    expect(result.current.error).toEqual({ message: null, type: null });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(coreMockData);
    expect(result.current.error).toEqual({ message: null, type: null });
    expect(axios.get).toHaveBeenCalledWith(API_URL);
  });

  it('should handle empty data', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({ data: { body: null } });

    const { result } = renderHook(() =>
      useGetFoodSecurityByCountry({ Iso3Code })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual({ message: null, type: null });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual({ message: null, type: null });
    expect(axios.get).toHaveBeenCalledWith(API_URL);
  });

  it('should handle API error response', async () => {
    const mockErrorResponse = {
      data: {
        body: {
          error: 'API Error'
        }
      }
    };
    vi.mocked(axios.get).mockResolvedValueOnce(mockErrorResponse);

    const { result } = renderHook(() =>
      useGetFoodSecurityByCountry({ Iso3Code })
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual({ message: null, type: null });

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toBe(null);
    expect(result.current.error).toEqual({
      message: 'API Error',
      type: 'data'
    });
  });
});
