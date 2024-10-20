import { CountryInfo } from '@/types';
import { formatInMillions, formatInPercentage } from '@/utils';
import { Box, Card, Divider, SimpleGrid, Space, Text } from '@mantine/core';

interface Props {
  data: CountryInfo;
}

const CoreDataItem = ({ data }: Props) => {
  return (
    <Box p={5}>
      <Text size="sm">{data.country.name}</Text>
      <Space h={5} />

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Card shadow="none" withBorder>
          <Text size="xs" c="dimmed">
            Poulation
          </Text>
          <Text size="sm" c="blue" fw={700}>
            {formatInMillions(data?.population?.number)}
          </Text>
        </Card>

        {data?.malnutrition && (
          <Card shadow="none" withBorder>
            <Text size="xs" c="dimmed">
              Malnutrition
            </Text>
            <Text size="sm" c="red" fw={700}>
              {formatInPercentage(data.malnutrition?.acute_percent)}
            </Text>
          </Card>
        )}
      </SimpleGrid>
      <Divider mt={10} />
    </Box>
  );
};

export default CoreDataItem;
