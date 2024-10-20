import { InfoPanelEnum } from '@/enums';
import { useDevice } from '@/hooks';
import { useInfoPanelStore } from '@/store';
import {
  ActionIcon,
  CloseIcon,
  Group,
  Loader,
  Paper,
  Space,
  Text,
  Transition
} from '@mantine/core';
import { ClimatePanel } from './panels/climate';
import { HazardPanel } from './panels/hazard';
import { NutritionPanel } from './panels/nutrition';

interface Props {
  isLoading: boolean;
}

const CoreDataComponent = ({ isLoading }: Props) => {
  const { isSmallScreen } = useDevice();
  const { isOpen, closePanel, activePanel } = useInfoPanelStore();

  const renderPanel = () => {
    switch (activePanel) {
      case InfoPanelEnum.Nutrition:
        return <NutritionPanel />;
      case InfoPanelEnum.Climate:
        return <ClimatePanel />;
      case InfoPanelEnum.Hazard:
        return <HazardPanel />;

      default:
        return null;
    }
  };

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
              Analytics
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
            renderPanel()
          )}
        </Paper>
      )}
    </Transition>
  );
};

export default CoreDataComponent;
