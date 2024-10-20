import { formatInMillions, formatInPercentage } from '@/utils';
import { Box, Card, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { IconUsersGroup } from '@tabler/icons-react';

interface Props {
  title: string;
  people: number;
  prevalence: number;
}

const FoodSecurityStatItem = ({ people, prevalence, title }: Props) => {
  return (
    <Card withBorder shadow="none">
      <Stack>
        <Text size="sm" fw={700}>
          {title}
        </Text>
        <Group>
          <ThemeIcon color="blue" size="xl" variant="light">
            <IconUsersGroup size={20} />
          </ThemeIcon>
          <Box>
            <Text c="dimmed" size="sm" fw={500}>
              Population
            </Text>
            <Text c="dimmed" size="lg" tt="uppercase" fw={700}>
              {formatInMillions(people)}
            </Text>
          </Box>
        </Group>

        <Group>
          <ThemeIcon color="red" size="xl" variant="light">
            <IconUsersGroup size={20} />
          </ThemeIcon>
          <Box>
            <Text c="dimmed" size="sm" fw={500}>
              Prevalence
            </Text>
            <Text c="dimmed" size="lg" tt="uppercase" fw={700}>
              {formatInPercentage(prevalence)}
            </Text>
          </Box>
        </Group>
      </Stack>
    </Card>
  );
};

export default FoodSecurityStatItem;
