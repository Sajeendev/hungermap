import { BASE_URL } from '@/constants';
import { IpcPeakData, IpcPeaksResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetIpcPeakData = () => {
  const [data, setData] = useState<IpcPeakData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
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

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetIpcPeakData;
