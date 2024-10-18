import { BASE_URL } from '@/constants';
import { IpcPeakData, IpcPeaksResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetIpcPeaks = () => {
  const [data, setData] = useState<IpcPeakData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchIpcPeaks = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: IpcPeaksResponse = await axios.get(
          `${BASE_URL}/v1/ipc/peaks`
        );

        if (response?.body) {
          setData(response.body);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIpcPeaks();
  }, []);

  return { data, loading, error };
};

export default useGetIpcPeaks;
