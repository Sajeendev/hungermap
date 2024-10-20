import { CountryInfo } from '@/types';
import { formatInMillions, formatInPercentage } from '@/utils';
import {
  Box,
  Card,
  Divider,
  Group,
  SimpleGrid,
  Space,
  Text
} from '@mantine/core';

interface Props {
  data: CountryInfo;
}

const CoreDataItem = ({ data }: Props) => {
  return (
    <Box p={5}>
      <Text size="sm">{data.country.name}</Text>
      <Space h={5} />

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Card shadow="none" withBorder py={10}>
          <Text size="xs" c="dimmed">
            Poulation
          </Text>
          <Text size="sm" c="blue" fw={700}>
            {formatInMillions(data?.population?.number)}
          </Text>
        </Card>

        {data?.malnutrition && (
          <Card shadow="none" withBorder py={10}>
            <Text size="xs" c="dimmed">
              Malnutrition
            </Text>

            <Group gap={4} justify="space-between">
              <Text size="xs" c="dimmed">
                Acute
              </Text>
              <Text size="xs" c="red" fw={700}>
                {formatInPercentage(data.malnutrition?.acute_percent)}
              </Text>
            </Group>

            <Group gap={4} justify="space-between">
              <Text size="xs" c="dimmed">
                Chronic
              </Text>
              <Text size="xs" c="red" fw={700}>
                {formatInPercentage(data.malnutrition?.chronic_percent)}
              </Text>
            </Group>
          </Card>
        )}
      </SimpleGrid>
      <Divider mt={10} />
    </Box>
  );
};

export default CoreDataItem;
