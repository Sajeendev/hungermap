import { useDevice } from '@/hooks';
import { Anchor, Avatar, Stack, Text } from '@mantine/core';

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}

const FooterMenuItem = ({ title, image, onClick }: Props) => {
  const { isSmallScreen } = useDevice();

  return (
    <Anchor underline="never" onClick={onClick}>
      <Stack gap={0} align="center">
        <Avatar src={image} size={isSmallScreen ? 'xs' : 'sm'} radius="xl" />
        <Text size={isSmallScreen ? 'xs' : 'sm'} fw={500}>
          {title}
        </Text>
      </Stack>
    </Anchor>
  );
};

export default FooterMenuItem;
