import { BASE_URL } from '@/constants';
import axios from 'axios';
import { coreMockData } from 'test/mocks';
import { renderHook, waitFor } from 'test/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useGetIpcPeakData from '../useGetIpcPeakData';

vi.mock('axios');

const API_URL = `${BASE_URL}/v1/ipc/peaks`;

describe('useGetIpcPeakData', () => {
  beforeEach(() => {
    vi.resetAllMocks();

    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn()
    });
  });

  it('should fetch data successfully', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: { body: coreMockData }
    });

    const { result } = renderHook(() => useGetIpcPeakData());

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

    const { result } = renderHook(() => useGetIpcPeakData());

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

    const { result } = renderHook(() => useGetIpcPeakData());

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
