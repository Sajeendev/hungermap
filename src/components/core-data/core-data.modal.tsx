import { useDevice } from '@/hooks';
import { useInfoPanelStore } from '@/store';
import { CoreData } from '@/types';
import {
  ActionIcon,
  CloseIcon,
  Group,
  Loader,
  Paper,
  Space,
  Stack,
  Text,
  Transition
} from '@mantine/core';
import CoreDataItem from './core-data.item';

interface Props {
  data: CoreData | null;
  isLoading: boolean;
}

const CoreDataModal = ({ data, isLoading }: Props) => {
  const { isSmallScreen } = useDevice();
  const { isOpen, closePanel } = useInfoPanelStore();

  return (
    <Transition
      mounted={isOpen}
      transition="slide-left"
      duration={500}
      timingFunction="ease">
      {styles => (
        <Paper
          shadow="md"
          p="md"
          style={{
            ...styles,
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100%',
            width: isSmallScreen ? '100vw' : '350px',
            overflowY: 'auto',
            zIndex: 1009,
            display: 'flex',
            flexDirection: 'column'
          }}>
          <Group justify="space-between">
            <Text c="dimmed" fw={500}>
              Poulation & Malnutrition
            </Text>
            <ActionIcon size="md" color="blue" variant="transparent" c="gray">
              <CloseIcon onClick={closePanel} />
            </ActionIcon>
          </Group>

          <Space h="xs" />

          {isLoading ? (
            <Group justify="center" my={20}>
              <Loader size={isSmallScreen ? 'md' : 'lg'} />
            </Group>
          ) : (
            <Stack gap={0}>
              {data?.countries.map(item => (
                <CoreDataItem data={item} key={item.country.id} />
              ))}
            </Stack>
          )}
        </Paper>
      )}
    </Transition>
  );
};

export default CoreDataModal;
