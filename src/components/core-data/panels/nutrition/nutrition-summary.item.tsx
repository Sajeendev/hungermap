import { NutritionSummary } from '@/types';
import { formatInMillions, formatInPercentage } from '@/utils';
import { Card, Text } from '@mantine/core';

interface Props {
  year: string;
  stats: NutritionSummary;
}

const NutritionSummaryItem = ({ year, stats }: Props) => {
  const poulation = formatInMillions(stats.totalPopulation);
  const acuteMalnutrition = formatInPercentage(stats.totalAcuteMalnutrition);
  const chronicMalnutrition = formatInPercentage(
    stats.totalChronicMalnutrition
  );

  return (
    <Card shadow="none" withBorder py={10}>
      <Text fw={700} c="dimmed">
        {year}
      </Text>
      <Text size="xs">Total Countries: {stats.totalCountries}</Text>
      <Text size="xs">Total Population: {poulation || 'N/A'}</Text>
      <Text size="xs">Acute Malnutrition: {acuteMalnutrition || 'N/A'}</Text>
      <Text size="xs">
        Chronic Malnutrition: {chronicMalnutrition || 'N/A'}
      </Text>
    </Card>
  );
};

export default NutritionSummaryItem;
