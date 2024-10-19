import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

import { theme } from '@/styles';

interface PropTypes {
  children: ReactNode;
}

const MantineUIProvider = ({ children }: PropTypes) => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="auto"
      classNamesPrefix="avverde"
      cssVariablesSelector="html">
      {children}
    </MantineProvider>
  );
};

export default MantineUIProvider;
