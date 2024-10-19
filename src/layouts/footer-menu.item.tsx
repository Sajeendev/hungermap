import { Anchor, Avatar, Stack, Text } from '@mantine/core';

interface Props {
  title: string;
  image: string;
  onClick: () => void;
}

const FooterMenuItem = ({ title, image, onClick }: Props) => {
  return (
    <Anchor underline="never" onClick={onClick}>
      <Stack gap={0} align="center">
        <Avatar src={image} size="sm" radius="xl" />
        <Text size="sm" fw={500}>
          {title}
        </Text>
      </Stack>
    </Anchor>
  );
};

export default FooterMenuItem;
