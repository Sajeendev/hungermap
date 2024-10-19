import { ReactNode } from 'react';
import MantineUIProvider from './mantine-ui.provider';

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return <MantineUIProvider>{children}</MantineUIProvider>;
};
export default AppProvider;
