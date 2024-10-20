import { Card, Chip, Group, Text } from '@mantine/core';

interface Props {
  title: string;
  stat: number;
}

const HazardSummaryItem = ({ stat, title }: Props) => {
  return (
    <Card shadow="none" py={10}>
      <Group justify="space-between">
        <Text c="dimmed" size="sm">
          {title}
        </Text>

        <Chip color="blue" variant="filled">
          {stat}
        </Chip>
      </Group>
    </Card>
  );
};

export default HazardSummaryItem;
