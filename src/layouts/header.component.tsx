import imgLogo from '@/assets/logos';
import { Group, Image, Paper, Title } from '@mantine/core';

const HeaderComponent = () => {
  return (
    <Paper
      shadow="md"
      p="md"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 600,
        margin: 'auto',
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100
      }}>
      <Group justify="center" gap={20} w="100%">
        <Image
          radius="md"
          mah={40}
          w="auto"
          fit="contain"
          src={imgLogo.logoWfpFull}
          visibleFrom="sm"
        />
        <Title order={2} c="blue">
          HungerMap
        </Title>
      </Group>
    </Paper>
  );
};

export default HeaderComponent;
