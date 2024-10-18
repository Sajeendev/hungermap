import { BASE_URL } from '@/constants';
import { ClimateData, ClimateDataResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetClimateData = () => {
  const [data, setData] = useState<ClimateData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: ClimateDataResponse = await axios.get(
          `${BASE_URL}/v2/climate/country`
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

export default useGetClimateData;
