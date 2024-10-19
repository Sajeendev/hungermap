import { Flex, Loader } from '@mantine/core';

const LoaderComponent = () => {
  return (
    <Flex w="100%" h="100%" justify="center" align="center">
      <Loader size={60} />
    </Flex>
  );
};

export default LoaderComponent;
