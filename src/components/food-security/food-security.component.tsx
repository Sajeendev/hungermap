import { useGetFoodSecurityByCountry } from '@/queries';
import { Country } from '@/types';
import { showToast } from '@/utils';
import { Box } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { ContriesCombo } from '../misc/combos';
import FootSecurityDataModal from './food-security-data.modal';

const FoodSecurityComponent = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [debouncedSelectedCountry] = useDebouncedValue(selectedCountry, 500);

  const { data, loading, error } = useGetFoodSecurityByCountry({
    Iso3Code: debouncedSelectedCountry?.iso3
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (error.type === 'request') {
      showToast({
        id: 'food-security',
        type: 'error',
        message: 'Error on retrieving data'
      });
    }
  }, [error]);

  useEffect(() => {
    if (data || error.type === 'data') {
      setShowModal(true);
    }
  }, [data, error.type]);

  useEffect(() => {
    if (loading) {
      setShowModal(false);
    }
  }, [loading]);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Box>
      <ContriesCombo
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        isLoading={loading}
      />

      <FootSecurityDataModal
        opened={showModal}
        close={handleCloseModal}
        data={data}
      />
    </Box>
  );
};

export default FoodSecurityComponent;
