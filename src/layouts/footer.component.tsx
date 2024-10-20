import imgMenu from '@/assets/images/menus';
import { InfoPanelEnum } from '@/enums';
import { useHazardMarkerStore, useInfoPanelStore } from '@/store';
import { Group, Paper } from '@mantine/core';
import FooterMenuItem from './footer-menu.item';

const FooterComponent = () => {
  const { toggleMarkers } = useHazardMarkerStore();
  const { openPanel, setActivePanel } = useInfoPanelStore();

  const handleChangeHazard = () => {
    setActivePanel(InfoPanelEnum.Hazard);
    openPanel(InfoPanelEnum.Hazard);
    toggleMarkers();
  };

  const handleChangePopulation = () => {
    setActivePanel(InfoPanelEnum.Population);
    openPanel(InfoPanelEnum.Population);
  };

  const handleChangeClimate = () => {
    setActivePanel(InfoPanelEnum.Climate);
    openPanel(InfoPanelEnum.Climate);
  };

  const handleChangeNutrition = () => {
    setActivePanel(InfoPanelEnum.Nutrition);
    openPanel(InfoPanelEnum.Nutrition);
  };

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
          onClick={handleChangePopulation}
        />
        <FooterMenuItem
          image={imgMenu.food}
          title="Nutrition"
          onClick={handleChangeNutrition}
        />
        <FooterMenuItem
          image={imgMenu.climate}
          title="Climate"
          onClick={handleChangeClimate}
        />
        <FooterMenuItem
          image={imgMenu.hazard}
          title="Hazard"
          onClick={handleChangeHazard}
        />
      </Group>
    </Paper>
  );
};

export default FooterComponent;
