import { BASE_URL } from '@/constants';
import { ErrorDataInterface, FoodSecurity } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Props {
  Iso3Code: string | undefined;
}

const useGetFoodSecurityByCountry = ({ Iso3Code }: Props) => {
  const [data, setData] = useState<FoodSecurity | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorDataInterface>({
    message: null,
    type: null
  });

  useEffect(() => {
    const fetchData = async () => {
      if (!Iso3Code) return;

      setLoading(true);
      setError({ message: null, type: null });

      try {
        const response = await axios.get(
          `${BASE_URL}/v1/foodsecurity/country/${Iso3Code}`
        );

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
  }, [Iso3Code]);

  return { data, loading, error };
};

export default useGetFoodSecurityByCountry;
