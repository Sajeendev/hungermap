import imgMenu from '@/assets/images/menus';
import { useHazardMarkerStore } from '@/store';
import { Group, Paper } from '@mantine/core';
import FooterMenuItem from './footer-menu.item';

const FooterComponent = () => {
  const { toggleMarkers } = useHazardMarkerStore();

  return (
    <Paper
      withBorder
      shadow="md"
      p="md"
      h={60}
      maw={600}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 'auto',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
      }}>
      <Group justify="space-evenly" w="100%">
        <FooterMenuItem
          image={imgMenu.popultaion}
          title="Population"
          onClick={() => {}}
        />
        <FooterMenuItem
          image={imgMenu.food}
          title="Nutrition"
          onClick={() => {}}
        />
        <FooterMenuItem
          image={imgMenu.climate}
          title="Climate"
          onClick={() => {}}
        />
        <FooterMenuItem
          image={imgMenu.hazard}
          title="Hazard"
          onClick={toggleMarkers}
        />
      </Group>
    </Paper>
  );
};

export default FooterComponent;
