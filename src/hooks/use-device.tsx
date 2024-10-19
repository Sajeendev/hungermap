'use client';

import { useMediaQuery } from '@mantine/hooks';

// Define breakpoints based on your design system
// xs: '30em' (480px, small phones)
// sm: '48em' (768px, tablets and large phones)
// md: '64em' (1024px, small desktops)
// lg: '74em' (1184px, desktops)
// xl: '90em' (1440px, large desktops)

const useDevice = () => {
  const isSmallScreen = useMediaQuery('(max-width: 48em)');
  const isMediumScreen = useMediaQuery('(max-width: 64em)');
  const isLargeScreen = useMediaQuery('(max-width: 74em)');

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};
export default useDevice;
