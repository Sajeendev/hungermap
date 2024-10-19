import { BASE_URL } from '@/constants';
import { FoodSecurity } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  Iso3Code: string | undefined;
}

const useGetFoodSecurityByCountry = ({ Iso3Code }: Props) => {
  const [data, setData] = useState<FoodSecurity | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!Iso3Code) return;

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${BASE_URL}/v1/foodsecurity/country/${Iso3Code}`
        );

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
  }, [Iso3Code]);

  return { data, loading, error };
};

export default useGetFoodSecurityByCountry;
