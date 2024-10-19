import { MantineThemeProvider } from '@mantine/core';
import { ReactNode } from 'react';
import ToastifyProvider from './toastify.provider';

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return (
    <MantineThemeProvider>
      <ToastifyProvider>{children}</ToastifyProvider>
    </MantineThemeProvider>
  );
};
export default AppProvider;
