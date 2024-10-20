import { messages } from '@/contents';
import { useGetHazardData } from '@/queries';
import { getHazardSummary, showToast } from '@/utils';
import { Box, Group, Loader, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import HazardSummaryItem from './hazard-summary.item';
import HazardChart from './hazard.chart';

const HazardPanel = () => {
  const { data, loading, error } = useGetHazardData();
  const [summary, setSummary] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    if (error.type === 'request') {
      showToast({
        id: 'hazard',
        type: 'error',
        message: messages.errorFetchingData
      });
    }
  }, [error]);

  useEffect(() => {
    if (data && !error.type) {
      setSummary(getHazardSummary(data?.hazards));
    }
  }, [data, error]);

  if (loading) {
    return (
      <Group justify="center" my={20}>
        <Loader size={32} />
      </Group>
    );
  }

  if (!summary || Object.keys(summary).length === 0) {
    return (
      <Box my={20}>
        <Text ta="center" c="dimmed">
          {messages.noDataFound}
        </Text>
      </Box>
    );
  }

  return (
    <Stack>
      <Text fw={500} size="lg" ta="center" c="dimmed">
        Hazards Stats
      </Text>

      <HazardChart data={summary} />

      <Box>
        {Object.entries(summary).map(([type, count]) => (
          <HazardSummaryItem key={type} stat={count} title={type} />
        ))}
      </Box>
    </Stack>
  );
};

export default HazardPanel;
