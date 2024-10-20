import { ClimateOverallStat } from '@/types';
import { formatInMillions, formatInPercentage } from '@/utils';
import { Box, Group } from '@mantine/core';
import ClimateOverallStatItem from './climate-overall-stat.item';

interface Props {
  stat: ClimateOverallStat;
}

const ClimateOverallItem = ({ stat }: Props) => {
  const peopleDry = formatInMillions(stat.peopleDry);
  const peopleWet = formatInMillions(stat.peopleWet);
  const peopleAnomaly = formatInMillions(stat.peopleAnomaly);
  const prevalenceDry = formatInPercentage(stat.prevalenceDry);
  const prevalenceWet = formatInPercentage(stat.prevalenceWet);
  const prevalenceAnomaly = formatInPercentage(stat.prevalenceAnomaly);

  return (
    <Box>
      <Group justify="space-between">
        <ClimateOverallStatItem
          title="Dry"
          people={peopleDry}
          prevalence={prevalenceDry}
        />
        <ClimateOverallStatItem
          title="Wet"
          people={peopleWet}
          prevalence={prevalenceWet}
        />
        <ClimateOverallStatItem
          title="Anomaly"
          people={peopleAnomaly}
          prevalence={prevalenceAnomaly}
        />
      </Group>
    </Box>
  );
};

export default ClimateOverallItem;
