import { messages } from '@/contents';
import { useDevice } from '@/hooks';
import { useGetFoodSecurityByCountry } from '@/queries';
import { Country } from '@/types';
import { showToast } from '@/utils';
import { Box, Paper } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { ContriesCombo } from '../misc/combos';
import FootSecurityDataModal from './food-security-data.modal';

const FoodSecurityComponent = () => {
  const { isSmallScreen } = useDevice();

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
        message: messages.errorFetchingData
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
      <Paper
        shadow="md"
        p="md"
        style={{
          position: 'absolute',
          top: 90,
          left: isSmallScreen ? '0' : 160,
          right: isSmallScreen ? '0' : 'unset',
          zIndex: 1006,
          width: '100%',
          maxWidth: 360,
          margin: isSmallScreen ? `0 auto` : 0
        }}>
        <ContriesCombo
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          isLoading={loading}
        />
      </Paper>

      <FootSecurityDataModal
        opened={showModal}
        close={handleCloseModal}
        data={data}
      />
    </Box>
  );
};

export default FoodSecurityComponent;
