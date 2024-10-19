import { Flex, Loader } from '@mantine/core';

interface Props {
  size?: number;
}

const ScreenLoaderComponent = ({ size = 60 }: Props) => {
  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Loader size={size} />
    </Flex>
  );
};

export default ScreenLoaderComponent;
