import { BASE_URL } from '@/constants';
import { CoreData } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetCoreData = () => {
  const [data, setData] = useState<CoreData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}/v2/info/country`);

        if (response?.data?.body) {
          setData(response?.data?.body);
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

export default useGetCoreData;
