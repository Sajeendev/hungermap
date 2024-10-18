import { BASE_URL } from '@/constants';
import { HazardData, HazardsResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetHazardData = () => {
  const [data, setData] = useState<HazardData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: HazardsResponse = await axios.get(
          `${BASE_URL}/v1/climate/hazards`
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

export default useGetHazardData;
