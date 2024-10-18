import { BASE_URL } from '@/constants';
import { CountryInfoInterface } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCountryInfo = () => {
  const [countries, setCountries] = useState<CountryInfoInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}/v2/info/country`);
        setCountries(response.data);
      } catch (err) {
        setError('Failed to fetch country data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, []);

  return { countries, loading, error };
};

export default useCountryInfo;
