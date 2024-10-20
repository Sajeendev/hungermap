import { ComponentLoader } from '@/components/misc/loaders';
import { messages } from '@/contents';
import { useGetClimateData } from '@/queries';
import { showToast } from '@/utils';
import { Stack, Text } from '@mantine/core';
import { useEffect } from 'react';
import ClimateItem from './climate.item';

const ClimatePanel = () => {
  const { data, loading, error } = useGetClimateData();

  useEffect(() => {
    if (error.type === 'request') {
      showToast({
        id: 'climate',
        type: 'error',
        message: messages.errorFetchingData
      });
    }
  }, [error]);

  if (loading) {
    return <ComponentLoader />;
  }

  return (
    <Stack>
      <Text fw={500} size="lg" ta="center" c="dimmed">
        Climate Stats
      </Text>

      {data?.countries.map(info => (
        <ClimateItem climateInfo={info} key={info.country.id} />
      ))}
    </Stack>
  );
};

export default ClimatePanel;
