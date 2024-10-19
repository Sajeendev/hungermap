import { BASE_URL } from '@/constants';
import axios from 'axios';
import { mockCoreData } from 'test/mocks';
import { renderHook, waitFor } from 'test/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import useGetCoreData from '../useGetCoreData';

vi.mock('axios');

describe('useGetCoreData', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should fetch data successfully', async () => {
    vi.mocked(axios.get).mockResolvedValueOnce({
      data: { body: mockCoreData }
    });

    const { result } = renderHook(() => useGetCoreData());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toBe(null);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.data).toEqual(mockCoreData);
    expect(result.current.error).toBe(null);
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/v2/info/country`);
  });
});
