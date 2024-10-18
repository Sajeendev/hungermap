import { BASE_URL } from '@/constants';
import { CountryData, CountryDataResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetCountries = () => {
  const [countries, setCountries] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: CountryDataResponse = await axios.get(
          `${BASE_URL}/v2/info/country`
        );

        if (response?.body) {
          setCountries(response.body);
        } else {
          setCountries(null);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useGetCountries;
