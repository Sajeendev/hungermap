import { Group, Loader } from '@mantine/core';

interface Props {
  size?: number;
}

const ScreenLoader = ({ size = 32 }: Props) => {
  return (
    <Group justify="center" my={20}>
      <Loader size={size} />
    </Group>
  );
};

export default ScreenLoader;
