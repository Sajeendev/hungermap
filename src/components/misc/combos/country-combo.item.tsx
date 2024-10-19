import { Country } from '@/types';
import { Group, Text } from '@mantine/core';

interface Props {
  country: Country;
}

const CountryComboItem = ({ country }: Props) => {
  return (
    <Group wrap="nowrap" maw={280}>
      <Text fz={20}>📍</Text>
      <Text fz="sm" fw={500} truncate="end">
        {country.name}
      </Text>
    </Group>
  );
};

export default CountryComboItem;
