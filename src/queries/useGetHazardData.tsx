import { BASE_URL } from '@/constants';
import { ErrorDataInterface, HazardData } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetHazardData = () => {
  const [data, setData] = useState<HazardData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorDataInterface>({
    message: null,
    type: null
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError({ message: null, type: null });

      try {
        const response = await axios.get(`${BASE_URL}/v1/climate/hazards`);

        if (response?.data?.body?.error) {
          setError({ message: response.data.body.error, type: 'data' });
          setData(null);
        } else if (response?.data?.body) {
          setData(response.data.body);
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

export default useGetHazardData;
