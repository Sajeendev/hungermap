import { messages } from '@/contents';
import { useDevice } from '@/hooks';
import { FoodSecurity } from '@/types';
import { formatToRelativeTime } from '@/utils';
import {
  ActionIcon,
  CloseIcon,
  Group,
  Paper,
  Space,
  Text,
  Transition
} from '@mantine/core';
import FoodSecurityFragment from './food-security.fragment';

interface Props {
  opened: boolean;
  close: () => void;
  data: FoodSecurity | null;
}

const FootSecurityDataModal = ({ opened, close, data }: Props) => {
  const { isSmallScreen } = useDevice();

  return (
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
            bottom: isSmallScreen ? 0 : 80,
            left: 0,
            right: 0,
            top: isSmallScreen ? 0 : 'auto',
            zIndex: 1009,
            borderRadius: 10,
            overflowY: 'auto',
            maxWidth: isSmallScreen ? '100%' : 600,
            margin: isSmallScreen ? 0 : 'auto',
            height: isSmallScreen ? '100%' : 'auto'
          }}>
          <Group justify="space-between">
            <Text size="lg" fw={500}>
              {data?.country?.name || 'Food Security'}
            </Text>
            <ActionIcon size="md" color="blue" variant="transparent" c="gray">
              <CloseIcon onClick={close} />
            </ActionIcon>
          </Group>

          <Space h="xs" />

          {data ? (
            <FoodSecurityFragment data={data} />
          ) : (
            <Text ta="center">{messages.noDataFound}</Text>
          )}

          <Space h="xs" />
          {data?.date && (
            <Text ta="right" size="xs" c="dimmed" fw={500}>
              Updated {formatToRelativeTime(data.date)}
            </Text>
          )}
        </Paper>
      )}
    </Transition>
  );
};

export default FootSecurityDataModal;
