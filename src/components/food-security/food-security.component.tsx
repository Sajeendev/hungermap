import { useGetFoodSecurityByCountry } from '@/queries';
import { Country } from '@/types';
import { showToast } from '@/utils';
import { Box } from '@mantine/core';
import { useEffect, useState } from 'react';
import { ContriesCombo } from '../misc/combos';

const FoodSecurityComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const { data, loading, error } = useGetFoodSecurityByCountry({
    Iso3Code: selectedCountry?.iso3
  });

  useEffect(() => {
    if (error) {
      showToast({
        id: 'food-security',
        type: 'error',
        message: 'Error on retrieving data'
      });
    }
  }, [error]);

  return (
    <Box>
      <ContriesCombo
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        isLoading={loading}
      />
    </Box>
  );
};

export default FoodSecurityComponent;
