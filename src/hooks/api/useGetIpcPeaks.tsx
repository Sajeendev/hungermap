import { BASE_URL } from '@/constants';
import { IpcPeakData, IpcPeaksResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetIpcPeaks = () => {
  const [ipcPeaks, setIpcPeaks] = useState<IpcPeakData | null>(null);
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

        if (response?.body?.ipc_peaks.length === 0) {
          setIpcPeaks(response.body);
        } else {
          setIpcPeaks(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIpcPeaks();
  }, []);

  return { countries: ipcPeaks, loading, error };
};

export default useGetIpcPeaks;
