import { Box, Text } from '@mantine/core';

interface Props {
  title: string;
  people: string;
  prevalence: string;
}

const ClimateOverallStatItem = ({ title, people, prevalence }: Props) => {
  return (
    <Box>
      <Text size="sm" c="dimmed">
        {title}
      </Text>
      <Text size="sm">{people || 'N/A'}</Text>
      <Text size="sm">{prevalence || 'N/A'}</Text>
    </Box>
  );
};

export default ClimateOverallStatItem;
