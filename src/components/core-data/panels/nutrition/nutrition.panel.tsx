import { messages } from '@/contents';
import { useGetCoreData } from '@/queries';
import { NutritionSummary } from '@/types';
import { getNutritionSummaryByYear, showToast } from '@/utils';
import { Box, Group, Loader, Stack, Text } from '@mantine/core';
import { useEffect, useState } from 'react';
import NutritionSummaryItem from './nutrition-summary.item';
import NutritionChartItem from './nutrition.chart.item';

const NutritionPanel = () => {
  const { data, loading, error } = useGetCoreData();
  const [summary, setSummary] = useState<Record<
    string,
    NutritionSummary
  > | null>(null);

  useEffect(() => {
    if (error.type === 'request') {
      showToast({
        id: 'nutrition',
        type: 'error',
        message: messages.errorFetchingData
      });
    }
  }, [error]);

  useEffect(() => {
    if (data && !error.type) {
      setSummary(getNutritionSummaryByYear(data));
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
        Malnutrition Stats
      </Text>

      <NutritionChartItem summary={summary} />

      {Object.entries(summary).map(([year, stats]) => (
        <NutritionSummaryItem stats={stats} key={year} year={year} />
      ))}
    </Stack>
  );
};

export default NutritionPanel;
