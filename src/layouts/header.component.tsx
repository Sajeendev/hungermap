import imgLogo from '@/assets/logos';
import { Group, Image, Paper, Text } from '@mantine/core';

const HeaderComponent = () => {
  return (
    <Paper
      withBorder
      shadow="md"
      p="md"
      h={60}
      maw={600}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        <Text
          variant="gradient"
          size="xl"
          fw={800}
          fz={32}
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
          Hunger Map
        </Text>
      </Group>
    </Paper>
  );
};

export default HeaderComponent;
