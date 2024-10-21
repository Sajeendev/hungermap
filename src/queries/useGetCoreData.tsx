import { BASE_URL, queryKeys } from '@/constants';
import { CoreData, ErrorData } from '@/types';
import { getCachedData, setCachedData } from '@/utils';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetCoreData = () => {
  const [data, setData] = useState<CoreData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorData>({
    message: null,
    type: null
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError({ message: null, type: null });

      const cachedData = getCachedData(queryKeys.getCoreData);
      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/v2/info/country`);

        if (response?.data?.body?.error) {
          setError({ message: response.data.body.error, type: 'data' });
          setData(null);
        } else if (response?.data?.body) {
          const responseData = response.data.body;
          setData(responseData);
          setCachedData(queryKeys.getCoreData, responseData);
        }
      } catch (err) {
        setError({ message: String(err), type: 'request' });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetCoreData;
