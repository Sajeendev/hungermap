import { BASE_URL } from '@/constants';
import { FoodSecurity, FoodSecurityResponse } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  Iso3Code: string;
}

const useGetFoodSecurityByCountry = ({ Iso3Code }: Props) => {
  const [data, setData] = useState<FoodSecurity | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      setError(null);

      try {
        const response: FoodSecurityResponse = await axios.get(
          `${BASE_URL}/v1/foodsecurity/country/${Iso3Code}`
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

    fetchCountries();
  }, [Iso3Code]);

  return { data, loading, error };
};

export default useGetFoodSecurityByCountry;
