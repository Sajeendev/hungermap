import { messages } from '@/content';
import { FoodSecurity } from '@/types';
import {
  CloseIcon,
  Group,
  Paper,
  ScrollArea,
  Space,
  Text,
  ThemeIcon,
  Transition
} from '@mantine/core';
import FoodSecurityFragment from './food-security.fragment';

interface Props {
  opened: boolean;
  close: () => void;
  data: FoodSecurity | null;
}

const FootSecurityDataModal = ({ opened, close, data }: Props) => {
  return (
    <ScrollArea>
      <Transition
        mounted={opened}
        transition="slide-up"
        duration={500}
        timingFunction="ease">
        {styles => (
          <Paper
            shadow="md"
            p="md"
            style={{
              ...styles,
              position: 'fixed',
              bottom: 80,
              left: 0,
              right: 0,
              zIndex: 1009,
              borderRadius: 10,
              overflowY: 'auto',
              maxWidth: 600,
              margin: 'auto'
            }}>
            <Group justify="space-between">
              <Text size="lg" fw={500}>
                {data?.country?.name || 'Food Security'}
              </Text>
              <ThemeIcon size="md" color="blue" variant="transparent" c="gray">
                <CloseIcon onClick={close} />
              </ThemeIcon>
            </Group>

            <Space h="xs" />

            {data ? (
              <FoodSecurityFragment data={data} />
            ) : (
              <Text>{messages.noDataFound}</Text>
            )}
          </Paper>
        )}
      </Transition>
    </ScrollArea>
  );
};

export default FootSecurityDataModal;
