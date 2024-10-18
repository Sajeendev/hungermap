import { BASE_URL } from '@/constants';
import { CountryInfo, CountryInfoResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useCountryInfo = () => {
  const [countries, setCountries] = useState<CountryInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: CountryInfoResponse = await axios.get(
          `${BASE_URL}/v2/info/country`
        );

        if (response?.body?.countries.length === 0) {
          setCountries(response.body.countries);
        }
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
