import { ClimateInfo } from '@/types';
import { Card, Text } from '@mantine/core';
import ClimateOverallItem from './climate-overall.item';

interface Props {
  climateInfo: ClimateInfo;
}

const ClimateItem = ({ climateInfo }: Props) => {
  return (
    <Card shadow="none" withBorder py={10}>
      <Text c="dimmed" fw={500}>
        {climateInfo.country.name}
      </Text>

      {climateInfo?.dataPoints.map((point, i) => (
        <ClimateOverallItem key={i} stat={point.overall} />
      ))}
    </Card>
  );
};

export default ClimateItem;
