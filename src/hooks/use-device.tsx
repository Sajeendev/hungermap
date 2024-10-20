import { useMediaQuery } from '@mantine/hooks';

const useDevice = () => {
  const isSmallScreen = useMediaQuery('(max-width: 48em)');
  const isMediumScreen = useMediaQuery('(max-width: 64em)');
  const isLargeScreen = useMediaQuery('(max-width: 74em)');

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};
export default useDevice;
