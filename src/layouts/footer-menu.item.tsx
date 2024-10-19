import { useHazardMarkerStore } from '@/store';
import { Anchor, Avatar, Stack, Text } from '@mantine/core';

interface Props {
  title: string;
  image: string;
}

const FooterMenuItem = ({ title, image }: Props) => {
  const { toggleMarkers } = useHazardMarkerStore();

  return (
    <Anchor underline="never" onClick={toggleMarkers}>
      <Stack gap={0} align="center">
        <Avatar src={image} size="md" radius="xl" />
        <Text size="sm" fw={500}>
          {title}
        </Text>
      </Stack>
    </Anchor>
  );
};

export default FooterMenuItem;
